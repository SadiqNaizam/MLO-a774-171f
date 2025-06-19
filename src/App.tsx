import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner"; // Assuming Sonner is also globally used
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import PasswordRecoveryPage from "./pages/PasswordRecoveryPage";
import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound"; // Assuming NotFound.tsx exists in src/pages/

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster /> {/* For shadcn/ui toasts */}
      <Sonner /> {/* For sonner toasts, if used */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} /> {/* Default to LoginPage */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/password-recovery" element={<PasswordRecoveryPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          {/* Add other dashboard sub-routes if Sidebar links to them, e.g. /dashboard/analytics */}
          {/* <Route path="/dashboard/analytics" element={<AnalyticsPage />} /> */}
          {/* <Route path="/dashboard/users" element={<UserManagementPage />} /> */}
          {/* <Route path="/dashboard/settings" element={<SettingsPage />} /> */}


          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} /> {/* Always Include This Line As It Is. */}
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;