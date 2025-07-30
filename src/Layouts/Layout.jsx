import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Loader from "../Components/Loader/Loader"; 

export default function Layout() {
  const navigation = useNavigation();

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        {navigation.state === "loading" ? <Loader /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
