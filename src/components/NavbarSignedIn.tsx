/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { signOut } from "next-auth/react"


type User = {
  name: string;
  email: string;
  image: string;
  id: string;
  role: string;
  firstName?: string;
};

const NavbarSignedIn = ({id}: {id: string }) => {
  const [nav, setNav] = useState(false);
  const [shadow, setShow] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.APP_URL}/api/user/${id}`);
        const data = await response.json();
        setCurrentUser(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();

    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleShadow);

    return () => {
      window.removeEventListener("scroll", handleShadow);
    };
  }, [id]);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleProfileClick = () => {
    setShowDropdown(!showDropdown);
  };

  if (!currentUser) {
    return null; // Add a loading state or fallback UI while fetching user data
  }
  
  return (
    <div
      style={{ backgroundColor: "#f1f5f9" }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-32">
        <span className="text-xl">FirstStepTech</span>
        <div className="flex items-center">
          <ul style={{ color: "#1e293b" }} className="hidden md:flex">
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#developer">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Developers
              </li>
            </Link>
            <Link href="/#developer">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Recruiters
              </li>
            </Link>
          </ul>
          <div className="relative">
            <img 
                src={currentUser.image} 
                alt="Profile Picture" 
                className="ml-10 w-10 h-10 hidden md:flex rounded-full shadow-md shadow-gray-400 hover:cursor-pointer" 
                onClick={handleProfileClick} 
            />
            { showDropdown && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow">
                    <ul className="py-2">
                        <li className="px-4 py-2 hover:bg-gray-200">
                            <Link href={`/user/${currentUser.id}/about`}>Profile</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-200" onClick={() => signOut()}>
                            Sign Out
                        </li>
                    </ul>
                </div>
            )}
          </div>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-100 p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                FirstStepTech
              </Link>

              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
            </div>
          </div>
          <div className="py-y flex flex-col">
            <ul className="uppercase">
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Developers
                </li>
              </Link>
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Recruiters
                </li>
              </Link>
            </ul>
            <Link href={`/user/${currentUser.id}/about`} className="mt-12 p-2 text-sm uppercase rounded-full text-slate-100 bg-sky-700 text-center">Profile</Link>
            <button onClick={() => signOut()} className="mt-4 p-2 text-sm uppercase rounded-full text-slate-100 bg-sky-700">Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarSignedIn;