import React, { useState } from 'react';

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(34037802);
  const [tenure, setTenure] = useState(28);
  const [interestRate, setInterestRate] = useState(9.58);

  // Format currency in Indian numbering system (lakhs and crores)
  const formatCurrency = (amount) => {
    if (isNaN(amount) || amount === 0) return '₹0';
    
    // For amounts in crores (>= 1,00,00,000)
    if (amount >= 10000000) {
      const crores = amount / 10000000;
      return `₹${crores.toFixed(2)} Cr`;
    } 
    // For amounts in lakhs (>= 1,00,000)
    else if (amount >= 100000) {
      const lakhs = amount / 100000;
      return `₹${lakhs.toFixed(2)} Lac`;
    }
    // For smaller amounts
    else {
      return `₹${amount.toLocaleString('en-IN')}`;
    }
  };

  // Format number with commas (Indian system)
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(Math.round(num));
  };

  // Calculate EMI
  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const months = tenure * 12;
    
    if (monthlyRate === 0) return loanAmount / months;
    
    const emi = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, months) / 
                (Math.pow(1 + monthlyRate, months) - 1);
    return isFinite(emi) ? emi : 0;
  };

  // Calculate total payment
  const calculateTotalPayment = () => {
    const emi = calculateEMI();
    return emi * tenure * 12;
  };

  // Calculate total interest
  const calculateTotalInterest = () => {
    return calculateTotalPayment() - loanAmount;
  };

  const emi = calculateEMI();
  const totalPayment = calculateTotalPayment();
  const totalInterest = calculateTotalInterest();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">EMI Calculator</h1>
          <p className="text-gray-600">Calculate your Equated Monthly Installment (EMI) for home, car, or personal loans</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Input Section */}
            <div className="p-8 border-r border-gray-100">
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-700 font-medium">Loan Amount</label>
                  <span className="text-lg font-bold text-blue-600">{formatCurrency(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min="100000"
                  max="100000000"
                  step="100000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                  className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>₹1 Lac</span>
                  <span>₹10 Cr</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-700 font-medium">Tenure (Years)</label>
                  <span className="text-lg font-bold text-blue-600">{tenure} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={tenure}
                  onChange={(e) => setTenure(parseInt(e.target.value))}
                  className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1</span>
                  <span>30</span>
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-gray-700 font-medium">Interest Rate (% p.a.)</label>
                  <span className="text-lg font-bold text-blue-600">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.01"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-sm text-gray-500 mt-1">
                  <span>1%</span>
                  <span>20%</span>
                </div>
              </div>
            </div>
            
            {/* Result Section */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 flex flex-col justify-center">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Your EMI</h2>
                <div className="text-4xl font-bold">{formatCurrency(emi)}</div>
                <p className="text-blue-100">per month</p>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-lg p-4 mb-4">
                <div className="flex justify-between mb-3">
                  <span className="text-blue-100">Loan Amount</span>
                  <span className="font-medium text-lg">{formatCurrency(loanAmount)}</span>
                </div>
                <div className="flex justify-between mb-3">
                  <span className="text-blue-100">Total Interest</span>
                  <span className="font-medium text-lg">{formatCurrency(totalInterest)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-100">Total Payment</span>
                  <span className="font-medium text-lg">{formatCurrency(totalPayment)}</span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors">
                  Apply for Loan
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">How EMI is Calculated</h3>
          <p className="text-gray-600">
            EMI stands for Equated Monthly Installment. It is the fixed amount you pay towards your loan every month. 
            The EMI consists of both principal and interest components. The formula used to calculate EMI is:
          </p>
          <div className="bg-gray-50 p-4 rounded-lg mt-4 font-mono text-sm">
            EMI = [P × R × (1+R)^N] / [(1+R)^N-1]
          </div>
          <div className="mt-3 text-sm text-gray-600">
            Where P is the loan amount, R is the monthly interest rate, and N is the number of monthly installments.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmiCalculator;