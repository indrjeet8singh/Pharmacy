import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-dark py-5">
      <div className="container">
        <h1
          className="fw-bold text-uppercase mb-4 text-center"
          style={{ fontSize: '18px', lineHeight: '25px' }}
        >
          Privacy Policy for Iphamar™ Care Foundation
        </h1>

        <p className="mb-4" style={{ fontSize: '17px', lineHeight: '20px' }}>
          This Privacy Policy outlines how Iphamar™ Care Foundation collects, uses, and protects your personal information when you engage with our services, programs, or website. By interacting with us, you agree to the practices described in this policy.
        </p>

        {[
          {
            title: '1. Information Collection',
            points: [
              'We collect personal details such as name, contact information, and demographic data when you sign up or participate in our programs.',
              'We may collect additional data such as emergency contact, medical conditions, or preferences to ensure your safety and better serve you.',
              'We also gather data through cookies and web analytics to improve our website and user experience.',
            ],
          },
          {
            title: '2. Use of Information',
            points: [
              'Your personal information is used to facilitate program participation, communication, and reporting.',
              'We use collected data to improve services, maintain internal records, and personalize user experiences.',
              'We may use anonymized data for research, evaluation, and impact assessment purposes.',
            ],
          },
          {
            title: '3. Data Sharing & Disclosure',
            points: [
              'We do not sell or rent your personal data.',
              'Information may be shared with authorized personnel or third-party service providers under confidentiality agreements, solely for foundation operations.',
              'We may disclose your information if required by law or for legal proceedings.',
            ],
          },
          {
            title: '4. Data Security',
            points: [
              'We implement appropriate technical and organizational safeguards to protect your data.',
              'Only authorized personnel have access to sensitive personal information.',
            ],
          },
          {
            title: '5. Your Rights',
            points: [
              'You may request access to, correction of, or deletion of your personal information.',
              'You have the right to withdraw consent or object to data processing at any time.',
            ],
          },
          {
            title: '6. Retention of Data',
            points: [
              'We retain personal information only as long as necessary for the purposes stated in this policy or as required by law.',
            ],
          },
          {
            title: '7. Third-Party Links',
            points: [
              'Our website may contain links to other websites. We are not responsible for their privacy practices.',
              'We recommend reviewing the privacy policies of any third-party sites you visit.',
            ],
          },
          {
            title: '8. Updates to Privacy Policy',
            points: [
              'This policy may be updated periodically to reflect legal or operational changes.',
              'We will notify users of significant updates through our website or other communication channels.',
            ],
          },
          {
            title: '9. Contact Us',
            points: [
              'For any questions, concerns, or data-related requests, please contact us at: info@Iphamarfoundation.org',
            ],
          },
        ].map((section, i) => (
          <section className="mb-4" key={i}>
            <h2 className="fw-bold mb-1" style={{ fontSize: '17px', lineHeight: '22px' }}>
              {section.title}
            </h2>
            <ol className="ps-3" style={{ fontSize: '17px', lineHeight: '22px' }}>
              {section.points.map((point, j) => (
                <li key={j} className="mb-1">
                  {point}
                </li>
              ))}
            </ol>
          </section>
        ))}

        <button
          type="button"
          className="btn w-25 mt-4"
          style={{
            backgroundColor: '#2F9E44',
            color: 'white',
            fontSize: '17px',
            lineHeight: '25px',
            fontWeight: '600',
            padding: '1rem',
            borderRadius: '0.375rem',
          }}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
