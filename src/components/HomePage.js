import React from "react";
import Navbar from "./Navbar";
import Analytics from "./Analytics";
import RecentActivity from "./RecentActivity";
import GraphAnalytics from "./GraphAnalytics";
import Dashboard from "./Dashboard";

const HomePage = () => {
  return (
    <div class="h-screen flex flex-1">
      <Dashboard />

      <div class="w-3/5 bg-white">
        <Navbar />
        <Analytics />
        <GraphAnalytics />
        <RecentActivity />
      </div>
    </div>
  );
};

export default HomePage;
