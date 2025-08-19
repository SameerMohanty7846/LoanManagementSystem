import React from 'react';
import { Link } from 'react-router-dom';

const ViewLoans = () => {
  // Sample loan data
  const loanTypes = [
    {
      id: 1,
      name: "Personal Loan",
      interestRate: "8.5% - 12%",
      amount: "Up to $50,000",
      term: "1-5 years",
      features: [
        "No collateral required",
        "Quick approval",
        "Flexible repayment"
      ],
      tag: "Low Rate"
    },
    {
      id: 2,
      name: "Home Loan",
      interestRate: "6.2% - 8%",
      amount: "Up to $2M",
      term: "15-30 years",
      features: [
        "Fixed & adjustable rates",
        "Low down payment",
        "Pre-approval available"
      ],
      tag: "Popular"
    },
    {
      id: 3,
      name: "Auto Loan",
      interestRate: "4.5% - 7%",
      amount: "Up to $100,000",
      term: "2-7 years",
      features: [
        "New & used cars",
        "Online application",
        "Gap insurance"
      ],
      tag: "Fast Approval"
    },
    {
      id: 4,
      name: "Education Loan",
      interestRate: "5.5% - 9%",
      amount: "Up to $200,000",
      term: "Up to 15 years",
      features: [
        "Deferred payment",
        "Cosigner release",
        "Tuition & expenses"
      ],
      tag: "Flexible"
    },
    {
      id: 5,
      name: "Business Loan",
      interestRate: "7% - 15%",
      amount: "Up to $500,000",
      term: "1-10 years",
      features: [
        "Fast funding",
        "Credit lines",
        "Business advisor"
      ],
      tag: "Growth"
    },
    {
      id: 6,
      name: "Medical Loan",
      interestRate: "6% - 11%",
      amount: "Up to $75,000",
      term: "1-7 years",
      features: [
        "No upfront costs",
        "Network providers",
        "Quick disbursement"
      ],
      tag: "Healthcare"
    }
  ];

  // Icon mapping for each loan type
  const loanIcons = {
    "Personal Loan": "fas fa-wallet",
    "Home Loan": "fas fa-home",
    "Auto Loan": "fas fa-car",
    "Education Loan": "fas fa-graduation-cap",
    "Business Loan": "fas fa-briefcase",
    "Medical Loan": "fas fa-heartbeat"
  };

  // Color mapping for each loan type
  const loanColors = {
    "Personal Loan": "blue",
    "Home Loan": "green",
    "Auto Loan": "orange",
    "Education Loan": "purple",
    "Business Loan": "pink",
    "Medical Loan": "red"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">Loan Options</h1>
        <p className="text-md text-center text-gray-600 mb-8">
          Explore our range of loan products designed to meet your financial needs
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {loanTypes.map((loan) => {
            const color = loanColors[loan.name];
            const colorClasses = {
              blue: { bg: "bg-blue-100", text: "text-blue-600", border: "border-blue-500", tag: "bg-blue-600" },
              green: { bg: "bg-green-100", text: "text-green-600", border: "border-green-500", tag: "bg-green-600" },
              orange: { bg: "bg-orange-100", text: "text-orange-600", border: "border-orange-500", tag: "bg-orange-600" },
              purple: { bg: "bg-purple-100", text: "text-purple-600", border: "border-purple-500", tag: "bg-purple-600" },
              pink: { bg: "bg-pink-100", text: "text-pink-600", border: "border-pink-500", tag: "bg-pink-600" },
              red: { bg: "bg-red-100", text: "text-red-600", border: "border-red-500", tag: "bg-red-600" }
            };
            
            return (
              <div 
                key={loan.id} 
                className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 border-l-4 ${colorClasses[color].border}`}
              >
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-full ${colorClasses[color].bg} flex items-center justify-center mr-3`}>
                        <i className={`${loanIcons[loan.name]} ${colorClasses[color].text}`}></i>
                      </div>
                      <h2 className="text-lg font-bold text-gray-800">{loan.name}</h2>
                    </div>
                    <span className={`text-xs font-semibold text-white px-2 py-1 rounded ${colorClasses[color].tag}`}>
                      {loan.tag}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <p className="text-xs text-gray-500">Interest Rate</p>
                      <p className="text-xl font-bold text-gray-800">{loan.interestRate}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Max Amount</p>
                      <p className="text-md font-semibold text-gray-800">{loan.amount}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <ul className="text-xs text-gray-600 space-y-1">
                      {loan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <i className={`fas fa-check-circle mt-0.5 mr-2 ${colorClasses[color].text}`}></i>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between text-xs text-gray-600 mb-4">
                    <div>
                      <p className="text-gray-500">Loan Term</p>
                      <p className="font-medium">{loan.term}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-500">Processing</p>
                      <p className="font-medium">1-3 days</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      to="/apply-loan"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center text-sm font-medium py-2 px-3 rounded transition-colors"
                    >
                      Apply Now
                    </Link>
                    <Link
                      to={`/loan-details/${loan.id}`}
                      className="flex-1 border border-gray-300 hover:bg-gray-50 text-gray-700 text-center text-sm font-medium py-2 px-3 rounded transition-colors"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-10 bg-blue-50 rounded-lg p-5 text-center">
          <h2 className="text-xl font-bold text-gray-800 mb-2">Need Help Choosing?</h2>
          <p className="text-sm text-gray-600 mb-4">Our loan specialists are ready to help you find the perfect loan option</p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-5 rounded transition-colors text-sm">
            Contact a Loan Advisor
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewLoans;