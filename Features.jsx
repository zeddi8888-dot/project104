import React from 'react';
import { Shield, Zap, HeadphonesIcon, CreditCard, Clock, Award } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="text-primary-600" size={32} />,
      title: "Instant Delivery",
      description: "Receive your account credentials immediately after purchase via email",
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: <Shield className="text-green-600" size={32} />,
      title: "Secure Payments",
      description: "All transactions are encrypted and protected with industry-standard security",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <HeadphonesIcon className="text-purple-600" size={32} />,
      title: "24/7 Support",
      description: "Our dedicated support team is available round the clock to assist you",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <CreditCard className="text-blue-600" size={32} />,
      title: "Multiple Payment Options",
      description: "Pay with credit card, PayPal, cryptocurrency, or other convenient methods",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Clock className="text-orange-600" size={32} />,
      title: "Warranty Included",
      description: "All accounts come with a warranty period for your peace of mind",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Award className="text-pink-600" size={32} />,
      title: "Premium Quality",
      description: "Only verified and working accounts from trusted sources",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            We provide the best service and quality for all your premium account needs
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Premium Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-primary-100">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-100">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
