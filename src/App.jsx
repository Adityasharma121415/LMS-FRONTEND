import { Routes, Route, Navigate } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import TransactionPage from "./pages/TransactionPage";
import LoginPage from "./pages/AdminLogin";
import { isAuthenticated } from "./utils/auth";
import UserDetails from "./components/UserDetails";

import Admins from "./components/Admins"; // Add this import

const ProtectedRoute = ({ element }) => {
  return isAuthenticated() ? element : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<ProtectedRoute element={<AdminPage />} />} />
      <Route path="/admin/dashboard" element={<ProtectedRoute element={<AdminPage />} />} />
      <Route path="/admin/user-details/:userId" element={<UserDetails />} />
      <Route path="/transactions" element={<ProtectedRoute element={<TransactionPage />} />} />
      <Route path="/admin/admins" element={<ProtectedRoute element={<Admins />} />} /> {/* Updated this line */}
    </Routes>
  );
}

export default App;