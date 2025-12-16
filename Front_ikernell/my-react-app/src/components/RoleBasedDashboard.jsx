import { useAuth } from '../context/AuthContext';
import SuperAdminDashboard from '../pages/SuperAdminDashboard';
import CompanyAdminDashboard from '../pages/CompanyAdminDashboard';
import UserDashboard from '../pages/UserDashboard';

const RoleBasedDashboard = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Loading...</div>;
  }

  switch (user.role) {
    case 'SUPER_ADMIN':
      return <SuperAdminDashboard />;
    case 'COMPANY_ADMIN':
      return <CompanyAdminDashboard />;
    case 'PROJECT_MANAGER':
      return <CompanyAdminDashboard />;
    case 'USER':
      return <UserDashboard />;
    default:
      return <UserDashboard />;
  }
};

export default RoleBasedDashboard;
