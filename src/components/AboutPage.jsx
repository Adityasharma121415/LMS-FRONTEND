import React from "react";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Jane Doe",
      role: "CEO & Founder",
      bio: "With over 15 years of industry experience, Jane leads our company vision and growth strategy.",
      imageUrl: "/api/placeholder/150/150",
    },
    {
      name: "John Smith",
      role: "CTO",
      bio: "John oversees all technical aspects of the company, bringing 10+ years of software development expertise.",
      imageUrl: "/api/placeholder/150/150",
    },
    {
      name: "Alice Johnson",
      role: "Design Director",
      bio: "Alice ensures our products deliver exceptional user experiences with her background in UX/UI design.",
      imageUrl: "/api/placeholder/150/150",
    },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We continuously push boundaries to develop cutting-edge solutions for our clients.",
      icon: (
        <svg
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "Quality",
      description:
        "We are committed to excellence in everything we do, from products to customer service.",
      icon: (
        <svg
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Integrity",
      description:
        "We operate with honesty, transparency, and respect in all our relationships.",
      icon: (
        <svg
          className="h-8 w-8 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Company
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              We're on a mission to transform the digital landscape with
              innovative solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-gray-200">
              <img
                src="/api/placeholder/600/400"
                alt="Our office"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-500 max-w-none">
              <p>
                Founded in 2015, our company began with a simple idea: to make
                technology more accessible and user-friendly for businesses of
                all sizes. What started as a small team of three passionate
                developers has grown into a thriving company with offices in
                multiple countries.
              </p>
              <p className="mt-4">
                Throughout our journey, we've remained committed to our core
                values while adapting to the ever-changing technological
                landscape. We've helped hundreds of clients transform their
                digital presence and achieve remarkable growth.
              </p>
              <p className="mt-4">
                Today, we're proud to be at the forefront of innovation,
                developing solutions that not only meet current needs but
                anticipate future challenges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              These core principles guide everything we do and every decision we
              make.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition duration-200"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Team</h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
            Meet the talented individuals who make our company exceptional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-blue-600 mb-3">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to work with us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you have a specific project in mind or just want to learn
            more about our services, we'd love to hear from you.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
