
import { useAuth } from "./AuthContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AuthButton = () => {
  const { user, signOut } = useAuth();
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
      {user && (
        <Button
          onClick={handleAdminPanel}
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Admin Panel
        </Button>
      )}
      <Button
        onClick={handleAuth}
        variant="outline"
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      >
        {user ? "Abmelden" : "Anmelden"}
      </Button>
    </div>
  );
};

export default AuthButton;
