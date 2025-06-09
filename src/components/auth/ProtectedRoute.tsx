
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

const ProtectedRoute = ({ children, requireAdmin = false }: ProtectedRouteProps) => {
  const { user, isAdmin, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('ProtectedRoute: Auth state:', { user: !!user, isAdmin, loading, requireAdmin });
    
    if (!loading) {
      if (!user) {
        console.log('ProtectedRoute: No user, redirecting to auth');
        navigate("/auth");
      } else if (requireAdmin && !isAdmin) {
        console.log('ProtectedRoute: Admin required but user is not admin, redirecting to home');
        navigate("/");
      }
    }
  }, [user, isAdmin, loading, navigate, requireAdmin]);

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
  
  if (requireAdmin && !isAdmin) {
    console.log('ProtectedRoute: Rendering null - admin required but user is not admin');
    return null;
  }

  console.log('ProtectedRoute: Rendering children');
  return <>{children}</>;
};

export default ProtectedRoute;
