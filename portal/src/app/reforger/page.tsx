"use client"
import HeroCard from "@/components/Home/HeroCard";
import Profile from "../../components/Profile"

const ReforgerMainPage = () => {

    return (
      <div className="flex flex-col min-h-screen bg-gray-100">
        <HeroCard />
        <Profile />
      </div>
    );
  };
  
  export default ReforgerMainPage;