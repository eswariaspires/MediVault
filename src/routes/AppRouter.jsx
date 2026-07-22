import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Home() {
  return <h1 style={{ fontSize: '40px' }}>🏠 Home</h1>;
}

function Login() {
  return <h1 style={{ fontSize: '40px' }}>🔐 Login</h1>;
}

function Dashboard() {
  return <h1 style={{ fontSize: '40px' }}>📊 Dashboard</h1>;
}

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
