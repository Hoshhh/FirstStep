import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center md:py-8 py-24">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-2 gap-8">
        <div className="col-span-1 flex flex-col items-center justify-center py-4">
            <h2 className="py-1 text-center leading-snug">A Platform For <span className="text-sky-700">Junior Developers</span> And A Tool For Companies To Find Talent</h2>
            <p className=" text-slate-700 text-center">
                Bringing eyes to talented new developers and finding a good fit for both party’s.
            </p>
            <Link href="/games">
                <button className="mt-6 py-2 px-12 text-sm uppercase rounded-full text-slate-100 bg-sky-700">Get Started</button>
            </Link>
        </div>
        <div className="flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl shadow-xl shadow-gray-400"
            src="/assets/devportal.png"
            alt="/"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;