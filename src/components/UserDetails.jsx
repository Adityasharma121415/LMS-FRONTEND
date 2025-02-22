import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ArrowLeft,
  User,
  CreditCard,
  FileText,
  LogOut,
  IndianRupee,
  PieChart,
  AlertCircle,
  X
} from 'lucide-react';

const NavLink = ({ icon, text, active, onClick }) => (
  <div
    onClick={onClick}
    className={`
      flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-300 cursor-pointer
      transform hover:scale-105 hover:translate-x-2
      ${active 
        ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
        : 'text-gray-300 hover:bg-blue-600/50 hover:text-white hover:shadow-md'
      }
    `}
  >
    {icon}
    <span className="font-medium">{text}</span>
  </div>
);

const InfoCard = ({ title, icon, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-blue-100 transform hover:-translate-y-1">
    <div className="flex items-center space-x-3 mb-4">
      <div className="bg-blue-50 p-2 rounded-lg transition-colors duration-300 group-hover:bg-blue-100">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
    <div className="space-y-2">
      {children}
    </div>
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0 transition-colors duration-200 hover:bg-gray-50 rounded-lg px-2">
    <span className="text-sm text-gray-600">{label}</span>
    <span className="text-sm font-medium text-gray-900">{value}</span>
  </div>
);

const ErrorAlert = ({ message, onClose }) => (
  <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 transition-all duration-300 hover:bg-red-100">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
        <span className="text-red-700">{message}</span>
      </div>
      <button 
        onClick={onClose} 
        className="text-red-500 hover:text-red-700 transition-colors duration-200 p-1 hover:bg-red-200 rounded-full"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  </div>
);

const UserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  
  const [basicUserData, setBasicUserData] = useState(null);
  const [userDetailsData, setUserDetailsData] = useState(null);
  const [bankData, setBankData] = useState(null);
  const [loanData, setLoanData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUserDetails();
  }, [userId]);

  const handleResponse = async (response) => {
    if (!response.ok) {
      const text = await response.text();
      let error;
      try {
        const json = JSON.parse(text);
        error = new Error(json.message || `HTTP error! status: ${response.status}`);
        error.status = response.status;
        error.json = json;
      } catch {
        error = new Error(text || `HTTP error! status: ${response.status}`);
        error.status = response.status;
      }
      throw error;
    }
    const data = await response.json();
    return data;
  };

  const fetchUserDetails = async () => {
    setIsLoading(true);
    setError(null);

    try {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }

        console.log(`Fetching user details for userId: ${userId}`);

        const headers = {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        };

        const endpoints = [
            `http://localhost:8080/user/get-data/${userId}`,
            `http://localhost:8080/user-details/get-user/${userId}`,
            `http://localhost:8080/api/bank-details/${userId}`,
            `http://localhost:8080/api/loan-status/${userId}`
        ];

        const responses = await Promise.all(
            endpoints.map(async (endpoint) => {
                const res = await fetch(endpoint, { headers });
                if (!res.ok) {
                    throw new Error(`Failed to fetch from ${endpoint}`);
                }
                return res.json();
            })
        );

        const [userData, userdetailsData, bankData, loanData] = responses;

        console.log("Raw Loan Data Response:", loanData);

        if (userData?.success) setBasicUserData(userData.data);
        if (userdetailsData?.success) setUserDetailsData(userdetailsData.data);
        if (bankData?.success) setBankData(bankData.data);

        if (loanData?.success && loanData.data?.loanStatus?.length > 0) {
            setLoanData(loanData.data.loanStatus[0]); // yaha api response thoda alag return kiye theyy backend me ye loanstatus ek array hai 
                                                      // jisme ye sab store hua hai toh uss array ko point karna zaruri hai
        } else {
            setLoanData(null);
        }

    } catch (error) {
        console.error('Error fetching user details:', error);
        if (error.message.includes("403")) {
            setError('Access forbidden. Please check your permissions.');
        } else if (error.message.includes("401")) {
            localStorage.removeItem('token');
            navigate('/login');
        } else {
            setError('Failed to load user details. Please try again later.');
        }
    } finally {
        setIsLoading(false);
    }
};


useEffect(() => {
    console.log("Updated Loan Data in State:", loanData);
}, [loanData]);

const calculateApprovalProbability = () => {
    if (!userDetailsData?.salary || !loanData?.loanAmount) {
        return {
            percentage: 0,
            message: "Loan details missing. Unable to calculate probability.",
            color: "bg-gray-200"
        };
    }

    const monthlySalary = userDetailsData.salary;
    const loanAmount = loanData.loanAmount;
    
    const annualSalary = monthlySalary * 12;
    const loanToSalaryRatio = loanAmount / annualSalary;
    
    const hasBankAccount = bankData?.accountNo ? 1 : 0;
    const hasValidIncome = userDetailsData?.incomeType === 'Salaried' ? 1 : 0;
    
    let baseScore;
    if (loanToSalaryRatio <= 1) baseScore = 70;
    else if (loanToSalaryRatio <= 1.5) baseScore = 55;
    else if (loanToSalaryRatio <= 2) baseScore = 40;
    else if (loanToSalaryRatio <= 2.5) baseScore = 25;
    else baseScore = 10;
    
    const additionalScore = (hasBankAccount * 15) + (hasValidIncome * 15);
    const finalPercentage = Math.min(baseScore + additionalScore, 100);
    
    if (finalPercentage >= 80) {
      return {
        percentage: finalPercentage,
        message: "High approval chance",
        color: "bg-green-500"
      };
    } else if (finalPercentage >= 60) {
      return {
        percentage: finalPercentage,
        message: "Good approval chance",
        color: "bg-green-400"
      };
    } else if (finalPercentage >= 40) {
      return {
        percentage: finalPercentage,
        message: "Moderate approval chance",
        color: "bg-yellow-500"
      };
    } else if (finalPercentage >= 20) {
      return {
        percentage: finalPercentage,
        message: "Low approval chance",
        color: "bg-orange-500"
      };
    } else {
      return {
        percentage: finalPercentage,
        message: "Very low approval chance",
        color: "bg-red-500"
      };
    }
  };

  const ApprovalMeter = () => {
    const probability = calculateApprovalProbability();
    
    return (
      <InfoCard title="Loan Approval Probability" icon={<PieChart className="w-6 h-6 text-blue-600" />}>
        <div className="space-y-4">
          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 transition-all duration-300 hover:bg-blue-300 hover:text-blue-700">
                  Approval Chance
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600">
                  {probability.percentage}%
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
              <div 
                style={{ width: `${probability.percentage}%` }}
                className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${probability.color} transition-all duration-500 hover:opacity-90`}
              />
            </div>
          </div>
          <div className="text-sm text-gray-600">
            <InfoRow label="Monthly Salary" value={`₹${userDetailsData?.salary?.toLocaleString() || 'N/A'}`} />
            <InfoRow label="Loan Amount" value={`₹${loanData?.loanAmount?.toLocaleString() || 'N/A'}`} />
            <InfoRow label="Status" value={probability.message} />
          </div>
        </div>
      </InfoCard>
    );
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-72 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="p-8 border-b border-blue-700/50">
          <h1 className="text-2xl font-bold tracking-tight hover:text-blue-200 transition-colors duration-300">
            Admin Panel
          </h1>
        </div>
        <nav className="mt-8 px-4 space-y-3">
          <NavLink 
            icon={<LayoutDashboard size={22} />} 
            text="Dashboard" 
            onClick={() => navigate('/admin/dashboard')}
          />
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-6 py-4 rounded-xl text-gray-300 
              hover:bg-blue-600/50 hover:text-white transition-all duration-300 mt-8 
              hover:shadow-md transform hover:scale-105 hover:translate-x-2"
          >
            <LogOut size={22} />
            <span className="font-medium">Logout</span>
          </button>
        </nav>
      </div>

      <div className="flex-1 p-10">
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={() => navigate('/admin/dashboard')}
            className="p-2 rounded-lg bg-white border border-gray-200 
              transition-all duration-300 hover:shadow-md transform hover:scale-110
              hover:bg-blue-50 hover:border-blue-200"
          >
            <ArrowLeft size={20} className="text-gray-600 hover:text-blue-600 transition-colors duration-300" />
          </button>
          <h2 className="text-3xl font-bold text-gray-800 hover:text-blue-800 transition-colors duration-300">
            User Details
          </h2>
        </div>

        {error && (
          <ErrorAlert 
            message={error} 
            onClose={() => setError(null)} 
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ApprovalMeter />

          <InfoCard title="Personal Information" icon={<User className="w-6 h-6 text-blue-600" />}>
            <InfoRow label="Full Name" value={basicUserData?.name || 'N/A'} />
            <InfoRow label="Email" value={basicUserData?.username || 'N/A'} />
            <InfoRow label="Phone" value={basicUserData?.phone || 'N/A'} />
            <InfoRow label="Address" value={userDetailsData?.address || 'N/A'} />
          </InfoCard>

          <InfoCard title="Bank Information" icon={<CreditCard className="w-6 h-6 text-blue-600" />}>
            <InfoRow label="Account Holder Name" value={bankData?.accountHolderName || 'N/A'} />
            <InfoRow label="Bank Name" value={bankData?.bankName || 'N/A'} />
            <InfoRow label="Account Number" value={bankData?.accountNo || 'N/A'} />
            <InfoRow label="IFSC Code" value={bankData?.ifsc_code || 'N/A'} />
          </InfoCard>

          <InfoCard title="Income Information" icon={<IndianRupee className="w-6 h-6 text-blue-600" />}>
            <InfoRow label="Income Source" value={userDetailsData?.incomeSource || 'N/A'} />
            <InfoRow label="Income Type" value={userDetailsData?.incomeType || 'N/A'} />
            <InfoRow label="Monthly Salary" value={userDetailsData?.salary ? `₹${userDetailsData.salary.toLocaleString()}` : 'N/A'} />
          </InfoCard>

          <InfoCard title="Document Information" icon={<FileText className="w-6 h-6 text-blue-600" />}>
            <InfoRow label="PAN Number" value={userDetailsData?.panNo || 'N/A'} />
            <InfoRow label="Aadhar Number" value={userDetailsData?.aadhar || 'N/A'} />
          </InfoCard>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;