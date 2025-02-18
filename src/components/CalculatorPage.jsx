import React, { useState } from "react";
import { Calculator, HelpCircle, ChevronDown } from "lucide-react";

const CalculatorPage = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [emi, setEmi] = useState(null);
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);
  const [openFaq, setOpenFaq] = useState("");

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100; // Monthly interest rate
    const time = parseFloat(loanTerm) * 12; // Total months

    if (principal && rate && time) {
      const emiAmount =
        (principal * rate * Math.pow(1 + rate, time)) /
        (Math.pow(1 + rate, time) - 1);
      const totalPay = emiAmount * time;

      setEmi(emiAmount);
      setTotalPayment(totalPay);
      setTotalInterest(totalPay - principal);
    }
  };

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? "" : id);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* EMI Calculator Section */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Calculator className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">EMI Calculator</h2>
          </div>
          <p className="text-gray-600">Calculate your monthly EMI payments</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Loan Amount
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter loan amount"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Interest Rate (%)
            </label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter annual interest rate"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Loan Term (Years)
            </label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter loan term in years"
            />
          </div>

          <button
            onClick={calculateEMI}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Calculate EMI
          </button>

          {emi && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Monthly EMI</p>
                <p className="text-xl font-bold text-gray-900">
                  ₹{emi.toFixed(2)}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Total Payment</p>
                <p className="text-xl font-bold text-gray-900">
                  ₹{totalPayment.toFixed(2)}
                </p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Total Interest</p>
                <p className="text-xl font-bold text-gray-900">
                  ₹{totalInterest.toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <HelpCircle className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-800">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="text-gray-600">
            Common questions about our loan services
          </p>
        </div>

        <div className="space-y-4">
          {[
            {
              id: "1",
              question: "What is EMI?",
              answer:
                "EMI (Equated Monthly Installment) is a fixed amount paid by a borrower to a lender at a specified date each month. EMI is used to pay off both the principal and interest on a loan.",
            },
            {
              id: "2",
              question: "How is EMI calculated?",
              answer:
                "EMI is calculated using the formula: EMI = P × r × (1 + r)^n / ((1 + r)^n - 1), where P is principal, r is monthly interest rate, and n is total number of months.",
            },
            {
              id: "3",
              question: "What documents are required for a loan?",
              answer:
                "Typically required documents include: ID proof, address proof, income proof (salary slips/tax returns), bank statements, and employment details. Specific requirements may vary based on loan type.",
            },
            {
              id: "4",
              question: "Can I pay more than my EMI amount?",
              answer:
                "Yes, you can make partial prepayments or foreclose your loan. However, some loans may have prepayment penalties. Check your loan terms for specific conditions.",
            },
            {
              id: "5",
              question: "How does interest rate affect EMI?",
              answer:
                "A higher interest rate increases your EMI amount and total interest payment. Even a small change in interest rate can significantly impact your total loan cost over the entire tenure.",
            },
          ].map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-4 py-3 flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openFaq === faq.id ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              {openFaq === faq.id && (
                <div className="px-4 py-3 text-gray-600 border-t border-gray-200">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CalculatorPage;
