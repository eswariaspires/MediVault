import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/user/Home';
import Login from '../pages/auth/Login';
import Dashboard from '../pages/admin/Dashboard';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
