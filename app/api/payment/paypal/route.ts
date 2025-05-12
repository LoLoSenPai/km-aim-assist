import { NextResponse } from 'next/server';
import { products } from '@/lib/stripe-config';

export async function POST(req: Request) {
  try {
    const { productId } = await req.json();
    const product = products[productId as keyof typeof products];

    if (!product) {
      return NextResponse.json({ error: 'Invalid product' }, { status: 400 });
    }

    // Create PayPal order
    const order = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: product.price.toString(),
          },
          description: product.description,
        },
      ],
    };

    const response = await fetch(`${process.env.PAYPAL_API_URL}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(
          `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
        ).toString('base64')}`,
      },
      body: JSON.stringify(order),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}