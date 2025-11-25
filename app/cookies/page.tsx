// app/cookies/page.tsx
import { FaCookieBite, FaShieldAlt, FaUserCog } from 'react-icons/fa';
import { BiCookie } from 'react-icons/bi';

export default function CookiesPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <BiCookie className="text-blue-600 text-3xl" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-600">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-8">
              This Cookie Policy explains how our website uses cookies and similar technologies to recognize you when you visit our site. 
              It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>

            <div className="space-y-12">
              {/* What are cookies */}
              <section>
                <div className="flex items-center mb-4">
                  <FaCookieBite className="text-blue-600 text-2xl mr-3" />
                  <h2 className="text-2xl font-bold">What are cookies?</h2>
                </div>
                <div className="pl-10">
                  <p className="mb-4 text-gray-700">
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                    Cookies are widely used by website owners to make their websites work, or to work more efficiently, 
                    as well as to provide reporting information.
                  </p>
                  <p className="text-gray-700">
                    Cookies set by the website owner are called "first-party cookies". Cookies set by parties other than the 
                    website owner are called "third-party cookies".
                  </p>
                </div>
              </section>

              {/* Why do we use cookies */}
              <section>
                <div className="flex items-center mb-4">
                  <FaShieldAlt className="text-blue-600 text-2xl mr-3" />
                  <h2 className="text-2xl font-bold">Why do we use cookies?</h2>
                </div>
                <div className="pl-10">
                  <p className="mb-4 text-gray-700">
                    We use first and third-party cookies for several reasons. Some cookies are required for technical reasons 
                    in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies. 
                    Other cookies also enable us to track and target the interests of our users to enhance the experience on our site.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-blue-800 mb-2">We use cookies for:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Remembering your preferences and settings</li>
                      <li>Understanding how you use our website</li>
                      <li>Personalizing your experience</li>
                      <li>Measuring the effectiveness of our marketing</li>
                      <li>Improving our services</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Types of cookies we use */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Types of cookies we use</h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Essential Cookies',
                      description: 'These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you such as setting your privacy preferences, logging in, or filling in forms.',
                      examples: ['Session management', 'Load balancing', 'Security']
                    },
                    {
                      title: 'Performance Cookies',
                      description: 'These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
                      examples: ['Google Analytics', 'Hotjar']
                    },
                    {
                      title: 'Functional Cookies',
                      description: 'These enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.',
                      examples: ['Language preferences', 'Region selection']
                    },
                    {
                      title: 'Targeting Cookies',
                      description: 'These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant advertisements on other sites.',
                      examples: ['Facebook Pixel', 'Google Ads']
                    }
                  ].map((type, index) => (
                    <div key={index} className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{type.title}</h3>
                      <p className="text-gray-700 mb-3">{type.description}</p>
                      {type.examples && (
                        <div className="mt-2">
                          <span className="text-sm font-medium text-gray-600">Examples: </span>
                          <span className="text-sm text-gray-600">{type.examples.join(', ')}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Managing cookies */}
              <section>
                <div className="flex items-center mb-4">
                  <FaUserCog className="text-blue-600 text-2xl mr-3" />
                  <h2 className="text-2xl font-bold">Managing cookies</h2>
                </div>
                <div className="pl-10">
                  <p className="mb-4 text-gray-700">
                    You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, 
                    you may still use our website though your access to some functionality and areas of our website may be restricted.
                  </p>
                  <p className="mb-4 text-gray-700">
                    Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline 
                    cookies if you prefer. The Help menu on the menu bar of most browsers will tell you how to prevent your 
                    browser from accepting new cookies, how to have the browser notify you when you receive a new cookie and 
                    how to disable cookies altogether.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <h3 className="font-semibold text-blue-800 mb-2">Browser-specific instructions:</h3>
                    <ul className="list-disc pl-5 space-y-1 text-gray-700">
                      <li>
                        <a 
                          href="https://support.google.com/chrome/answer/95647" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Chrome
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Firefox
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Safari
                        </a>
                      </li>
                      <li>
                        <a 
                          href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                          target="_blank" 
                          rel="opener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          Microsoft Edge
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Changes to this policy */}
              <section>
                <h2 className="text-2xl font-bold mb-4">Changes to this policy</h2>
                <p className="text-gray-700">
                  We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies 
                  we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy 
                  regularly to stay informed about our use of cookies and related technologies.
                </p>
              </section>

              {/* Contact us */}
              <section className="bg-blue-50 p-6 rounded-lg">
                <h2 className="text-xl font-bold mb-3">Contact us</h2>
                <p className="text-gray-700 mb-4">
                  If you have any questions about our use of cookies or other technologies, please email us at:
                </p>
                <a 
                  href="mailto:privacy@furniturestore.com" 
                  className="text-blue-600 hover:underline font-medium"
                >
                  privacy@furniturestore.com
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}