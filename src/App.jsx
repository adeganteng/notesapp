import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import { Toaster } from "./components/ui/sonner";
import FallbackLoading from "./components/layouts/FallbackLoading";

// Lazy load komponen
const HomePage = lazy(() => import("./pages/HomePage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const SignupPage = lazy(() => import("./pages/SignupPage"));

const App = () => {
  return (
    <>
      <Navbar />
      <div>
        {/* Gunakan Suspense untuk menangani loading state */}
        <Suspense fallback={<FallbackLoading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </Suspense>
      </div>
      <Toaster position="top-right" />
      <Footer />
    </>
  );
};

export default App;
