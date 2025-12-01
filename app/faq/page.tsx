'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay for your convenience.'
  },
  {
    question: 'How long does delivery take?',
    answer: 'Standard delivery typically takes 5-7 business days. For custom or made-to-order items, please allow 2-3 weeks for production before shipping. You will receive tracking information once your order ships.'
  },
  {
    question: 'Do you offer assembly services?',
    answer: 'Yes, we offer professional assembly services for an additional fee. This can be selected during checkout. Our team will assemble your furniture in your home and remove all packaging materials.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for most items. Items must be in their original condition and packaging. Custom or made-to-order items are final sale. Please contact our customer service team to initiate a return.'
  },
  {
    question: 'Do you ship internationally?',
    answer: 'Currently, we only ship within the United States. We apologize for any inconvenience and hope to expand our shipping options in the future.'
  },
  {
    question: 'How do I care for my furniture?',
    answer: 'For wood furniture, dust regularly with a soft, dry cloth. Avoid placing in direct sunlight or near heat sources. For upholstered items, vacuum with an upholstery attachment and clean spills immediately with a clean, damp cloth. Always refer to the care instructions provided with your specific item.'
  },
  {
    question: 'Can I customize my furniture?',
    answer: 'Many of our pieces can be customized with different fabric, finish, or size options. Look for the "Customize" button on product pages or contact our design team for special requests.'
  },
  {
    question: 'What if my item arrives damaged?',
    answer: 'Inspect your delivery upon arrival. If you notice any damage, please contact us within 48 hours with photos of the damage. We will arrange for a replacement or repair at no additional cost to you.'
  }
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen mt-14 bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">Find answers to common questions about our products and services</p>
        </div>
        
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg font-medium text-gray-900">{item.question}</span>
                {openIndex === index ? (
                  <FiChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <FiChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div id={`faq-${index}`} className="px-6 pb-4 pt-0 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-4">
            If you can't find the answer you're looking for, our customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:support@pooms.com"
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
            >
              Email Us
            </a>
            <a
              href="tel:+11234567890"
              className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors text-center"
            >
              Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;