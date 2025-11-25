import Image from 'next/image';
import Link from 'next/link';
import { FaAward, FaLeaf, FaUsers, FaHeart } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0">
          <Image
            src="/images/about-hero.jpg"
            alt="Modern furniture showroom"
            fill
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
        </div>
        <div className="relative container mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-4">Our Story</h1>
            <p className="text-xl text-gray-200">
              Crafting exceptional furniture with passion and precision since 2023
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              At FurniCraft, we believe that great design should be accessible to everyone. 
              Our mission is to bring beautifully crafted, high-quality furniture into homes 
              around the world, making everyday living more comfortable and stylish.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaAward className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Craftsmanship</h3>
              <p className="text-gray-600">
                Each piece is meticulously crafted by skilled artisans using time-honored techniques.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Sustainable Materials</h3>
              <p className="text-gray-600">
                We're committed to using eco-friendly materials and sustainable manufacturing processes.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHeart className="text-amber-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Love</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. Your satisfaction is our top priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Founder & CEO',
                image: '/images/team/sarah.jpg',
                bio: 'With over 15 years in the furniture industry, Sarah leads our team with vision and passion.'
              },
              {
                name: 'Michael Chen',
                role: 'Lead Designer',
                image: '/images/team/michael.jpg',
                bio: 'Michael brings innovative designs that blend form and function seamlessly.'
              },
              {
                name: 'Elena Rodriguez',
                role: 'Customer Experience',
                image: '/images/team/elena.jpg',
                bio: 'Elena ensures every customer receives exceptional service from start to finish.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover our curated collection of handcrafted furniture designed for modern living.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/products" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}