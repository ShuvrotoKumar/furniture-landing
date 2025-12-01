'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';

type BillingCycle = 'monthly' | 'yearly';

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: string;
    yearly: string;
  };
  features: string[];
  notIncluded?: string[];
  isPopular?: boolean;
  cta: string;
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfect for small spaces and starter homes',
    price: {
      monthly: '$299',
      yearly: '$2,999',
    },
    features: [
      'Basic furniture set',
      'Standard materials',
      '6-month warranty',
      'Email support',
      'Standard delivery',
    ],
    notIncluded: ['Customization', 'Premium materials', 'Priority support'],
    cta: 'Get Started',
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Ideal for growing families',
    price: {
      monthly: '$599',
      yearly: '$5,999',
    },
    features: [
      'Complete room set',
      'Premium materials',
      '1-year warranty',
      'Priority support',
      'Free assembly',
      '2 free design consultations',
    ],
    isPopular: true,
    cta: 'Choose Standard',
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Luxury furniture for your dream home',
    price: {
      monthly: '$999',
      yearly: '$9,999',
    },
    features: [
      'Whole home package',
      'Luxury materials',
      'Lifetime warranty',
      '24/7 VIP support',
      'Free white-glove delivery',
      'Unlimited design consultations',
      'Custom furniture design',
      'Free seasonal refresh',
    ],
    cta: 'Go Premium',
  },
];

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>('monthly');
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const toggleBillingCycle = () => {
    setBillingCycle((prev) => (prev === 'monthly' ? 'yearly' : 'monthly'));
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
    // In a real app, you would handle the plan selection (e.g., redirect to checkout)
    console.log(`Selected plan: ${planId}`);
  };

  const calculateSavings = (plan: PricingPlan) => {
    if (billingCycle === 'yearly') {
      const monthlyPrice = parseInt(plan.price.monthly.replace(/[^0-9]/g, ''));
      const yearlyPrice = parseInt(plan.price.yearly.replace(/[^0-9]/g, ''));
      const monthlyTotal = monthlyPrice * 12;
      const savings = monthlyTotal - yearlyPrice;
      return `Save $${savings} annually`;
    }
    return '';
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mt-15 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Choose the perfect plan for your home. No hidden fees, no surprises.
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 flex items-center justify-center">
            <span className="text-gray-700 font-medium mr-3">Monthly</span>
            <button
              type="button"
              onClick={toggleBillingCycle}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                billingCycle === 'yearly' ? 'bg-primary-600' : 'bg-gray-200'
              }`}
              role="switch"
              aria-checked={billingCycle === 'yearly'}
            >
              <span className="sr-only">Toggle billing cycle</span>
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  billingCycle === 'yearly' ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className="ml-3 flex items-center">
              <span className="text-gray-700 font-medium">Yearly</span>
              <span className="ml-2 rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-semibold text-primary-800">
                Save 15%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`relative flex flex-col rounded-2xl border border-gray-200 bg-white p-8 shadow-sm ${
                plan.isPopular ? 'border-2 border-primary-500' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-0.5 text-sm font-medium text-primary-800">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-500">{plan.description}</p>
                
                <div className="mt-6">
                  <p className="text-4xl font-bold tracking-tight text-gray-900">
                    {billingCycle === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    {billingCycle === 'monthly' ? 'per month' : 'per year'}
                  </p>
                  {billingCycle === 'yearly' && (
                    <p className="mt-2 text-sm text-green-600">
                      {calculateSavings(plan)}
                    </p>
                  )}
                </div>
                
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="h-5 w-5 flex-shrink-0 text-green-500" aria-hidden="true" />
                      <span className="ml-3 text-gray-700">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded?.map((item) => (
                    <li key={item} className="flex items-start text-gray-400">
                      <X className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      <span className="ml-3">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button
                onClick={() => handlePlanSelect(plan.id)}
                className="!bg-blue-500 hover:!bg-blue-600 mt-8 w-full py-3 text-base font-medium text-white"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
        
        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Frequently asked questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers.'
              },
              {
                question: 'Can I change plans later?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time.'
              },
              {
                question: 'Is there a money-back guarantee?',
                answer: 'We offer a 30-day money-back guarantee on all our plans.'
              },
              {
                question: 'How does the design consultation work?',
                answer: 'After signing up, you\'ll be able to schedule a video call with one of our design experts to discuss your needs.'
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;