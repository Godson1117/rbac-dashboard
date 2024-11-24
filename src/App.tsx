import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Role-Based Access Control (RBAC)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserManagement />
        <RoleManagement />
      </div>
    </div>
  );
};

export default App;
