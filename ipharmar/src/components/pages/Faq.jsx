import React, { useEffect } from 'react';


const faqData = [
  {
    question: 'What services does your pharmaceutical distribution company offer?',
    answer: 'We provide comprehensive pharmaceutical distribution services, including supply chain management, cold chain logistics, and just-in-time delivery to pharmacies, hospitals, and clinics.',
    open: true,
  },
  {
    question: 'Where are your distribution centers located?',
    answer: 'Our distribution centers are strategically located in New York, Chicago, Los Angeles, and Miami to ensure efficient nationwide coverage.',
  },
  {
    question: 'How can I place an order for pharmaceutical products?',
    answer: 'Orders can be placed through our secure online portal or by contacting our sales team directly via phone or email.',
  },
  {
    question: 'What is your delivery turnaround time?',
    answer: 'Standard delivery typically takes 2-5 business days, depending on location and order size, with expedited options available.',
  },
  {
    question: 'Do you offer emergency or expedited delivery services?',
    answer: 'Yes, we offer 24/7 emergency and expedited delivery services for critical medications. Contact our support team for details.',
  },
  {
    question: 'How can I set up an account with your company?',
    answer: 'To set up an account, please fill out the registration form on our website or contact our sales team. They will guide you through the process and ensure all necessary documentation is completed.',
    
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept payments via bank transfer, credit cards (Visa, Mastercard), and approved purchase orders for registered clients.',
  },
  {
    question: 'What types of pharmaceutical products do you distribute?',
    answer: 'We distribute prescription medications, over-the-counter drugs, vaccines, and specialty pharmaceuticals for chronic conditions.',
  },
  {
    question: 'How do you ensure the quality and safety of your products?',
    answer: 'We adhere to Good Distribution Practices (GDP), conduct rigorous quality checks, and maintain temperature-controlled storage.',
  },
  {
    question: 'Can you provide information on product availability and stock levels?',
    answer: 'Real-time stock levels can be checked via our online portal, or contact our support team for specific product availability.',
  },
  {
    question: 'Are you compliant with national and international pharmaceutical regulations?',
    answer: 'Yes, we comply with FDA, EMA, and WHO regulations, ensuring all operations meet global pharmaceutical standards.',
  },
  {
    question: 'How do you handle recalls and product withdrawals?',
    answer: 'We follow a strict recall protocol, notifying clients promptly and coordinating safe product retrieval per regulatory guidelines.',
  },
  {
    question: 'Who can I contact for support or if I have questions about my order?',
    answer: 'Reach our support team at support@pharmadist.com or call 1-800-555-1234 for assistance with your order.',
  },
  {
    question: 'What are your customer service hours?',
    answer: 'Our customer service is available Monday to Friday, 8 AM to 6 PM EST, and 24/7 for emergency support.',
  },
  {
    question: 'How do I provide feedback or file a complaint?',
    answer: 'Submit feedback or complaints through our website’s contact form or email feedback@pharmadist.com for prompt resolution.',
  },
];

const Faq = () => {
  useEffect(() => {
    const accordion = document.getElementById('faqAccordion');

    const onShow = (event) => {
      const btn = event.target.previousElementSibling.querySelector('button');
      const icon = btn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-plus', 'fa-check-circle', 'plus-icon', 'check-icon');
        icon.classList.add('fa-minus', 'minus-icon');
      }
    };

    const onHide = (event) => {
      const btn = event.target.previousElementSibling.querySelector('button');
      const icon = btn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-minus', 'minus-icon');
        const index = Array.from(accordion.querySelectorAll('.accordion-header')).indexOf(btn.parentElement);
        if (index >= 0 && index < 0) {
          icon.classList.add('fa-check-circle', 'check-icon');
        } else {
          icon.classList.add('fa-plus', 'plus-icon');
        }
      }
    };

    accordion.addEventListener('show.bs.collapse', onShow);
    accordion.addEventListener('hide.bs.collapse', onHide);

    return () => {
      accordion.removeEventListener('show.bs.collapse', onShow);
      accordion.removeEventListener('hide.bs.collapse', onHide);
    };
  }, []);

  return (
    <>
    <div className='container-fluid p-0 footerwala-bg'>
 <div className="header">
    <h1 className='text-center p-5'>
        Frequently Asked Questions
    </h1>
 </div>
    </div>
    <div className="container my-4">
     
      <div className="accordion" id="faqAccordion">
        {faqData.map((item, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button d-flex align-items-center ${!item.open ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={item.open ? 'true' : 'false'}
                aria-controls={`collapse${index}`}
              >
                <i className={`fas ${item.open ? 'fa-minus minus-icon' : index < 5 ? 'fa-check-circle check-icon' : 'fa-plus plus-icon'}`}></i>
                {item.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${item.open ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Faq;