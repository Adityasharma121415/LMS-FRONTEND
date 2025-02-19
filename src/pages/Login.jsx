// Previous imports remain the same...
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const API_BASE_URL = "http://localhost:8080";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  
  // Previous state declarations remain the same...
  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  const [showError, setShowError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  // Previous validation functions remain the same...
  const validateUsername = (username) => {
    if (!username) return 'Username is required';
    
    return '';
  };

  const validatePassword = (password) => {
    if (!password) return 'Password is required';
    
    return '';
  };

  // Previous handleInputChange remains the same...
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
    setShowError(false);
    setApiError('');
    setLoginSuccess(false);
  };

  const loginUser = async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }
      
      return data;
    } catch (error) {
      throw error;
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const usernameError = validateUsername(formData.username);
    const passwordError = validatePassword(formData.password);

    setErrors({
      username: usernameError,
      password: passwordError
    });

    if (!usernameError && !passwordError) {
      setIsLoading(true);
      setApiError('');
      setLoginSuccess(false);
      
      try {
        // Login user
        const loginResponse = await loginUser({
          username: formData.username,
          password: formData.password
        });

        // Store token
        if (loginResponse.data.token) {
          localStorage.setItem('token', loginResponse.data.token);
          localStorage.setItem('userId', loginResponse.data.userId);


          
          if (rememberMe) {
            localStorage.setItem('rememberedUser', formData.username);
          } else {
            localStorage.removeItem('rememberedUser');
          }

        //   // Fetch user profile
        //   const userProfile = await fetchUserProfile(loginResponse.token);
        //   console.log('User profile:', userProfile);

          // Show success message
          setLoginSuccess(true);

          // Redirect after 2 seconds
          setTimeout(() => {
            // window.location.href = '/dashboard';
            window.location.href='/userdashboard';
            console.log('Redirecting to dashboard...');
          }, 2000);
        } else {
          throw new Error('No token received');
        }

      } catch (error) {
        console.error('Login error:', error);
        setApiError(error.message || 'Login failed. Please check your credentials.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setShowError(true);
    }
  };

  // Previous useEffect remains the same...
  React.useEffect(() => {
    const rememberedUser = localStorage.getItem('rememberedUser');
    if (rememberedUser) {
      setFormData(prev => ({
        ...prev,
        username: rememberedUser
      }));
      setRememberMe(true);
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-indigo-900">
            Loan Management System
          </h1>
        </div>
        
        <div className="w-full">
          {loginSuccess && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-md">
              <div className="flex items-center text-green-800">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <p>Login successful! Redirecting...</p>
              </div>
            </div>
          )}

          {(showError && (errors.username || errors.password)) && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <div className="flex items-center text-red-800">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>Please correct the errors below to continue.</p>
              </div>
            </div>
          )}

          {apiError && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md">
              <div className="flex items-center text-red-800">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p>{apiError}</p>
              </div>
            </div>
          )}
          
          {/* Rest of the form remains the same... */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-indigo-900" htmlFor="username">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                  errors.username ? 'border-red-500' : 'border-indigo-200'
                }`}
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                disabled={isLoading || loginSuccess}
              />
              {errors.username && (
                <p className="text-sm text-red-500">{errors.username}</p>
              )}
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-indigo-900" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                    errors.password ? 'border-red-500' : 'border-indigo-200'
                  }`}
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  disabled={isLoading || loginSuccess}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-700"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading || loginSuccess}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            {/* Remember me checkbox */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="h-4 w-4 rounded border-indigo-300 text-indigo-600 focus:ring-indigo-500"
                disabled={isLoading || loginSuccess}
              />
              <label htmlFor="remember" className="text-sm text-indigo-900">
                Remember me
              </label>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading || loginSuccess}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;