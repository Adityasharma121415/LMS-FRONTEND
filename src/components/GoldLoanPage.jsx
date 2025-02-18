// pages/GoldLoanPage.js
import React from "react";
import { Link } from "react-router-dom";

const GoldLoanPage = () => {
  return (
    <div>
      {/* Hero Banner */}
      <div className="bg-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Gold Loan Solutions
              </h1>
              <p className="text-xl mb-8">
                Unlock the value of your gold assets with our quick and
                hassle-free gold loan options.
              </p>
              <Link
                to="/apply/gold-loan"
                className="inline-block px-8 py-3 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Apply Now
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/api/placeholder/600/400"
                alt="Gold Loan"
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
            Gold Loan Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">
                Attractive Interest Rates
              </h3>
              <p className="text-gray-600">
                Starting from 7.5%* p.a. with transparent terms and conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">High Loan Value</h3>
              <p className="text-gray-600">
                Get up to 75% of your gold's market value instantly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Flexible Repayment</h3>
              <p className="text-gray-600">
                Choose from multiple repayment options ranging from 3 months to
                3 years.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">
                Minimal Documentation
              </h3>
              <p className="text-gray-600">
                Simple KYC process with minimal paperwork required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Safe Gold Storage</h3>
              <p className="text-gray-600">
                Your gold is stored in our secure, insured vaults with
                state-of-the-art security.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-3">Quick Disbursement</h3>
              <p className="text-gray-600">
                Get your loan amount within 30 minutes* after gold valuation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            How Gold Loan Works
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 text-3xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Bring Your Gold</h3>
                <p className="text-gray-600">
                  Visit our branch with your gold (jewelry, coins, or bullion)
                  and basic KYC documents.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 text-3xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Gold Valuation</h3>
                <p className="text-gray-600">
                  Our experts will assess your gold's purity and calculate the
                  eligible loan amount.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 text-3xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Get Your Money</h3>
                <p className="text-gray-600">
                  Once approved, receive your loan amount instantly through your
                  preferred mode.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/apply/gold-loan"
                className="inline-block px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
              >
                Apply for Gold Loan
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility & Documents */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Eligibility */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Eligibility Criteria</h2>

              <div className="bg-white p-6 rounded-lg shadow space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">Age: 18 years or above</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      KYC compliant with valid ID and address proof
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      Ownership of gold assets (jewelry, coins, or bullion)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      No minimum income requirement
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Required Documents</h2>

              <div className="bg-white p-6 rounded-lg shadow space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      Identity Proof: Aadhar Card, PAN Card, Voter ID, or
                      Passport
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      Address Proof: Utility bill, Rental agreement, or Bank
                      statement
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      Passport size photographs (2)
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <div className="ml-4">
                    <p className="text-gray-700">
                      Proof of gold ownership (original purchase receipts, if
                      available)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Loan Calculator CTA */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">
                Calculate Your Gold Loan Value
              </h3>
              <p className="text-gray-600 mb-4">
                Estimate how much loan you can get against your gold assets with
                our easy-to-use calculator.
              </p>
              <Link
                to="/calculator"
                className="inline-block px-6 py-2 bg-yellow-600 text-white font-semibold rounded-md hover:bg-yellow-700 transition-colors"
              >
                Use Gold Loan Calculator
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <img
                src="/api/placeholder/300/200"
                alt="Gold Loan Calculator"
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
                What types of gold do you accept?
              </h3>
              <p className="text-gray-600">
                We accept gold jewelry, gold coins, and gold bullion with purity
                of 18 karats and above. All items are tested for purity at our
                branches.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                How is the loan amount calculated?
              </h3>
              <p className="text-gray-600">
                The loan amount is calculated based on the weight of your gold,
                its purity, and the current market price. We typically offer up
                to 75% of the gold's market value.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">
                Is my gold safe with you?
              </h3>
              <p className="text-gray-600">
                Absolutely. Your gold is stored in our highly secure, insured
                vaults with 24/7 surveillance. You'll receive a detailed receipt
                for all items deposited.
              </p>
            </div>

            <div className="text-center mt-8">
              <Link
                to="/faq"
                className="inline-block text-yellow-600 font-semibold hover:underline"
              >
                View All FAQs →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA */}
      <section className="py-16 bg-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Quick Funds Against Your Gold?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get instant liquidity without selling your precious gold assets.
            Apply now and receive funds within the same day!
          </p>
          <Link
            to="/apply/gold-loan"
            className="inline-block px-8 py-4 bg-white text-yellow-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GoldLoanPage;
