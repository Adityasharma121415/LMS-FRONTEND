import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  RefreshCcw, 
  Settings, 
  LogOut, 
  Activity, 
  Users, 
  CreditCard,
  ChevronDown 
} from 'lucide-react';

const AdminDashboard = () => {
  const [loanRequests, setLoanRequests] = useState([]);
  const [userNames, setUserNames] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [stats, setStats] = useState({
    totalRequests: 0,
    pendingRequests: 0,
    approvedLoans: 0,
    rejectedLoans: 0,
    totalAmount: 0
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetchLoanRequests();
  }, []);

  const fetchLoanRequests = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      const response = await fetch('http://localhost:8080/api/loan-status/all', {
        headers: { Authorization: `Bearer ${token}` }
      });

      const data = await response.json();
      setLoanRequests(data);
      calculateStats(data);

      const userIds = [...new Set(data.map(loan => loan.userId))];
      const userNamesMap = {};

      await Promise.all(
        userIds.map(async (userId) => {
          try {
            const userRes = await fetch(`http://localhost:8080/user/get-data/${userId}`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            const userData = await userRes.json();
            userNamesMap[userId] = userData.success ? userData.data.name : 'Unknown User';
          } catch (err) {
            console.error(`Error fetching user ${userId}:`, err);
            userNamesMap[userId] = 'Unknown User';
          }
        })
      );

      setUserNames(userNamesMap);
    } catch (error) {
      console.error('Error fetching loan requests:', error);
      if (error.response?.status === 401) {
        navigate('/login');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusUpdate = async (lrId, newStatus) => {
    try {
      const token = localStorage.getItem('token');
      await fetch(`http://localhost:8080/api/loan-status/${lrId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ loanStatus: newStatus })
      });
      fetchLoanRequests();
    } catch (error) {
      console.error('Error updating loan status:', error);
    }
  };

  const calculateStats = (data) => {
    setStats({
      totalRequests: data.length,
      pendingRequests: data.filter(loan => loan.loanStatus === 'pending').length,
      approvedLoans: data.filter(loan => loan.loanStatus === 'approved').length,
      rejectedLoans: data.filter(loan => loan.loanStatus === 'rejected').length,
      totalAmount: data.reduce((sum, loan) => sum + loan.loanAmount, 0)
    });
  };

  const getFilteredRequests = () => {
    if (statusFilter === 'all') return loanRequests;
    return loanRequests.filter(loan => loan.loanStatus === statusFilter);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    navigate('/login');
  };

  const NavLink = ({ icon, text, active, path }) => (
    path ? (
      <Link 
        to={path} 
        className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-200 ${
          active 
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
            : 'text-gray-300 hover:bg-blue-600/50 hover:text-white hover:shadow-md'
        }`}
      >
        {icon}
        <span className="font-medium">{text}</span>
      </Link>
    ) : (
      <div className={`flex items-center space-x-3 px-6 py-4 rounded-xl transition-all duration-200 ${
        active 
          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
          : 'text-gray-300 hover:bg-blue-600/50 hover:text-white hover:shadow-md'
      }`}>
        {icon}
        <span className="font-medium">{text}</span>
      </div>
    )
  );

  const StatBox = ({ title, value, icon }) => (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        </div>
        <div className="bg-blue-50 p-4 rounded-xl">{icon}</div>
      </div>
    </div>
  );

  const StatusBadge = ({ status }) => {
    const getStatusStyles = () => {
      switch (status) {
        case 'approved':
          return 'bg-green-100 text-green-800 border border-green-200';
        case 'pending':
          return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
        case 'rejected':
          return 'bg-red-100 text-red-800 border border-red-200';
        default:
          return 'bg-gray-100 text-gray-800 border border-gray-200';
      }
    };

    return (
      <span className={`inline-flex items-center justify-center px-4 py-2 rounded-lg text-sm font-medium ${getStatusStyles()}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const ActionButton = ({ onClick, children, color }) => (
    <button 
      onClick={onClick}
      className={`px-4 py-2 ${color} text-white rounded-lg hover:opacity-90 transition-all duration-200 shadow-md hover:shadow-lg text-sm font-medium min-w-[100px]`}
    >
      {children}
    </button>
  );

  const statCards = [
    { title: 'Total Requests', value: stats.totalRequests, icon: <Users className="w-8 h-8 text-blue-600" /> },
    { title: 'Pending Requests', value: stats.pendingRequests, icon: <Activity className="w-8 h-8 text-yellow-600" /> },
    { title: 'Approved Loans', value: stats.approvedLoans, icon: <CreditCard className="w-8 h-8 text-green-600" /> },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-blue-900 to-blue-800 text-white">
        <div className="p-8 border-b border-blue-700/50">
          <h1 className="text-2xl font-bold tracking-tight">Admin Panel</h1>
        </div>
        <nav className="mt-8 px-4 space-y-3">
          <NavLink icon={<LayoutDashboard size={22} />} text="Dashboard" active />
          <NavLink icon={<Users size={22} />} text="Admins" path="/admin/admins" />
      
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-6 py-4 rounded-xl text-gray-300 hover:bg-blue-600/50 hover:text-white transition-all duration-200 mt-8 hover:shadow-md"
          >
            <LogOut size={22} />
            <span className="font-medium">Logout</span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-800">CARS24 ADMIN DASHBOARD</h2>
          </div>
          <button 
            onClick={fetchLoanRequests}
            className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2 shadow-lg shadow-blue-500/30 hover:shadow-xl"
          >
            <RefreshCcw size={20} />
            <span className="font-medium">Refresh Data</span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {statCards.map((stat, index) => (
            <StatBox key={index} {...stat} />
          ))}
        </div>

        {/* Loan Requests Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-800">Loan Requests</h3>
              <div className="relative">
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Requests</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" size={20} />
              </div>
            </div>
            <div className="overflow-x-auto">
              {isLoading ? (
                <div className="text-center py-8 text-gray-600">Loading...</div>
              ) : (
                <table className="w-full table-fixed">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="w-1/5 px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b">User Name</th>
                      <th className="w-1/5 px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b">Loan Amount + Interest</th>
                      <th className="w-1/5 px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b">Status</th>
                      <th className="w-1/5 px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b">Details</th>
                      <th className="w-2/5 px-6 py-4 text-left text-xs font-bold text-gray-600 uppercase tracking-wider border-b">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {getFilteredRequests().map((loan) => (
                      <tr key={loan.lrId} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-gray-600 whitespace-nowrap">
                          {userNames[loan.userId] || 'Loading...'}
                        </td>
                        <td className="px-6 py-4 text-sm font-bold text-gray-800 whitespace-nowrap">
                          ₹{loan.loanAmount.toLocaleString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <StatusBadge status={loan.loanStatus} />
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-3">
                            <ActionButton color="bg-blue-600" onClick={() => navigate(`/admin/user-details/${loan.userId}`)}>
                              View Details
                            </ActionButton>
                            {loan.loanStatus === 'pending' && (
                              <>
                                <ActionButton color="bg-green-600" onClick={() => handleStatusUpdate(loan.lrId, 'approved')}>
                                  Approve
                                </ActionButton>
                                <ActionButton color="bg-red-600" onClick={() => handleStatusUpdate(loan.lrId, 'rejected')}>
                                  Reject
                                </ActionButton>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;