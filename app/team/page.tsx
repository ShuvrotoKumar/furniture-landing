// app/team/page.tsx
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: '/images/team/sarah.jpg',
    bio: 'With over 15 years in the furniture industry, Sarah leads our team with vision and passion for sustainable design.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'sarah@furniturestore.com'
    }
  },
  {
    name: 'Michael Chen',
    role: 'Lead Designer',
    image: '/images/team/michael.jpg',
    bio: 'Michael brings innovative designs that blend form and function seamlessly, with a focus on modern aesthetics.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'michael@furniturestore.com'
    }
  },
  {
    name: 'Elena Rodriguez',
    role: 'Customer Experience',
    image: '/images/team/elena.jpg',
    bio: 'Elena ensures every customer receives exceptional service from start to finish, making the shopping experience delightful.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'elena@furniturestore.com'
    }
  },
  {
    name: 'David Kim',
    role: 'Production Manager',
    image: '/images/team/david.jpg',
    bio: 'David oversees our manufacturing process, ensuring every piece meets our high standards of quality and craftsmanship.',
    social: {
      linkedin: '#',
      twitter: '#',
      email: 'david@furniturestore.com'
    }
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Passionate individuals dedicated to bringing you the finest furniture and exceptional service.
          </p>
        </div>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4">{member.bio}</p>
                <div className="flex space-x-4">
                  <a 
                    href={member.social.linkedin} 
                    className="text-gray-500 hover:text-blue-700 transition-colors"
                    aria-label={`Connect with ${member.name} on LinkedIn`}
                  >
                    <FaLinkedin size={20} />
                  </a>
                  <a 
                    href={`https://twitter.com/${member.social.twitter}`} 
                    className="text-gray-500 hover:text-blue-400 transition-colors"
                    aria-label={`Follow ${member.name} on Twitter`}
                  >
                    <FaTwitter size={20} />
                  </a>
                  <a 
                    href={`mailto:${member.social.email}`} 
                    className="text-gray-500 hover:text-red-500 transition-colors"
                    aria-label={`Email ${member.name}`}
                  >
                    <FaEnvelope size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Team Section */}
        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src="/images/team/join-us.jpg"
                alt="Join Our Team"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Join Our Team</h2>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals who are passionate about design and customer service.
                Check out our current openings and be part of our growing family.
              </p>
              <a
                href="/careers"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors w-full md:w-auto text-center"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Quality Craftsmanship',
                description: 'We take pride in our attention to detail and commitment to excellence in every piece we create.'
              },
              {
                title: 'Customer First',
                description: 'Your satisfaction is our top priority, and we go above and beyond to exceed your expectations.'
              },
              {
                title: 'Sustainable Practices',
                description: 'We are committed to environmentally responsible manufacturing and sustainable materials.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}