import React from "react";
import { useRef } from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
function Signup() {
    const navigate = useNavigate()
    const formRef = useRef()
    const { setUsername , setEmail , setPassword  } = useUser()
  const handleForm = (e) => {
    e.preventDefault();
    if(formRef.current){
      setTimeout(()=>navigate("login"),2000)
      
    }
    formRef.current.reset();
  };
  return (
    <div className=" bg-gradient-to-tr from-purple-800 to-blue-800 h-2/3 w-3/4  md:h-2/4 md:w-1/3  rounded-2xl p-5 flex flex-col gap-5 items-center justify-around">
      <h1 className="  text-2xl">SignUp</h1>
      <form
        ref={formRef}
        onSubmit={handleForm}
        className=" bg-slate-800 h-4/5 w-3/4  md:mt-0 md:h-3/4 md:w-3/4 p-5 rounded-2xl flex flex-col items-center justify-around gap-5 shadow-white border-white  hover:shadow-lg hover:-translate-y-3 hover:border-2  duration-150  "
      >
        <label htmlFor="username">
          Username:
          <input
            required
            pattern="[A-Za-z]+"
            title="Only letters allowed"
            onChange={(e)=> setUsername(e.target.value)}
            name="username"
            type="text"
            id="username"
            className=" bg-white w-full border-0 ml-1 rounded-2xl pl-3 text-slate-800 font-bold"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            onChange={(e)=> setEmail(e.target.value)}
            required
            name="email"
            type="email"
            id="email"
            className=" bg-white w-full border-0 ml-1 rounded-2xl pl-3 text-slate-800 font-bold"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            onChange={(e)=> setPassword(e.target.value)}
            required
            minLength={8}
            name="password"
            type="password"
            id="password"
            className=" bg-white w-full border-0 ml-1 rounded-2xl pl-3 text-slate-800 font-bold"
          />
        </label>
        <button
          type="submit"
          className=" mt-15 md:mt-0 bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent text-xl font-bold animate-click"
        >
          SignUp
        </button>
      </form>

    </div>
  );
}

export default Signup;
