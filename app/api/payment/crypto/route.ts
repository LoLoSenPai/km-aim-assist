import { NextResponse } from 'next/server';
// @ts-ignore
import { Client, resources } from 'coinbase-commerce-node';
import { products } from '@/lib/stripe-config';

Client.init(process.env.COINBASE_COMMERCE_API_KEY!);
const { Charge } = resources;

export async function POST(req: Request) {
  try {
    const { productId } = await req.json();
    const product = products[productId as keyof typeof products];

    if (!product) {
      return NextResponse.json({ error: 'Invalid product' }, { status: 400 });
    }

    const chargeData = {
      name: product.name,
      description: product.description,
      local_price: {
        amount: product.price.toString(),
        currency: 'USD',
      },
      pricing_type: 'fixed_price',
      redirect_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/buy`,
    };

    const charge = await Charge.create(chargeData);
    return NextResponse.json({ chargeId: charge.id, hostedUrl: charge.hosted_url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}