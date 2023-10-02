import React from "react";
import ttlimg from "./image/kmba.jpg";
function Snd() {
  return (
    <>
      <div className="w-screen h-[500px] bg-slate-400 relative">
        <img src={ttlimg} alt="" className="h-60 rounded-sm pl-[45%] pt-12" />
        <h2 className="text-4xl text-white font-semibold text-center pt-3">Inspired By Excellence & Innovation</h2>
        <p className="text-center text-purple-700 pt-5 text-lg">We Offer A Wide Range Of High Quality Of Teaching And Extra-Curricular Activities.</p>
        <div className="w-[350px] h-1 bg-fuchsia-600 ml-[40%] mt-12"></div>
      </div>
    </>
  );
}

export default Snd;
