import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { FaHome, FaCar, FaPiggyBank } from "react-icons/fa";

const loanSchemes = [
  { title: "Home Loan", description: "Get a loan to buy your dream home with low interest rates." },
  { title: "Car Loan", description: "Drive your dream car with our easy car loan options." },
  { title: "Gold Loan", description: "Avail instant gold loans at attractive interest rates." },
];

const loans = [
  { name: "Home Loan", icon: <FaHome size={30} />, description: "Flexible home loan plans." },
  { name: "Car Loan", icon: <FaCar size={30} />, description: "Get quick car loan approvals." },
  { name: "Gold Loan", icon: <FaPiggyBank size={30} />, description: "Instant loans against gold." },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % loanSchemes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between">
        <h1 className="text-2xl font-bold">Loan Management</h1>
        <div className="space-x-4">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Loans</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center bg-gray-100 h-64 text-center p-4">
        <h2 className="text-3xl font-bold">{loanSchemes[index].title}</h2>
        <p className="mt-2 text-gray-700">{loanSchemes[index].description}</p>
        <Button className="mt-4 bg-blue-500">Apply Now</Button>
      </div>

      {/* Loan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {loans.map((loan, idx) => (
          <Card key={idx} className="p-6 text-center shadow-lg">
            <CardContent>
              <div className="flex justify-center text-blue-600 mb-4">{loan.icon}</div>
              <h3 className="text-xl font-semibold">{loan.name}</h3>
              <p className="text-gray-700 mt-2">{loan.description}</p>
              <Button className="mt-4 bg-blue-500">Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Footer */}
      <footer className="bg-blue-600 text-white p-4 text-center mt-auto">
        <p>&copy; 2025 Loan Management System. All rights reserved.</p>
      </footer>
    </div>
  );
}
