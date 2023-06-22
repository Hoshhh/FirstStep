/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center md:py-8 py-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-1 flex flex-col items-center justify-center py-4">
            <h2 className="py-1 text-center leading-snug">Empowering <span className="text-sky-700">Junior Developers</span>, Empowering Your <span className="text-sky-700">Business</span></h2>
            <p className="text-slate-700 text-center">
                A dedicated platform for junior developers to showcase their skills.
            </p>
            <p className="text-slate-700 text-center">
              Streamline your hiring process with our powerful tools.
            </p>
            <form action="" className="text-center pt-2">
              <input type="email" className="p-2 mr-4 rounded-xl outline-sky-700 text-center" placeholder="Enter your email"/>
              <button className="mt-4 py-2 px-12 text-sm uppercase rounded-full text-slate-100 bg-sky-700">Get Started</button>
            </form>
            <div className="block py-2">
              <p className="text-xs text-slate-400">
                Get notified when we're ready!
              </p>
            </div>
        </div>
        <div className="flex items-center justify-center hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl shadow-xl shadow-gray-400"
            src="/assets/recruit3.jpg"
            alt="developer profile"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;