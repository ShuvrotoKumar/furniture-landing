'use client';

import { ShoppingOutlined, StarOutlined, SafetyCertificateOutlined } from '@ant-design/icons';

const features = [
  {
    icon: <ShoppingOutlined className="text-4xl text-blue-600" />,
    title: 'Luxury Facilities',
    description: 'Experience the finest materials and craftsmanship in every piece.'
  },
  {
    icon: <StarOutlined className="text-4xl text-blue-600" />,
    title: 'Affordable Price',
    description: 'High-quality furniture at prices that fit your budget.'
  },
  {
    icon: <SafetyCertificateOutlined className="text-4xl text-blue-600" />,
    title: 'Many Choices',
    description: 'Wide variety of styles to match your unique taste.'
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          {/* <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div> */}
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine quality craftsmanship with exceptional service to bring you the best in modern furniture design.
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-xl text-center bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02] group"
            >
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-all duration-300 transform group-hover:scale-110">
                  <div className="group-hover:rotate-12 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-300">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
