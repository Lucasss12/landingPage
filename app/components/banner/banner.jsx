import React from "react";
import { Spotlight } from "../ui/Spotlight";

const Banner = () => {
  return (
    <div className="md:h-[45rem] 2xl:h-[50rem] w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02]">      
      <Spotlight
        className="-top-40 left-0 2xl:left-[34rem] md:left-[16rem] md:-top-10"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Votre idée + Notre expertise <br/> La recette du succès.
        </h1>
        <div className="flex justify-center mt-6">
          <button className="group relative h-12 inline-flex items-center justify-center overflow-hidden rounded-md p-2 font-semibold bg-gradient-to-r from-violet-500 to-blue-500 px-4  text-white hover:from-violet-600 hover:to-blue-600">
            <span className="text-xl">Nous contacter</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;