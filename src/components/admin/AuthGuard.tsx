
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Cek status autentikasi dari localStorage
    const checkAuthentication = async () => {
      try {
        const authStatus = localStorage.getItem('lentera_auth');
        if (!authStatus) {
          navigate('/login');
        } else {
          setIsAuthenticated(true);
        }
      } finally {
        setIsLoading(false);
      }
    };
    
    checkAuthentication();
  }, [navigate]);
  
  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <div className="text-center">
          <p>Memuat...</p>
        </div>
      </div>
    );
  }
  
  return isAuthenticated ? <>{children}</> : null;
};

export default AuthGuard;
