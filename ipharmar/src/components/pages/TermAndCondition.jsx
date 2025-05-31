import React from 'react';

const TermsAndCondition = () => {
  return (
    <div className="bg-white text-dark py-5">
      <div className="container" >
        <h1 className="fw-bold text-uppercase mb-4 text-center" style={{ fontSize: '18px', lineHeight: '25px' }}>
          TERMS AND CONDITIONS FOR VOLUNTEERS OF IJAHAMAR™ CARE FOUNDATION
        </h1>

        <p className="mb-4" style={{ fontSize: '17px', lineHeight: '20px' }}>
          These terms and conditions outline the volunteer responsibilities and rights at Ijahamar™ Care Foundation. Volunteers must agree to these terms before participating in any activities or programs.
        </p>

        {[
          {
            title: '1. Volunteer Engagement',
            points: [
              'Volunteers are expected to perform their duties to the best of their ability and uphold the values of the foundation.',
              'Volunteers must comply with all applicable laws, regulations, and foundation policies.',
              'Volunteers should maintain a professional and respectful attitude at all times.',
            ],
          },
          {
            title: '2. Code of Conduct',
            points: [
              'Volunteers must treat all individuals with respect, dignity, and fairness at all times.',
              'Volunteers must not engage in any form of discrimination or harassment.',
              'Volunteers must maintain confidentiality of all information and not engage in unauthorized disclosure.',
            ],
          },
          {
            title: '3. Commitment to and Attendance',
            points: [
              'Volunteers are expected to attend all agreed scheduled activities to the best of their ability and notify in advance if unable to attend.',
              'Volunteers should arrive on time and notify the volunteer coordinator promptly in case of absence.',
            ],
          },
          {
            title: '4. Confidentiality & Data Protection',
            points: [
              'Volunteers must keep all foundation-related information strictly confidential, both oral and written.',
              'Volunteers must not use confidential information for any purpose other than foundation-related work.',
              'Volunteers must comply with all applicable data protection and privacy laws.',
            ],
          },
          {
            title: '5. Safety & Liability',
            points: [
              'Volunteers must follow all safety procedures and guidelines to ensure their own safety and the safety of others.',
              'The foundation is not liable for any injuries or damages sustained during volunteer activities except where caused by negligence of the foundation.',
            ],
          },
          {
            title: '6. Use of Foundation Resources & Reporting',
            points: [
              'Volunteers must use the foundation’s resources, including equipment, only for authorized purposes.',
              'Volunteers must report any incidents, accidents, or concerns to the volunteer manager promptly.',
            ],
          },
          {
            title: '7. Termination & Disciplinary Action',
            points: [
              'The foundation reserves the right to terminate volunteer engagement at any time for misconduct or non-compliance with these terms.',
              'Disciplinary actions may include warnings, suspension, or termination depending on the severity of the issue.',
            ],
          },
          {
            title: '8. Media & Publicity',
            points: [
              'Volunteers must obtain prior approval before sharing any foundation-related information or images publicly.',
              'Volunteers must not speak on behalf of the foundation without authorization.',
            ],
          },
          {
            title: '9. Amendments to Terms & Conditions',
            points: [
              'The foundation reserves the right to update these terms at any time.',
              'Volunteers will be notified of any changes and continued participation constitutes acceptance of the updated terms.',
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
          Get Questions?
        </button>
      </div>
    </div>
  );
};

export default TermsAndCondition;
