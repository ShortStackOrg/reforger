"use client"
import HeroCard from "@/components/Home/HeroCard";
import Profile from "../../components/Profile"

const ReforgerMainPage = () => {

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <HeroCard />
        <Profile />
      </div>
    );
  };
  
  export default ReforgerMainPage;