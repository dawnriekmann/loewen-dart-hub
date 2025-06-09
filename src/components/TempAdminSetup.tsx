
import { useAuth } from "./auth/AuthContext";
import AuthButton from "./auth/AuthButton";

const TempAdminSetup = () => {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <AuthButton />
    </div>
  );
};

export default TempAdminSetup;
