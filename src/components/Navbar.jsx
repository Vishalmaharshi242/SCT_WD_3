import React, { useContext, useEffect, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useUser } from "../context/UserContext";
function Navbar() {
  const navigate = useNavigate()
  const { isLoggedIn } = useUser()
  const [showNav, setShowNav] = useState(false);
  function handleClick() {
    setShowNav((prev) => !prev);
  }
  return (
    <nav className=" sticky z-50 top-0 border-b-4 border-gray-300 h-24 w-screen bg-white dark:bg-slate-800 dark:text-white flex justify-center items-center">
      <div className=" h-full w-full flex justify-around items-center">
      <Logo/>
        <div>
          <ul className=" hidden  bg-white p-2 rounded-3xl md:flex md:gap-16">
            <NavLink
              to="home"
              className={({ isActive }) => (" active:animate-click p-1 pl-3 pr-3 rounded-3xl duration-400 "+(isActive ? " hover:-translate-y-1 duration-200 bg-gradient-to-br from-purple-800 to-blue-800 shadow-black shadow-2xl" : "bg-slate-800 hover:-translate-y-1"))
              }
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="about"
              className={({ isActive }) => (" active:animate-click p-1 pl-3 pr-3 rounded-3xl duration-300 "+(isActive ? " hover:-translate-y-1 duration-200 bg-gradient-to-br from-purple-800 to-blue-800 shadow-black shadow-2xl" : "bg-slate-800 hover:-translate-y-1"))
              }
            >
              <li className="">About</li>
            </NavLink>
            <NavLink
              to="contact"
              className={({ isActive }) => (" active:animate-click p-1 pl-3 pr-3 rounded-3xl duration-300 "+(isActive ? "hover:-translate-y-1 duration-200 bg-gradient-to-br from-purple-800 to-blue-800 shadow-black shadow-2xl" : "bg-slate-800 hover:-translate-y-1"))
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <button onClick={handleClick} className=" h-[30px] w-[20px] md:hidden self-baseline-last">
            <i className="ri-expand-up-down-line"></i>
        </button>
        <div></div>
        <div className=" duration-150 bg-gradient-to-r from-pink-600 to-blue-600 hover:rounded-3xl pl-0.5 pr-0.5 md:p-1">
          <button onClick={()=>navigate('home')} className="m-1 p-0.5  bg-white text-black md:p-1.5 hover:rounded-3xl font-bold md:ext-[1.1rem]  active:animate-click hover:border-blue-800 hover:shadow-emerald-400 hover:shadow- hover:scale-105  duration-150 sm:text-[1rem] md:text-[1.1rem]">
            <span className=" h-full w-full block hover:animate-pulse">
              Get Started
            </span>
          </button>
        </div>
      </div>
      <ul
        className={
          showNav
            ? "flex absolute w-full flex-col  items-center gap-10 p-2 bg-slate-800/50 md:hidden"
            : "hidden"
        }
      >
        <li className="bg-slate-800 h-full  text-center p-5 ">Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
