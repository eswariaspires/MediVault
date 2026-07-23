import { NavLink } from 'react-router-dom';
import { LogOut, ArrowLeftCircle } from 'lucide-react';
import { sidebarMenu } from '../../constants/sidebarMenu';
import logo from '../../assets/logo/logo.png';

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-slate-800">
        <img
          src={logo}
          alt="MediVault Logo"
          className="h-12 w-12 object-contain"
        />

        <div>
          <h1 className="text-2xl font-bold text-emerald-400">MediVault</h1>

          <p className="text-sm text-slate-400">Admin Console</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-2">
          {sidebarMenu.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-200 ${
                      isActive
                        ? 'bg-emerald-500 text-white'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`
                  }
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-800 p-4 space-y-3">
        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-slate-300 hover:bg-slate-800 transition">
          <ArrowLeftCircle size={20} />
          <span>Back to Store</span>
        </button>

        <button className="flex w-full items-center gap-3 rounded-xl bg-red-500 px-4 py-3 text-white hover:bg-red-600 transition">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
