
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('ProtectedRoute: Auth state:', { user: !!user, loading });
    
    if (!loading) {
      if (!user) {
        console.log('ProtectedRoute: No user, redirecting to auth');
        navigate("/auth");
      }
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-[#002454]">Wird geladen...</div>
      </div>
    );
  }

  if (!user) {
    console.log('ProtectedRoute: Rendering null - no user');
    return null;
  }

  console.log('ProtectedRoute: Rendering children');
  return <>{children}</>;
};

export default ProtectedRoute;
