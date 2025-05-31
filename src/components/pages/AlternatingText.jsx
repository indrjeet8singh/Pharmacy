import React, { useEffect, useRef } from 'react';

import img1 from '/assets/homePage2slider/1.png';
import img2 from '/assets/homePage2slider/2.png';
import img3 from '/assets/homePage2slider/3.png';
import img4 from '/assets/homePage2slider/4.png';

// Data for sections
const data = [
  {
    text: 'Section 1: Texts on drug packages, inserts, and labels provide dosage instructions, side effects, contraindications, and storage details.',
    image: img1,
  },
  {
    text: 'Section 2: Protocols, informed consent forms, and study reports use precise language to outline trial objectives, methodologies, and results. These texts are critical for regulatory submissions and ethical approvals.',
    image: img2,
  },
  {
    text: 'Section 3: Documents like New Drug Applications (NDAs) or Marketing Authorization Applications (MAAs) contain detailed scientific text, including pharmacology, toxicology, and clinical data, to gain approval from regulatory bodies.',
    image: img3,
  },
  {
    text: 'Section 4: Promotional texts, patient education guides, and physician-targeted content must balance scientific accuracy with accessibility while adhering to strict advertising regulations.',
    image: img4,
  },
];

const AlternatingText = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('invisible');
            entry.target.classList.add(
              entry.target.dataset.side === 'left'
                ? 'animate-left'
                : 'animate-right'
            );
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container-fluid py-4">
      {/* Inline animation CSS */}
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .animate-left {
          animation: slideInLeft 0.8s ease-in-out forwards;
        }

        .animate-right {
          animation: slideInRight 0.8s ease-in-out forwards;
        }

        .invisible {
          opacity: 0;
        }
      `}</style>

      {data.map((item, index) => {
        const isTextLeft = index % 2 === 0;

        return (
          <div className="row align-items-center mb-5" key={index}>
            {/* Left Column */}
            <div
              className="col-md-5 invisible"
              ref={el => (sectionRefs.current[index * 2] = el)}
              data-side={isTextLeft ? 'left' : 'right'}
            >
              {isTextLeft ? (
                <>
                  <h2 className="fw-bold">{index + 1}</h2>
                  <p>{item.text}</p>
                </>
              ) : (
                <img
                  src={item.image}
                  alt={`Section ${index + 1}`}
                  className="img-fluid w-100 h-100"
                />
              )}
            </div>

            {/* Vertical Green Pole */}
            <div className="col-md-2 d-flex justify-content-center">
              <div className='vetical-green-pole'
                
              ></div>
            </div>

            {/* Right Column */}
            <div
              className="col-md-5 invisible"
              ref={el => (sectionRefs.current[index * 2 + 1] = el)}
              data-side={isTextLeft ? 'right' : 'left'}
            >
              {isTextLeft ? (
                <img
                  src={item.image}
                  alt={`Section ${index + 1}`}
                  className="img-fluid w-100 h-100"
                />
              ) : (
                <>
                  <h2 className="fw-bold">{index + 1}.</h2>
                  <p>{item.text}</p>
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AlternatingText;
