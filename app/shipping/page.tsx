// app/shipping-returns/page.tsx
import { FaTruck, FaExchangeAlt, FaShieldAlt, FaQuestionCircle } from 'react-icons/fa';

export default function ShippingReturnsPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-12 text-center">Shipping & Returns</h1>
        
        <div className="space-y-12">
          {/* Shipping Information */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaTruck className="text-blue-600 text-3xl mr-3" />
              <h2 className="text-2xl font-semibold">Shipping Information</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Processing Time</h3>
                <p className="text-gray-600">
                  Orders are typically processed within 1-2 business days. During peak seasons, processing may take 3-5 business days.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">Shipping Options</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <h4 className="font-medium">Standard Shipping</h4>
                    <p className="text-gray-600">3-7 business days - $9.99 or FREE on orders over $99</p>
                  </div>
                  <div className="border-b pb-4">
                    <h4 className="font-medium">Expedited Shipping</h4>
                    <p className="text-gray-600">2-3 business days - $19.99</p>
                  </div>
                  <div>
                    <h4 className="font-medium">Next Day Shipping</h4>
                    <p className="text-gray-600">1 business day - $29.99 (Order by 12 PM EST)</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">International Shipping</h3>
                <p className="text-gray-600 mb-2">
                  We ship to select international destinations. International orders may be subject to customs fees, 
                  import duties, and taxes which are the responsibility of the customer.
                </p>
                <p className="text-sm text-gray-500">
                  Delivery times vary by country, typically 7-21 business days.
                </p>
              </div>
            </div>
          </section>

          {/* Returns & Exchanges */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaExchangeAlt className="text-blue-600 text-3xl mr-3" />
              <h2 className="text-2xl font-semibold">Returns & Exchanges</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Our Policy</h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy for most items. To be eligible for a return, 
                  your item must be in the same condition that you received it, unused, and in its original packaging.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">How to Return</h3>
                <ol className="list-decimal pl-6 space-y-2 text-gray-600">
                  <li>Contact our customer service team at support@furniturestore.com to initiate your return</li>
                  <li>Package your item securely in the original packaging</li>
                  <li>Include the return form with your package</li>
                  <li>Ship your return using a trackable shipping service</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex">
                  <FaShieldAlt className="text-blue-600 text-xl mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-800">Extended Holiday Returns</h4>
                    <p className="text-blue-700 text-sm">
                      Items purchased between November 1st and December 25th can be returned until January 31st of the following year.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center mb-6">
              <FaQuestionCircle className="text-blue-600 text-3xl mr-3" />
              <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">When will my order ship?</h3>
                <p className="text-gray-600 mt-1">
                  Most orders ship within 1-2 business days. You'll receive a shipping confirmation email with tracking information once your order ships.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">Can I change or cancel my order?</h3>
                <p className="text-gray-600 mt-1">
                  We process orders quickly to ensure fast delivery. If you need to make changes, please contact us immediately. We'll do our best to accommodate your request if your order hasn't shipped yet.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium">What if my item arrives damaged?</h3>
                <p className="text-gray-600 mt-1">
                  Please contact us within 48 hours of delivery with photos of the damaged item and packaging. We'll work with you to resolve the issue as quickly as possible.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Support */}
          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">Need more help? Our customer service team is here for you.</p>
            <a 
              href="mailto:support@furniturestore.com" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}