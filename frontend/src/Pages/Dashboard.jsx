import React from "react";
import WelcomeSection from "../components/WelcomeSection";
import Reservation from "../components/Reservation";
import './Dashboard.css';
import Footer from "../components/Footer";
const Dashboard = () => {
  return (
    <>
    <div className="dashboard-container">
    <WelcomeSection />
    <Reservation></Reservation>
    <Footer></Footer>
    </div>
    
    </>
  );
};

export default Dashboard;