// Auth Helper Functions

// Get JWT Token from localStorage
export const getToken = () => {
    return localStorage.getItem("token");
  };
  
  // Set JWT Token in localStorage
  export const setToken = (token) => {
    localStorage.setItem("token", token);
  };
  
  // Remove Token (Logout)
  export const removeToken = () => {
    localStorage.removeItem("token");
  };
  
  // Check if User is Authenticated
  export const isAuthenticated = () => {
    return !!getToken(); // Returns true if token exists, else false
  };
  