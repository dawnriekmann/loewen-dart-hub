
import { useAuth } from "./auth/AuthContext";
import CreateAdminButton from "./auth/CreateAdminButton";
import AuthButton from "./auth/AuthButton";

const TempAdminSetup = () => {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-2">
      <AuthButton />
      {!user && <CreateAdminButton />}
    </div>
  );
};

export default TempAdminSetup;
