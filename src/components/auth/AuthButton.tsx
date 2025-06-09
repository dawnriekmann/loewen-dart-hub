
import { useAuth } from "./AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AuthButton = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuth = async () => {
    if (user) {
      await signOut();
    } else {
      navigate("/auth");
    }
  };

  const handleAdminPanel = () => {
    navigate("/admin");
  };

  return (
    <div className="flex gap-2">
      {user && isAdmin && (
        <Button
          onClick={handleAdminPanel}
          className="bg-[#002454] hover:bg-[#003366] text-white"
        >
          Admin Panel
        </Button>
      )}
      <Button
        onClick={handleAuth}
        variant="outline"
        className="border-[#002454] text-[#002454] hover:bg-[#002454] hover:text-white"
      >
        {user ? "Abmelden" : "Anmelden"}
      </Button>
    </div>
  );
};

export default AuthButton;
