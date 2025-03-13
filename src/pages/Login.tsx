import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Activity, LogIn } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl flex overflow-hidden">
        <div className="w-1/2 p-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
          <p className="text-lg mb-4">Continue your journey to better health with DiaFit</p>
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80"
            alt="Health Monitoring"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="w-1/2 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <Activity className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold">Login to DiaFit</h2>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-md hover:from-blue-700 hover:to-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <LogIn className="h-5 w-5" />
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-500 font-medium">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;