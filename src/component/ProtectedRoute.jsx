// import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase";

// const ProtectedRoute = ({ children }) => {
//   const [loading, setLoading] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       // Check if user is authenticated AND not anonymous
//       if (user && !user.isAnonymous) {
//         setIsAuthenticated(true);
//       } else {
//         setIsAuthenticated(false);
//       }
//       setLoading(false);
//     });

//     return () => unsubscribe();
//   }, []);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-xl">Loading...</div>
//       </div>
//     );
//   }

//   return isAuthenticated ? children : <Navigate to="/admin/login" />;
// };

// export default ProtectedRoute;


import React from 'react';

const ProtectedRoute = ({ children }) => {
  // Temporary: Always allow access
  return children;
};

export default ProtectedRoute;