'use client'

import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              RELAX MODE
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Experience the ultimate convenience in car rental services. With our extensive network 
              of rental outlets and diverse fleet of vehicles, we provide solutions tailored to your 
              specific requirements.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Wide selection of premium vehicles</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <span className="text-gray-700">24/7 customer support</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Flexible rental periods</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <span className="text-gray-700">Competitive pricing with no hidden fees</span>
              </div>
            </div>
            <button className="mt-8 bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
              Learn More
            </button>
          </div>

          {/* Kép */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden h-96 lg:h-[500px]">
              <Image
                src="/images/about/about.png"
                alt="Premium Car Rental"
                fill
                className="object-cover"
                priority
              />
             
            </div>
            
            {/* Kártya lebegés,  */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 z-10">
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600 text-sm">Customer Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA  */}
        <div className="mt-20 text-center bg-white rounded-2xl p-12 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to experience the difference?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have chosen us for their car rental needs. 
            Simple, reliable, and affordable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
              Book Now
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;