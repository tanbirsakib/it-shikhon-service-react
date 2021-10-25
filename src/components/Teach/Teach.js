import React from "react";
import img from "../../images/teach.png";

const images = [
  "https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg",
  "https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg",
  "https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg",
];

const Teach = () => {
  return (
    <div>
      <div className="m-4 flex items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Come Teach <br /> With Us
          </h1>
          <p>Become an instructor and change lives — including your own</p>
          <button className="p-4 bg-blue-600 text-white rounded">
            Get Started
          </button>
        </div>
        <img className="w-2/3 h-2/5" src={img} alt="" />
      </div>
      {/* reasons for teaching */}
      <h1 className="text-3xl text-center text-blue-600 m-2 font-bold">
        So many reasons to start
      </h1>
      <div className="reasons flex justify-evenly m-4">
        <div className="text-center mx-auto">
          <img className="mx-auto" src={images[0]} alt="" />
          <h2 className="">Teach Your Way</h2>
          <p className="">
            Publish the course you want, in the way you want, and always have of
            control your own content.
          </p>
        </div>
        <div className="text-center mx-auto">
          <img className="mx-auto" src={images[1]} alt="" />
          <h2>Inspires Learners</h2>
          <p>
          Teach what you know and help learners explore their interests, gain new skills, and advance their careers.
          </p>
        </div>
        <div className="text-center mx-auto">
          <img className="mx-auto" src={images[0]} alt="" />
          <h2>Get rewarded</h2>
          <p>
          Expand your professional network, build your expertise, and earn money on each paid enrollment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Teach;
