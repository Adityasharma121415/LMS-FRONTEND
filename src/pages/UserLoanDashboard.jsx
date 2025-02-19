import React, { useState, useEffect } from 'react';
import { User, Briefcase, CreditCard, FileText, Phone, Mail, MapPin, Building2, Wallet, AlertCircle } from 'lucide-react';

const UserLoanDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [basicInfo, setBasicInfo] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');

        const [userResponse, basicInfoResponse] = await Promise.all([
          fetch(`http://localhost:8080/user-details/get-user/${userId}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          }),
          fetch(`http://localhost:8080/user/get-data/${userId}`, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          })
        ]);

        if (!userResponse.ok || !basicInfoResponse.ok) {
          throw new Error('Failed to fetch user data');
        }

        const userData = await userResponse.json();
        const basicInfoData = await basicInfoResponse.json();

        setUserData(userData.data);
        setBasicInfo(basicInfoData.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="m-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg flex items-center gap-2">
        <AlertCircle className="h-4 w-4" />
        <p>{error}</p>
      </div>
    );
  }

  if (!userData) return null;

  const tabs = ['overview', 'financial', 'documents', 'profile'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{basicInfo.name || 'User Name'}</h1>
              <p className="text-blue-600">ID: {userData.userId}</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-md">
                <Mail className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{basicInfo.username || 'email@example.com'}</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-md">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{basicInfo.phone || '+1234567890'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white shadow-md rounded-lg">
          <div className="flex border-b">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 px-4 py-3 text-center font-medium transition-colors
                  ${activeTab === tab 
                    ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Personal Information Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-50 to-white p-4 border-b">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-blue-700">
                      <User className="w-5 h-5" />
                      Personal Information
                    </h3>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">{userData.address}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
                      <FileText className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">Aadhar: {userData.aadhar}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
                      <CreditCard className="w-4 h-4 text-blue-600" />
                      <span className="text-gray-700">PAN: {userData.panNo}</span>
                    </div>
                  </div>
                </div>

                {/* Income Details Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-green-50 to-white p-4 border-b">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-green-700">
                      <Briefcase className="w-5 h-5" />
                      Income Details
                    </h3>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
                      <Building2 className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Source: {userData.incomeSource}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
                      <Wallet className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Type: {userData.incomeType}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
                      <CreditCard className="w-4 h-4 text-green-600" />
                      <span className="text-gray-700">Salary: ₹{userData.salary.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Collateral Information Card */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-50 to-white p-4 border-b">
                    <h3 className="text-lg font-semibold flex items-center gap-2 text-purple-700">
                      <FileText className="w-5 h-5" />
                      Collateral Information
                    </h3>
                  </div>
                  <div className="p-4 space-y-4">
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
                      <FileText className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700">ID: {userData.collateral}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md transition-colors">
                      <AlertCircle className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700">Status: Active</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'financial' && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Financial Information</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-700 font-medium">This section can be expanded to include:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Loan application status</li>
                    <li>Credit score</li>
                    <li>Payment history</li>
                    <li>Outstanding balance</li>
                    <li>EMI details</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Documents</h3>
                {userData.documents.length === 0 ? (
                  <div className="bg-gray-50 p-6 rounded-lg text-center">
                    <FileText className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">No documents uploaded yet</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-4">
                    {userData.documents.map((doc, index) => (
                      <div key={index} className="p-4 border rounded-lg">
                        {/* Document card content */}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'profile' && (
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">Profile Settings</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 font-medium">This section can include:</p>
                  <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
                    <li>Profile picture upload</li>
                    <li>Contact information update</li>
                    <li>Password change</li>
                    <li>Notification preferences</li>
                    <li>Communication history</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoanDashboard;