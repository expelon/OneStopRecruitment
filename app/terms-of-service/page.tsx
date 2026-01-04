'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Terms of <span className="text-blue-600">Service</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                These Terms of Service ("Terms") govern your use of the OneStop Recruitment website ("Website") and the recruitment services provided by OneStop Recruitment ("we," "our," or "us"). By accessing our website or using our services, you agree to be bound by these Terms.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If you do not agree to these Terms, please do not use our website or services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Description</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                OneStop Recruitment provides staffing and recruitment services, including:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Connecting job seekers with employment opportunities</li>
                <li>Providing recruitment services to employers</li>
                <li>Candidate screening and assessment</li>
                <li>Temporary and permanent staffing solutions</li>
                <li>Consultation and career guidance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Responsibilities</h2>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Job Seekers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                As a job seeker using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Keep your contact information updated</li>
                <li>Respond promptly to communication from employers</li>
                <li>Not misrepresent your qualifications or experience</li>
                <li>Respect confidentiality of employer information</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">For Employers</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                As an employer using our services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Provide accurate job descriptions and requirements</li>
                <li>Respond promptly to candidate applications</li>
                <li>Treat all candidates with respect and professionalism</li>
                <li>Pay agreed-upon fees in a timely manner</li>
                <li>Maintain confidentiality of candidate information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fees and Payments</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our fee structure varies depending on the services provided. Specific fee arrangements will be outlined in separate agreements with employers.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>For Employers:</strong> Fees are typically based on a percentage of the candidate's annual salary or a flat fee for temporary placements. Payment terms will be specified in your service agreement.
              </p>
              <p className="text-gray-600 leading-relaxed">
                <strong>For Job Seekers:</strong> Our services are provided free of charge to job seekers.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Both parties agree to maintain confidentiality of sensitive information shared during the recruitment process.
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Employers must keep candidate information confidential</li>
                <li>Job seekers must keep employer information confidential</li>
                <li>OneStop Recruitment will not share personal information without consent</li>
                <li>Confidentiality obligations survive the termination of these Terms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Candidate Placement</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                When we successfully place a candidate with an employer, the following terms apply:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>A guarantee period may apply as specified in the service agreement</li>
                <li>If a candidate leaves during the guarantee period, we will provide a replacement candidate</li>
                <li>Employers must notify us immediately if a candidate leaves employment</li>
                <li>No refunds will be provided after the guarantee period expires</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                All content on our website, including text, graphics, logos, images, and software, is the property of OneStop Recruitment and is protected by copyright and other intellectual property laws.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may not use, reproduce, or distribute our content without our prior written consent.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Prohibited Activities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You agree not to engage in any of the following activities:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>Use our website for illegal or unauthorized purposes</li>
                <li>Submit false or misleading information</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper working of our website</li>
                <li>Harass or abuse other users or our staff</li>
                <li>Violate any applicable laws or regulations</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimers</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                OneStop Recruitment makes no warranties or representations about:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
                <li>The accuracy or completeness of job postings</li>
                <li>The suitability of candidates for specific positions</li>
                <li>The availability of job opportunities</li>
                <li>The uninterrupted operation of our website</li>
              </ul>
              <p className="text-gray-600 leading-relaxed">
                We are not responsible for the actions or omissions of employers or candidates using our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To the fullest extent permitted by law, OneStop Recruitment shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or website.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our total liability for any claims arising from these Terms shall not exceed the fees paid by you for our services in the six months preceding the claim.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                We may terminate or suspend your access to our services at any time, with or without cause, without prior notice.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You may stop using our services at any time. Upon termination, any provisions that should reasonably survive termination will remain in effect.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada, without regard to its conflict of law principles.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Any disputes arising from these Terms shall be resolved in the courts of Toronto, Ontario.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after such changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
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
