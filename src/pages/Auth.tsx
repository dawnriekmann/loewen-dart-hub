
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/components/auth/AuthContext";
import AuthForm from "@/components/auth/AuthForm";

const Auth = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user && !loading) {
      // Redirect authenticated users to the admin panel
      navigate("/admin");
    }
  }, [user, loading, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-[#002454]">Wird geladen...</div>
      </div>
    );
  }

  return <AuthForm />;
};

export default Auth;
