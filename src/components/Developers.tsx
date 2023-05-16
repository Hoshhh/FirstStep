/* eslint-disable react/no-unescaped-entities */
"use client"
import React, { useState } from "react";

const Developers = () => {
    const [dev, setDev] = useState(true);

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-slate-800">
          Solutions for both Developers and Recruiters
        </p>
        <div className="grid md:grid-cols-2 gap-0 justify-center">
            <div className={dev ? "w-full border-2 border-r-0 border-b-0 border-slate-200" : "w-full border-2 border-r-0 border-slate-200"}>
                <button onClick={() => setDev(true)} className={dev ? "w-full border-t-4 border-sky-700" : "w-full"}>Developers</button>
            </div>
            <div className={dev ? "w-full border-2 border-slate-200" : "w-full border-2 border-b-0 border-slate-200"}>
                <button onClick={() => setDev(false)} className={dev ? "w-full" : "w-full border-t-4 border-sky-700"}>Recruiters</button>
            </div>
        </div>
        <div className="flex mt-16">
            <h3 className="tracking-widest uppercase text-slate-800">What you do</h3>
        </div>
      </div>
    </div>
  );
};

export default Developers;