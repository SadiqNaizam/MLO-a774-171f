import React from 'react';
import Sidebar from '@/components/layout/Sidebar'; // Custom component path
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Bell, Search, Settings, User, LogOut, LayoutDashboard, BarChart2, Users as UsersIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout logic (e.g., clear token, reset state)
    console.log("User logged out");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar /> {/* Custom Sidebar */}
      <div className="flex-1 flex flex-col md:ml-64"> {/* Adjust ml to match sidebar width */}
        {/* Top Header */}
        <header className="sticky top-0 z-40 bg-white dark:bg-gray-800 shadow-sm border-b dark:border-gray-700">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Navigation Menu or Search */}
            <div className="flex items-center">
              <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link to="/dashboard">
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Overview
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                     <Link to="/dashboard/analytics">
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Analytics
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
                   <NavigationMenuItem>
                     <Link to="/dashboard/reports"> {/* Example new link */}
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Reports
                        </NavigationMenuLink>
                     </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
               <Button variant="ghost" size="icon" className="md:hidden mr-2"> {/* Mobile Menu Trigger - Placeholder */}
                  <LayoutDashboard className="h-5 w-5" />
               </Button>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Notifications">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-gray-800" />
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="https://via.placeholder.com/100" alt="@shadcn" />
                      <AvatarFallback>UA</AvatarFallback> {/* User Admin / User Account */}
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 space-y-6">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-white">Dashboard Overview</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <UsersIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+1,234</div>
                <p className="text-xs text-muted-foreground">+10.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
                <BarChart2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">+350</div>
                <p className="text-xs text-muted-foreground">+5.2% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Server Uptime</CardTitle>
                <Settings className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">99.9%</div>
                <p className="text-xs text-muted-foreground">Last 24 hours</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Overview of recent actions in the system.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for recent activity list or chart */}
              <p className="text-sm text-muted-foreground">No recent activity to display.</p>
              <div className="mt-4">
                <Button>View All Activity</Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;