'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Cookie <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What Are Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This Cookie Policy explains how OneStop Recruitment ("we," "our," or "us") uses cookies and similar technologies on our website onestoprecruitment.ca.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Essential Cookies:</strong> These are necessary for the website to function properly and cannot be disabled.</li>
                <li><strong>Performance Cookies:</strong> These help us understand how visitors interact with our website by collecting and reporting information anonymously.</li>
                <li><strong>Functional Cookies:</strong> These enable enhanced functionality and personalization, such as remembering your preferences.</li>
                <li><strong>Targeting Cookies:</strong> These may be set through our site by our advertising partners to build a profile of your interests.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies are required for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services.
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Authentication and security</li>
                <li>Remembering your preferences</li>
                <li>Maintaining session information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Performance Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Google Analytics</li>
                <li>Website traffic analysis</li>
                <li>Performance monitoring</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Functional Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Remembering your form inputs</li>
                <li>Language preferences</li>
                <li>Display preferences</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Marketing Cookies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Social media integration</li>
                <li>Targeted advertising</li>
                <li>Campaign tracking</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website may use third-party services that also set their own cookies. These include:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration</li>
                <li><strong>Advertising Networks:</strong> For targeted advertising purposes</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We do not control these third-party cookies and recommend reviewing their respective privacy policies for more information.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Managing Cookies</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Most web browsers allow you to control cookies through their settings. You can:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Accept or reject all cookies</li>
                <li>Delete existing cookies</li>
                <li>Set notifications when cookies are sent</li>
                <li>Block third-party cookies</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mb-4">
                Please note that blocking certain types of cookies may impact your experience on our website.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Cookie Consent Banner</h3>
              <p className="text-gray-600 leading-relaxed">
                When you first visit our website, you may see a cookie consent banner where you can choose which types of cookies to accept.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookie Duration</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Different cookies have different lifespans:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Session Cookies:</strong> These are deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> These remain on your device for a specified period or until you delete them</li>
                <li><strong>Authentication Cookies:</strong> These typically expire after a set period of inactivity</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Accept or reject non-essential cookies</li>
                <li>Withdraw consent at any time</li>
                <li>Delete cookies stored on your device</li>
                <li>Be informed about the use of your data</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                However, please be aware that disabling certain cookies may affect the functionality of our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our use of cookies or due to regulatory requirements.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Any changes will be posted on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-600 mb-2">
                  <strong>Email:</strong> farook@theonestoprecruitment.com
                </p>
                <p className="text-gray-600 mb-2">
                  <strong>Phone:</strong> 647-703-3349
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> 8 Park Road, Toronto, Ontario M4W 3S5
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Browser-Specific Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                For detailed information about managing cookies in specific browsers, please visit:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Chrome:</strong> chrome://settings/cookies</li>
                <li><strong>Firefox:</strong> about:preferences#privacy</li>
                <li><strong>Safari:</strong> Safari Preferences &gt; Privacy</li>
                <li><strong>Edge:</strong> edge://settings/content/cookies</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
