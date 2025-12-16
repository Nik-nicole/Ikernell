import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Projects from "./components/Projects";
import Workers from "./components/Workers";
import Users from "./components/Users";
import Settings from "./pages/Settings";
import RoleBasedDashboard from "./components/RoleBasedDashboard";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  return user ? children : <Navigate to="/login" />;
};

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Login />} />
          <Route path="/demo" element={<Landing />} />
          
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Layout>
                <RoleBasedDashboard />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/projects" element={
            <ProtectedRoute>
              <Layout>
                <Projects />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/workers" element={
            <ProtectedRoute>
              <Layout>
                <Workers />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/users" element={
            <ProtectedRoute>
              <Layout>
                <Users />
              </Layout>
            </ProtectedRoute>
          } />
          
          <Route path="/settings" element={
            <ProtectedRoute>
              <Layout>
                <Settings />
              </Layout>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}