'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Privacy <span className="text-blue-600">Policy</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                OneStop Recruitment ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website onestoprecruitment.ca and use our services.
              </p>
              <p className="text-gray-600 leading-relaxed">
                By using our website and services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Name and contact information (email, phone number, address)</li>
                <li>Employment history and qualifications</li>
                <li>Resume/CV and cover letters</li>
                <li>Company information (for employers)</li>
                <li>Job preferences and requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain technical information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Clicks and user interactions</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>To connect job seekers with appropriate employment opportunities</li>
                <li>To provide recruitment services to employers</li>
                <li>To communicate with you about our services</li>
                <li>To improve our website and services</li>
                <li>To respond to your inquiries and requests</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraud and ensure website security</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>With Employers:</strong> We share job seeker information with potential employers when you apply for positions or express interest in opportunities.</li>
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who assist us in operating our website and business.</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights, property, or safety.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, user information may be transferred.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We retain your information only as long as necessary to fulfill the purposes for which it was collected, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information.</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information.</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information.</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service.</li>
                <li><strong>Objection:</strong> Object to processing of your information.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                To exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our website may use cookies and similar tracking technologies to enhance your experience and analyze website traffic. You can control cookies through your browser settings.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Please refer to our Cookie Policy for more detailed information about cookies and how we use them.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-600 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
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
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
