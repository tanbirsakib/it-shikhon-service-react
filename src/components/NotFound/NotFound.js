import React from "react";
import { useHistory } from "react-router";
import img from "../../images/404.png";

const NotFound = () => {
    let history = useHistory();
    const goTohome = () => {
    
    history.push("/home")
}
  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-red-600 p-2">
        404 .The page you are searcing is not found
      </h1>
      <img className="h-64 mx-auto" src={img} alt="" />
     <div className='mt-4 w-1/6 mx-auto'>
     <button onClick={goTohome} className="p-2 w-48 bg-blue-600 text-white rounded">
          Go To Home
      </button>
     </div>
    </div>
  );
};

export default NotFound;
