import React, { useContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Pages/Loading";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="flex flex-col min-h-screen bg-primary body-content">
        <Navbar />
        {/* Main content */}
        <main className="flex-grow container mx-auto px-4 py-6">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
