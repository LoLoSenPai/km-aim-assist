"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import { Button } from '@/components/ui/button';
import { products } from '@/lib/stripe-config';
import { loadStripe } from '@stripe/stripe-js';
import { CreditCard, Bitcoin } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function PaymentMethods() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleStripePayment = async () => {
    setIsLoading(true);
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to initialize');

      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: products['K/M Aim Assist'].priceId,
        }),
      });

      const { url } = await response.json();
      window.location.href = url;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCryptoPayment = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/payment/crypto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: 'K/M Aim Assist',
        }),
      });

      const { hostedUrl } = await response.json();
      window.location.href = hostedUrl;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <Button
        onClick={handleStripePayment}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2"
      >
        <CreditCard className="h-4 w-4" />
        Pay with Card
      </Button>

      <PayPalScriptProvider options={{ 
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
        currency: "USD"
      }}>
        <PayPalButtons
          style={{ layout: "horizontal" }}
          createOrder={async () => {
            const response = await fetch('/api/payment/paypal', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                productId: 'K/M Aim Assist',
              }),
            });
            const order = await response.json();
            return order.id;
          }}
          onApprove={async (data) => {
            router.push('/success');
          }}
        />
      </PayPalScriptProvider>

      <Button
        onClick={handleCryptoPayment}
        disabled={isLoading}
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
      >
        <Bitcoin className="h-4 w-4" />
        Pay with Crypto
      </Button>
    </div>
  );
}