import { loadStripe } from '@stripe/stripe-js';

// so now this is essentially going to load our stripe instance with our publishable key, which identifies
// our application to Stripe as our application.
export const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);