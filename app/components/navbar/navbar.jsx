import Link from "next/link";
import React from "react";

export default function navbar() {
  return (
    <nav className="py-3 shadow backdrop-blur-md sticky top-0 z-50 ">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="font-bold text-3xl">
          <h1>Lulu prod</h1>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex space-x-1 font-semibold text-lg">
            <Link href="#" className="hover:bg-gray-700 hover:bg-opacity-30 p-2 rounded-lg">
              Articles
            </Link>
            <Link href="#" className="hover:bg-gray-700 hover:bg-opacity-30 p-2 rounded-lg">
              Expertises
            </Link>
            <Link href="#" className="hover:bg-gray-700 hover:bg-opacity-30 p-2 rounded-lg">
              Avis
            </Link>
          </div>
          <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md p-2 font-semibold bg-gradient-to-r from-violet-500 to-blue-500 px-4  text-white hover:from-violet-600 hover:to-blue-600">
            <span>Nous contacter</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}