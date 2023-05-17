/* eslint-disable react/no-unescaped-entities */
"use client"
import Image from "next/image";
import React, { useState } from "react";

const DevTab = () => {
    return (
        <div id="developer" className="w-full md:grid grid-cols-2 gap-4">
            <div>
                <h3 className="tracking-widest uppercase text-slate-800">Features</h3>
                <ul className="list-disc">
                    <li className="py-2">List the job position you're interested in (Frontend Web dev, IOS dev, etc.)</li>
                    <li className="py-2">Link your socials and portfolio to showcase to employers what you've been working on.</li>
                    <li className="py-2">Show off a list of all the languages/technologies you work with.</li>
                    <li className="py-2">List if you're looking for part time or full time positions, and if you're looking to work remotely, on-site, or both.</li>
                    <li className="py-2">Upload your resume/cv so potential employers can easily view them.</li>
                    <li className="py-2">Make posts about what you've been working on for both you and potential employers to see.</li>
                </ul>
            </div>
            <div className="flex flex-col md:items-center md:justify-center md:text-center">
                <h3 className="tracking-widest uppercase text-slate-800 md:mt-0 mt-8">How it Works</h3>
                <p className="py-2">
                    The more active you are on github and posting, the more likely you are to be seen by 
                    recruiters!
                </p>
                <p className="py-2">
                    As a developer, you will only be able to see and update your own profile. 
                    Just focus on your skills as a developer and keep your profile updated! 
                </p>
                <Image src="/assets/code.png" width={400} height={400} alt="/" className="mt-4 rounded-xl shadow-xl shadow-gray-400"/>
            </div>
        </div>
    )
}

const RecruitTab = () => {
    return (
        <div className="w-full grid grid-cols-2 gap-0">
            This is the recruiter tab
        </div>
    )
}

const Developers = () => {
    const [dev, setDev] = useState(true);

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-4 md:py-8">
        <p className="text-xl tracking-widest uppercase text-slate-800">
          Solutions for both Developers and Recruiters
        </p>
        <div className="grid grid-cols-2 gap-0 justify-center">
            <div className={dev ? "w-full border-2 border-r-0 border-b-0 border-slate-200" : "w-full border-2 border-r-0 border-slate-200"}>
                <button onClick={() => setDev(true)} className={dev ? "w-full border-t-4 border-sky-700" : "w-full"}>Developers</button>
            </div>
            <div className={dev ? "w-full border-2 border-slate-200" : "w-full border-2 border-b-0 border-slate-200"}>
                <button onClick={() => setDev(false)} className={dev ? "w-full" : "w-full border-t-4 border-sky-700"}>Recruiters</button>
            </div>
        </div>
        <div className="flex flex-col mt-16">
            {
                dev ? <DevTab /> : <RecruitTab />
            }
        </div>
      </div>
    </div>
  );
};

export default Developers;