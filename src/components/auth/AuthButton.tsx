
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

  // Return null to completely hide the component when user is authenticated
  if (user) {
    return null;
  }

  return (
    <div className="flex gap-2">
      <Button
        onClick={handleAuth}
        variant="outline"
        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      >
        Anmelden
      </Button>
    </div>
  );
};

export default AuthButton;
