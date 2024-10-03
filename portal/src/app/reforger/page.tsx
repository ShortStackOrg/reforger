"use client"
import Button from "../../components/Button"



const ReforgerMainPage = () => {
  const handleButtonClick = () => {
    alert("typeshit");
  };

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4 text-center">Resume Reforger</h1>
        <p className="text-lg text-center mb-8">This is the main page</p>
        <Button text="Build Resume" onClick={handleButtonClick} />
      </div>
    );
  };
  
  export default ReforgerMainPage;