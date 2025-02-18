// pages/HomeLoanPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomeLoanPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Home Loan Solutions</h1>
              <p className="text-xl mb-8">
                Make your dream home a reality with our competitive interest rates and flexible repayment options.
              </p>
              <Link 
                to="/apply/home-loan" 
                className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="../../public/images/homeLoan.png" 
                alt="Home Loan" 
                className="rounded-lg shadow-lg w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Loan Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Home Loan Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Competitive Interest Rates</h3>
              <p className="text-gray-600">
                Starting from 6.70%* p.a. with special rates for women applicants.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Loan Amount</h3>
              <p className="text-gray-600">
                Up to ₹10 crore depending on your income and property value.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Repayment Tenure</h3>
              <p className="text-gray-600">
                Flexible repayment options up to 30 years to suit your budget.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Quick Processing</h3>
              <p className="text-gray-600">
                Fast approval process with minimal documentation requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">No Hidden Charges</h3>
              <p className="text-gray-600">
                Transparent fee structure with no hidden costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Balance Transfer</h3>
              <p className="text-gray-600">
                Switch your existing home loan and save on interest payments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Eligibility Criteria</h2>
          
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Age</h3>
                  <p className="text-gray-600">Minimum age of 21 years and maximum age of 65 years at loan maturity.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Income</h3>
                  <p className="text-gray-600">Minimum monthly income of ₹25,000 (may vary based on city and loan amount).</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Employment</h3>
                  <p className="text-gray-600">Salaried individuals with at least 2 years of work experience (1 year with current employer).</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Credit Score</h3>
                  <p className="text-gray-600">Minimum credit score of 700+ for best interest rates.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                to="/apply/home-loan" 
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Apply for Home Loan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Home Loan Calculator CTA */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Calculate Your Home Loan EMI</h3>
              <p className="text-gray-600 mb-4">
                Plan your finances better by calculating your monthly installments and total interest payable.
              </p>
              <Link 
                to="/calculator" 
                className="inline-block px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Use EMI Calculator
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img 
                src="../../images/emiCalculator.png" 
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
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">What is the maximum loan amount I can get?</h3>
              <p className="text-gray-600">
                The maximum loan amount depends on your income, repayment capacity, property value, and credit score. Generally, we offer up to 80% of the property value as loan amount.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">What documents are required for a home loan application?</h3>
              <p className="text-gray-600">
                You'll need identity proof, address proof, income proof (salary slips/IT returns), bank statements for the last 6 months, property documents, and a completed application form.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">How long does it take to process a home loan?</h3>
              <p className="text-gray-600">
                Once all documents are submitted, the loan can be approved within 3-7 working days. Disbursement typically happens within a week after approval.
              </p>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                to="/faq" 
                className="inline-block text-blue-600 font-semibold hover:underline"
              >
                View All FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply for a Home Loan?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards owning your dream home. Our experts will guide you through the entire process.
          </p>
          <Link 
            to="/apply/home-loan" 
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeLoanPage;