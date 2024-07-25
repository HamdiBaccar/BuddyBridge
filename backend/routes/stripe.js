const express = require('express');
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const User = require('../models/User');

const router = express.Router();

router.post('/create-checkout-session', async (req, res) => {
  const { userId } = req.body;
  
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Registration Fee',
          },
          unit_amount: 20000,
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'http://localhost:8081/success',
      cancel_url: 'http://localhost:8081/cancel',
      metadata: { userId: userId },
    });
    
    res.json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
