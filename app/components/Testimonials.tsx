import React from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'New York, USA',
    text: 'The furniture I bought from Pooms has transformed my living space. The quality is exceptional and the design is timeless.',
    rating: 5,
    image: '/images/p1.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    location: 'San Francisco, USA',
    text: 'Great customer service and amazing products. The delivery was on time and the assembly was straightforward.',
    rating: 5,
    image: '/images/p2.jpg'
  },
  {
    id: 3,
    name: 'Emma Wilson',
    location: 'Chicago, USA',
    text: 'I love the minimalistic design of Pooms furniture. It fits perfectly in my modern apartment.',
    rating: 4,
    image: '/images/p3.jpg'
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Client Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 transform group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold group-hover:text-blue-600 transition-colors duration-300">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="relative mb-4">
                <div className="absolute -top-4 left-0 text-5xl text-gray-100 -z-10">"</div>
                <p className="text-gray-700 relative z-10 pl-4">{testimonial.text}</p>
                <div className="absolute -bottom-4 right-0 text-5xl text-gray-100 -z-10">"</div>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={`${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
