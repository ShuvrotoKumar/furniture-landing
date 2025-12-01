import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

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
  },
  {
    id: 4,
    name: 'David Kim',
    location: 'Seattle, USA',
    text: 'Excellent build quality and modern design. The furniture arrived well-packaged and was easy to assemble.',
    rating: 5,
    image: '/images/p4.jpg' // Replace with actual image
  },{
    id: 4,
    name: 'David Fiorhbis',
    location: 'Seattle, USA',
    text: 'Excellent build quality and modern design. The furniture arrived well-packaged and was easy to assemble.',
    rating: 5,
    image: '/images/p5.jpg' // Replace with actual image
  },
  {
    id: 5,
    name: 'Vjisu Kim',
    location: 'Seattle, USA',
    text: 'Excellent build quality and modern design. The furniture arrived well-packaged and was easy to assemble.',
    rating: 4,
    image: '/images/p6.jpg' // Replace with actual image
  },
  {
    id: 6,
    name: 'Shuvres Vjenijs',
    location: 'Seattle, USA',
    text: 'Excellent build quality and modern design. The furniture arrived well-packaged and was easy to assemble.',
    rating: 5,
    image: '/images/p7.jpg' // Replace with actual image
  },
  {
    id: 7,
    name: 'David Kim',
    location: 'Seattle, USA',
    text: 'Excellent build quality and modern design. The furniture arrived well-packaged and was easy to assemble.',
    rating: 5,
    image: '/images/p1.jpg' // Replace with actual image
  },
  {
    id: 8,
    name: 'MR Shanto',
    location: 'Seattle, USA',
    text: 'Excellent build quality and modern design. The furniture arrived well-packaged and was easy to assemble.',
    rating: 5,
    image: '/images/p7.jpg' // Replace with actual image
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Our Client Reviews</h2>
          <div className="flex space-x-4">
            <button className="testimonial-prev p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="testimonial-next p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          slidesPerGroup={1}
          navigation={{
            nextEl: '.testimonial-next',
            prevEl: '.testimonial-prev',
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 24
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32
            }
          }}
          className="w-full pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group h-full">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
