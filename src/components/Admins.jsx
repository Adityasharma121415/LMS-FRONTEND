import React from "react";
import { Mail } from "lucide-react";
import SatvikImg from "../assets/satvik.jpg";
import AdityaImg from "../assets/aditya.jpg";
import AditiImg from "../assets/aditi.jpg";

// Admin Profile Component
const AdminProfile = ({ name, role, email, description, imageUrl }) => (
  <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl">
    <div className="flex flex-col items-center text-center">
      {/* Profile Image */}
      <div className="w-44 h-44 rounded-full overflow-hidden mb-6 border-4 border-blue-200 shadow-lg transition-all duration-300 hover:border-blue-400">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name & Role */}
      <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{name}</h3>
      <p className="text-lg font-semibold text-blue-600">{role}</p>

      {/* Email */}
      <div className="flex items-center space-x-2 text-gray-700 mt-4 mb-4">
        <Mail size={20} className="text-blue-500" />
        <a href={`mailto:${email}`} className="hover:text-blue-600 transition-colors font-medium">
          {email}
        </a>
      </div>

      {/* Description */}
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Admins Component
const Admins = () => {
  const adminProfiles = [
    {
      name: "Satvik Pandey",
      role: "CEO and Founder",
      email: "satvik.pandey@cars24.com",
      description: "Satvik, a visionary full-stack developer in the NBFC sector, architects scalable financial solutions, enhancing digital lending through automation, system optimization, and data-driven insights.",
      imageUrl: SatvikImg
    },
    {
      name: "Aditya Sharma",
      role: "CTO and Developer",
      email: "aditya.sharma@cars24.com",
      description: "A brilliant technologist in the NBFC sector, Aditya architects robust digital infrastructures, leveraging full-stack development and system design to streamline loan processing and enhance user experiences.",
      imageUrl: AdityaImg
    },
    {
      name: "Aditi Goyal",
      role: "Design Director and Developer",
      email: "aditi.goyal@cars24.com",
      description: "Aditi, a creative force in the NBFC sector, pioneers intuitive UX/UI design, making digital lending seamless and accessible through innovative user experiences.",
      imageUrl: AditiImg
    },
  ];

  return (
    <div className="p-12 bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
      <div className="mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900">Our Leadership Team</h2>
        <p className="text-gray-600 mt-3 text-lg">Meet the innovative minds behind our vision</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {adminProfiles.map((profile, index) => (
          <AdminProfile key={index} {...profile} />
        ))}
      </div>
    </div>
  );
};

export default Admins;
