
import { useAuth } from "@/components/auth/AuthContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import AdminPanel from "@/components/admin/AdminPanel";
import { Button } from "@/components/ui/button";

const Admin = () => {
  const { signOut, user } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <ProtectedRoute requireAdmin={true}>
      <div className="min-h-screen bg-slate-900">
        <div className="bg-slate-800 border-b border-slate-700 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-white font-semibold">LÖWEN DART Admin</h1>
              <p className="text-slate-300 text-sm">Angemeldet als: {user?.email}</p>
            </div>
            <Button 
              onClick={handleSignOut}
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-700"
            >
              Abmelden
            </Button>
          </div>
        </div>
        <AdminPanel />
      </div>
    </ProtectedRoute>
  );
};

export default Admin;
