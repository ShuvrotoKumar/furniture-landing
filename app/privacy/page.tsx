// app/privacy/page.tsx
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <p className="text-gray-600 mb-6">Last Updated: November 26, 2023</p>
          
          <div className="prose max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              <p className="mb-4">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Shipping and billing addresses</li>
                <li>Payment information</li>
                <li>Order history and preferences</li>
                <li>Communication preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Provide customer support</li>
                <li>Improve our products and services</li>
                <li>Send promotional communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
              <p className="mb-4">We do not sell your personal information. We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Service providers who assist with our business operations</li>
                <li>Payment processors to complete your transactions</li>
                <li>Shipping carriers to deliver your orders</li>
                <li>When required by law or to protect our rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify any inaccurate personal data</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your data</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p className="mb-4">We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Changes to This Policy</h2>
              <p className="mb-4">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
              <p className="mb-4">If you have any questions about this privacy policy, please contact us at:</p>
              <p className="mb-2"><strong>Email:</strong> privacy@furniturestore.com</p>
              <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Furniture St., Design District, 10001</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}