import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Assuming react-router-dom for navigation
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils"; // For conditional class names
import { Home, Settings, Users, BarChart3 } from 'lucide-react'; // Example icons

// Define the structure for navigation items
interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/users", label: "User Management", icon: Users },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

const Sidebar: React.FC = () => {
  console.log("Rendering Sidebar");
  const location = useLocation();

  return (
    <aside className="hidden md:flex md:flex-col md:w-64 bg-gray-50 border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 fixed h-full">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <Link to="/" className="flex items-center gap-2">
          {/* Replace with your application logo or name */}
          <img src="/placeholder.svg" alt="Logo" className="h-8 w-auto" />
          <h1 className="text-xl font-semibold text-gray-800 dark:text-white">AppDashboard</h1>
        </Link>
      </div>
      <ScrollArea className="flex-1">
        <nav className="p-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                location.pathname === item.href
                  ? "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700/50 dark:hover:text-white"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
        {/* Placeholder for footer content like user profile quick access or logout */}
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">© {new Date().getFullYear()} Your App</p>
      </div>
    </aside>
  );
}

export default Sidebar;