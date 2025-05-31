import React from 'react';
import Patrick from '../../../public/assets/team/Patrick.png';
import Precious from '../../../public/assets/team/Precious.png';
import Stephen from '../../../public/assets/team/Stephen.png';
import Taiwo from '../../../public/assets/team/Taiwo.png';

const Leadership = () => {
  // Data for leadership team with name, title, and image
  const leaders = [
    {
      name: 'Patrick Adams',
      title: 'Chief Executive Officer',
      image: Patrick,
    },
    {
      name: 'Precious Okoye',
      title: 'Chief Technology Officer',
      image: Precious,
    },
    {
      name: 'Stephen Lee',
      title: 'Chief Financial Officer',
      image: Stephen,
    },
    {
      name: 'Taiwo Adeyemi',
      title: 'Chief Operating Officer',
      image: Taiwo,
    },
    {
      name: 'Emma Thompson',
      title: 'VP of Marketing',
      image: 'https://placehold.co/300x250?text=Emma+Thompson',
    },
    {
      name: 'James Carter',
      title: 'VP of Engineering',
      image: 'https://placehold.co/300x250?text=James+Carter',
    },
    {
      name: 'Sophia Rodriguez',
      title: 'Head of HR',
      image: 'https://placehold.co/300x250?text=Sophia+Rodriguez',
    },
  ];

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Leadership Team</h2>
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4 d-flex align-items-center justify-content-center">
        {leaders.map((leader, index) => (
          <div key={index} className="col">
            <div className="card h-100 position-relative">
              <img
                src={leader.image}
                alt={`${leader.name}, ${leader.title}`}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '250px' }}
              />
              <div
                className="position-absolute bottom-0 start-0 w-100 p-3 text-white"
               style={{
  backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
}}

              >
                <h5 className="mb-1">{leader.name}</h5>
                <p className="mb-0">{leader.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;