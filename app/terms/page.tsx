// app/terms/page.tsx
import { FaGavel, FaUserShield, FaInfoCircle } from 'react-icons/fa';
import Link from 'next/link';
export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 text-center">Terms of Service</h1>
        <p className="text-gray-600 text-center mb-12">Last Updated: November 26, 2023</p>
        
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-gray-600 mb-4">
                Welcome to FurniCraft. These Terms of Service ("Terms") govern your access to and use of our website and services. 
                By accessing or using our services, you agree to be bound by these Terms.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <FaGavel className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold">2. Account Registration</h2>
              </div>
              <div className="pl-10">
                <h3 className="text-xl font-medium mb-2">2.1 Eligibility</h3>
                <p className="text-gray-600 mb-4">
                  You must be at least 18 years old to create an account and use our services. 
                  By creating an account, you represent that you meet these requirements.
                </p>

                <h3 className="text-xl font-medium mb-2">2.2 Account Security</h3>
                <p className="text-gray-600">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities 
                  that occur under your account. Notify us immediately of any unauthorized use of your account.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <FaUserShield className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold">3. Orders and Payments</h2>
              </div>
              <div className="pl-10 space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-2">3.1 Pricing</h3>
                  <p className="text-gray-600">
                    All prices are in USD and are subject to change without notice. We reserve the right to modify or 
                    discontinue products or services at any time.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-2">3.2 Payment</h3>
                  <p className="text-gray-600">
                    We accept various payment methods as indicated on our website. You agree to provide current, complete, 
                    and accurate purchase and account information for all purchases.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">4. Returns and Refunds</h2>
              <p className="text-gray-600 mb-4">
                Please refer to our <Link href="/shipping-returns" className="text-blue-600 hover:underline">Shipping & Returns</Link> policy for detailed 
                information about our return and refund procedures.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center mb-4">
                <FaInfoCircle className="text-blue-600 text-2xl mr-3" />
                <h2 className="text-2xl font-semibold">5. Intellectual Property</h2>
              </div>
              <p className="text-gray-600">
                All content on this website, including text, graphics, logos, and images, is the property of FurniCraft 
                and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600 mb-4">
                To the fullest extent permitted by law, FurniCraft shall not be liable for any indirect, incidental, 
                special, consequential, or punitive damages resulting from your access to or use of our services.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
              <p className="text-gray-600 mb-4">
                We reserve the right to modify these Terms at any time. We will provide notice of any changes by 
                updating the "Last Updated" date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-gray-600"><strong>Email:</strong> legal@furniturestore.com</p>
                <p className="text-gray-600"><strong>Phone:</strong> (555) 987-6543</p>
                <p className="text-gray-600"><strong>Address:</strong> 123 Legal Dept, Design District, 10001</p>
              </div>
            </section>

            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                By using our website, you acknowledge that you have read and understood these Terms of Service 
                and agree to be bound by them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}