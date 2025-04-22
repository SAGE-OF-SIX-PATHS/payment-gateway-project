import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import Stripe from 'stripe';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({ origin: 'https://payment-gateway-project-sigma.vercel.app/' }));

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
          apiVersion: '2025-03-31.basil',
          typescript: true
});

// Interfaces
interface LineItem {
          name: string;
          price: number;
          quantity: number;
}

interface CheckoutRequest {
          items: LineItem[];
}

// Fixed route handler
app.post('/create-checkout-session', async (
          req: Request<{}, {}, CheckoutRequest>,
          res: Response
) => {
          try {
                    if (!req.body?.items || !Array.isArray(req.body.items)) {
                              return res.status(400).json({ error: "Items array is required" });
                    }

                    const session = await stripe.checkout.sessions.create({
                              payment_method_types: ['card'],
                              mode: 'payment',
                              line_items: req.body.items.map(item => ({
                                        price_data: {
                                                  currency: 'ngn',
                                                  product_data: {
                                                            name: item.name,
                                                  },
                                                  unit_amount: Math.round(item.price * 100),
                                        },
                                        quantity: item.quantity,
                              })),
                              success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
                              cancel_url: `${process.env.CLIENT_URL}/cancel`,
                    });

                    return res.json({ url: session.url });
          } catch (error) {
                    console.error(error);
                    return res.status(500).json({ error: "Internal server error" });
          }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
          console.log(`Server running on port ${PORT}`);
});