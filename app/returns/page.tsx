// app/returns/page.tsx
import { FaUndo, FaBoxOpen, FaQuestionCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function ReturnsPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <FaUndo className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Returns & Exchanges</h1>
          <p className="text-xl text-gray-600">Our hassle-free return policy makes it easy to shop with confidence</p>
        </div>

        <div className="space-y-8">
          {/* Return Policy */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Our Return Policy</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <FaBoxOpen className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">30-Day Return Window</h3>
                  <p className="text-gray-600">
                    You have 30 days from the delivery date to return your item(s) for a full refund or exchange.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <FaUndo className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Eligibility</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Item must be unused, in original condition, and in original packaging</li>
                    <li>All tags and labels must be attached</li>
                    <li>Proof of purchase is required</li>
                    <li>Final sale items are not eligible for return or exchange</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                  <FaQuestionCircle className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Non-Returnable Items</h3>
                  <p className="text-gray-600 mb-2">The following items cannot be returned or exchanged:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Custom or made-to-order furniture</li>
                    <li>Clearance or final sale items</li>
                    <li>Gift cards</li>
                    <li>Items not in original condition</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* How to Return */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">How to Return an Item</h2>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Initiate Your Return',
                  description: 'Contact our customer service team at returns@furniturestore.com or call (555) 123-4567 to start your return process.'
                },
                {
                  step: '2',
                  title: 'Package Your Item',
                  description: 'Securely pack your item in its original packaging with all included parts and accessories.'
                },
                {
                  step: '3',
                  title: 'Ship Your Return',
                  description: 'Use the return shipping label provided by our team. We recommend using a trackable shipping service.'
                },
                {
                  step: '4',
                  title: 'Receive Your Refund',
                  description: 'Once we receive and inspect your return, we will process your refund within 5-7 business days.'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-gray-100 w-8 h-8 rounded-full flex items-center justify-center font-semibold text-gray-700 mr-4 mt-1 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Refund Information */}
          <section className="bg-blue-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Refund Information</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold mb-1">Refund Processing Time</h3>
                <p className="text-gray-600">Refunds are typically processed within 5-7 business days after we receive your return.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold mb-1">Original Payment Method</h3>
                <p className="text-gray-600">Refunds will be issued to the original payment method used for purchase.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h3 className="font-semibold mb-1">Shipping Costs</h3>
                <p className="text-gray-600">Original shipping fees are non-refundable. Return shipping costs are the responsibility of the customer unless the return is due to our error.</p>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <div className="text-center mt-12">
            <h3 className="text-xl font-semibold mb-4">Need Help With Your Return?</h3>
            <p className="text-gray-600 mb-6">Our customer service team is here to help with any questions about returns or exchanges.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="mailto:returns@furniturestore.com"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Email Us
              </a>
              <a
                href="tel:5551234567"
                className="inline-block bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Call Us: (555) 123-4567
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-6">
              For more information, please see our <Link href="/shipping" className="text-blue-600 hover:underline">Shipping Policy</Link> or 
              our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}