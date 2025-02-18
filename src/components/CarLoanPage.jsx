// pages/CarLoanPage.js
import React from "react";
import { Link } from "react-router-dom";

const CarLoanPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Car Loan Solutions
              </h1>
              <p className="text-xl mb-8">
                Drive your dream car today with our hassle-free financing and
                competitive interest rates.
              </p>
              <Link
                to="/apply/car-loan"
                className="inline-block px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="../../public/images/carLoan.png"
                alt="Car Loan"
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Loan Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Car Loan Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">
                Attractive Interest Rates
              </h3>
              <p className="text-gray-600">
                Starting from 7.25%* p.a. with special offers for existing
                customers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">High Loan Amount</h3>
              <p className="text-gray-600">
                Finance up to 90% of your car's on-road price with customized
                solutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Flexible Tenure</h3>
              <p className="text-gray-600">
                Choose from 1 to 7 years repayment options to suit your
                financial goals.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Quick Approval</h3>
              <p className="text-gray-600">
                Get your loan approved within 24 hours with minimal
                documentation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">
                Zero Foreclosure Charges
              </h3>
              <p className="text-gray-600">
                Pay off your loan early without any prepayment penalties after 6
                months.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Door-step Service</h3>
              <p className="text-gray-600">
                Convenient application process with doorstep document
                collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Eligibility Criteria
          </h2>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Age</h3>
                  <p className="text-gray-600">
                    Minimum age of 21 years and maximum age of 65 years at loan
                    maturity.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Income</h3>
                  <p className="text-gray-600">
                    Minimum monthly income of ₹20,000 for salaried individuals
                    or ₹2.5 lakh annual income for self-employed.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Employment</h3>
                  <p className="text-gray-600">
                    Salaried individuals with at least 1 year of work experience
                    or self-employed professionals with 2 years in business.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Credit Score</h3>
                  <p className="text-gray-600">
                    Minimum credit score of 650+ for best interest rates and
                    higher loan amounts.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                to="/apply/car-loan"
                className="inline-block px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
              >
                Apply for Car Loan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Car Loan Calculator CTA */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">
                Calculate Your Car Loan EMI
              </h3>
              <p className="text-gray-600 mb-4">
                Plan your budget better by calculating your monthly installments
                and total interest payable.
              </p>
              <Link
                to="/calculator"
                className="inline-block px-6 py-2 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition-colors"
              >
                Use EMI Calculator
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img
                src="../../images/carEmiCalculator.png"
                alt="EMI Calculator"
                className="w-full max-w-sm rounded"
              />
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

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Can I get a loan for a used car?
              </h3>
              <p className="text-gray-600">
                Yes, we offer loans for both new and used cars. For used cars,
                the vehicle should not be more than 5 years old at the time of
                loan maturity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                What documents are required for a car loan application?
              </h3>
              <p className="text-gray-600">
                You'll need identity proof, address proof, income documents
                (salary slips/ITR), bank statements for the last 3 months, a
                proforma invoice from the dealer, and a completed application
                form.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                How long does it take to process a car loan?
              </h3>
              <p className="text-gray-600">
                With all required documents in place, we can approve your car
                loan within 24 hours. Disbursement happens directly to the
                dealer once you've completed your down payment.
              </p>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/faq"
                className="inline-block text-green-600 font-semibold hover:underline"
              >
                View All FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Drive Your Dream Car?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Apply today and get on the road with a car that suits your
            lifestyle. Our experts will guide you through the process.
          </p>
          <Link
            to="/apply/car-loan"
            className="inline-block px-8 py-4 bg-white text-green-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CarLoanPage;
