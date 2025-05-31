import React from 'react';

const testimonials = [
  {
    name: "Maren Davis-Belrose",
    title: "CEO, Company Inc.",
    image: "https://storage.googleapis.com/a1aa/image/c740bf29-08a6-4ff4-421e-a0a2b742d0bb.jpg",
    alt: "Portrait of a woman with short hair smiling",
    text: "The team was absolutely top-notch in their work and delivered excellent tailored guidance."
  },
  {
    name: "Marco Kennedy Reynolds",
    title: "Founder, Startup Co.",
    image: "https://storage.googleapis.com/a1aa/image/e59bb18f-c807-4bd5-7222-8041dae2ab7b.jpg",
    alt: "Portrait of a man with glasses and beard smiling",
    text: "Customer? I was thrilled with the personalized service. The quality stood out different, and it speaks to professionalism."
  },
  {
    name: "Pierre",
    title: "Marketing Director",
    image: "https://storage.googleapis.com/a1aa/image/d13c0eef-1a01-464e-d90d-da492b204094.jpg",
    alt: "Portrait of a man with shaved head smiling",
    text: "Customer? I enjoy working among diverse people, and it gives me a chance to connect on levels we normally might not encounter. Service they function is a solid environment."
  },
  {
    name: "Dr. Isabela Santiago",
    title: "Lead Scientist",
    image: "https://storage.googleapis.com/a1aa/image/301bc6fc-f2cc-42d2-1002-9d7b662785ec.jpg",
    alt: "Portrait of a man with short hair and beard",
    text: "Software? I get high-quality analysis and support, plus a strategy that’s focused entirely on solutions provided. I constantly recommend projects I’ve done for professional clients."
  }
];

function TestimonialCard({ name, title, image, alt, text, cardClass }) {
  return (
    <div className={`testimonial-card ${cardClass}`}>
      <div className="d-flex align-items-center mb-3">
        <img
          src={image}
          alt={alt}
          width="48"
          height="48"
          className="rounded-circle me-3 object-fit-cover"
        />
        <div>
          <h3 className="testimonial-title mb-0">{name}</h3>
          <p className="testimonial-subtitle mb-0">{title}</p>
        </div>
      </div>
      <p className="testimonial-text">"{text}"</p>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section className="container py-5">
      <div className="text-center mx-auto mb-5" style={{ maxWidth: '36rem' }}>
        <h2 className="text-yellow fw-semibold position-relative d-inline-block mb-0">
          Customer
          <span className="dot-yellow">.</span>
        </h2>
        <h1 className="fw-bold fs-3 fs-sm-2xl position-relative d-inline-block mb-1">
          Testimonials
          <span className="dot-gray">.</span>
        </h1>
        <p className="text-secondary small mb-0">What Our Clients Say</p>
      </div>
      <div className="row justify-content-center gx-4 gy-4" style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
        <div className="col-12 col-md-6 d-flex flex-column gap-4">
          <TestimonialCard
            {...testimonials[0]}
            cardClass="testimonial-card-left"
          />
          <TestimonialCard
            {...testimonials[1]}
            cardClass="testimonial-card-left"
          />
        </div>
        <div className="col-12 col-md-6 d-flex flex-column gap-4">
          <TestimonialCard
            {...testimonials[2]}
            cardClass="testimonial-card-left-sm"
          />
          <TestimonialCard
            {...testimonials[3]}
            cardClass="testimonial-card-left-sm"
          />
        </div>
      </div>
    </section>
  );
}

const HomeTestmonial = () => {
  return <TestimonialsSection />;
};

export default HomeTestmonial;