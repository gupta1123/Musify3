import React from "react";
import LeftSidebar from "./components/LeftSidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import RightSidebar from "./components/RightSidebar"; // Import the RightSidebar
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <LeftSidebar />
      <div className="mainContentArea">
        <Header />
        <MainContent />
      </div>
      <RightSidebar /> {/* Add the RightSidebar component here */}
    </div>
  );
}

export default App;
