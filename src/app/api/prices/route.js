import { NextResponse } from "next/server";
import { Stripe } from "stripe";

export async function GET() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const prices = await stripe.prices.list();
  return NextResponse.json(prices.data);
}
