// pages/ApplyPage.js
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ApplyPage = () => {
  const { loanType } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    income: "",
    loanAmount: "",
    purpose: "",
    employmentType: "salaried",
    agreeToTerms: false,
  });

  // Convert loanType param to display friendly name
  const getLoanTitle = () => {
    switch (loanType) {
      case "home-loan":
        return "Home Loan";
      case "gold-loan":
        return "Gold Loan";
      case "car-loan":
        return "Car Loan";
      default:
        return "Loan";
    }
  };

  // Get color theme based on loan type
  const getLoanTheme = () => {
    switch (loanType) {
      case "home-loan":
        return "blue";
      case "gold-loan":
        return "yellow";
      case "car-loan":
        return "green";
      default:
        return "blue";
    }
  };

  const themeColor = getLoanTheme();
  const bgColorClass = `bg-${themeColor}-600`;
  const borderColorClass = `border-${themeColor}-600`;
  const textColorClass = `text-${themeColor}-600`;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically submit the form data to your backend
    console.log("Form submitted:", formData);

    // Navigate to a success page or show success message
    alert(
      `Your ${getLoanTitle()} application has been submitted successfully! We'll contact you shortly.`
    );
    navigate("/");
  };

  return (
    <div>
      {/* Hero Banner */}
      <div className={`${bgColorClass} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Apply for {getLoanTitle()}
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Fill out the application form below and our team will contact you
            within 24 hours to guide you through the next steps.
          </p>
        </div>
      </div>

      {/* Application Form */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Personal Information
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Full Name*
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${borderColorClass} rounded-md focus:outline-none focus:ring-2 focus:ring-${themeColor}-500`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email Address*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${borderColorClass} rounded-md focus:outline-none focus:ring-2 focus:ring-${themeColor}-500`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Phone Number*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${borderColorClass} rounded-md focus:outline-none focus:ring-2 focus:ring-${themeColor}-500`}
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Loan Details */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">Loan Details</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="employmentType"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Employment Type*
                      </label>
                      <select
                        id="employmentType"
                        name="employmentType"
                        value={formData.employmentType}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${borderColorClass} rounded-md focus:outline-none focus:ring-2 focus:ring-${themeColor}-500`}
                        required
                      >
                        <option value="salaried">Salaried</option>
                        <option value="self-employed">Self-Employed</option>
                        <option value="business-owner">Business Owner</option>
                        <option value="retired">Retired</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="income"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Monthly Income (₹)*
                      </label>
                      <input
                        type="number"
                        id="income"
                        name="income"
                        value={formData.income}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${borderColorClass} rounded-md focus:outline-none focus:ring-2 focus:ring-${themeColor}-500`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="loanAmount"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Requested Loan Amount (₹)*
                      </label>
                      <input
                        type="number"
                        id="loanAmount"
                        name="loanAmount"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${borderColorClass} rounded-md focus:outline-none focus:ring-2 focus:ring-${themeColor}-500`}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="purpose"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Purpose of Loan
                      </label>
                      <input
                        type="text"
                        id="purpose"
                        name="purpose"
                        value={formData.purpose}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border ${borderColorClass} rounded-md focus:outline-none focus:ring-2 focus:ring-${themeColor}-500`}
                      />
                    </div>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <input
                        type="checkbox"
                        id="agreeToTerms"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="h-4 w-4"
                        required
                      />
                    </div>
                    <div className="ml-3">
                      <label htmlFor="agreeToTerms" className="text-gray-700">
                        I agree to the{" "}
                        <a
                          href="/terms"
                          className={`${textColorClass} font-semibold hover:underline`}
                        >
                          Terms & Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          href="/privacy"
                          className={`${textColorClass} font-semibold hover:underline`}
                        >
                          Privacy Policy
                        </a>
                        *
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className={`w-full py-3 ${bgColorClass} text-white font-semibold rounded-md hover:bg-${themeColor}-700 transition-colors`}
                  >
                    Submit Application
                  </button>
                  <p className="text-gray-500 text-sm mt-4 text-center">
                    * Required fields
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              What Happens Next?
            </h2>

            <div className="space-y-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 ${bgColorClass} rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    1
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Application Review
                  </h3>
                  <p className="text-gray-600">
                    Our team will review your application within 24 hours and
                    contact you for any additional information.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 ${bgColorClass} rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    2
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Document Verification
                  </h3>
                  <p className="text-gray-600">
                    We'll schedule a meeting to collect and verify all required
                    documents.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0">
                  <div
                    className={`w-12 h-12 ${bgColorClass} rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    3
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Loan Approval & Disbursement
                  </h3>
                  <p className="text-gray-600">
                    Once your application is approved, we'll finalize the terms
                    and disburse the funds to your account within 2-3 business
                    days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto divide-y">
            <div className="py-6">
              <h3 className="text-lg font-semibold mb-2">
                What documents will I need to provide?
              </h3>
              <p className="text-gray-600">
                You'll typically need to provide your identity proof
                (Aadhaar/PAN), address proof, income proof (salary slips or
                ITR), and bank statements for the last 6 months.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-lg font-semibold mb-2">
                How long does the approval process take?
              </h3>
              <p className="text-gray-600">
                For most applicants, we can provide initial approval within
                24-48 hours after document verification. The complete process
                usually takes 3-5 business days.
              </p>
            </div>

            <div className="py-6">
              <h3 className="text-lg font-semibold mb-2">
                What are the interest rates for {getLoanTitle()}?
              </h3>
              <p className="text-gray-600">
                Interest rates vary based on your profile, loan amount, and
                term. They typically range from 9.5% to 14% per annum. You'll
                receive your personalized rate after initial approval.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Have more questions?{" "}
              <a
                href="/contact"
                className={`${textColorClass} font-semibold hover:underline`}
              >
                Contact our support team
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ApplyPage;
