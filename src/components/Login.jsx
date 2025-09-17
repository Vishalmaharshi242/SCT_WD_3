import React, { useState } from "react";
import { useRef } from "react";
import { useUser } from "../context/UserContext";
function Login() {
  const [user , setUser] = useState("")
  const [pass , setPass] = useState("")
  const { auth } = useUser()
  const formRef = useRef({});
  const handleSubmit = (e) => {
    e.preventDefault();
    if(formRef.current){
      formRef.current.reset();
    }
  };
  return (
    <>
      <div className=" bg-gradient-to-tr from-purple-800 to-blue-800 h-2/3 w-3/4  md:h-2/4 md:w-1/3  rounded-2xl p-5 flex flex-col gap-5  items-center justify-around">
        <h1 className="mt-5 text-center text-2xl">login</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className=" bg-slate-800 h-4/5 w-3/4  md:mt-0 md:h-2/3 md:w-3/4 p-5 rounded-2xl flex flex-col items-center justify-center gap-10 shadow-white border-white  hover:shadow-lg hover:-translate-y-3 hover:border-2  duration-150  "
        >
          <label htmlFor="username">
            username:
            <input
              onChange={(e)=>setUser(e.target.value)}
              required
              pattern="[A-Za-z]+"
              title="Only letters allowed"
              type="text"
              id="username"
              name="username"
              className=" bg-white w-full border-0 ml-1 rounded-2xl pl-3 text-slate-800 font-bold"
            />
          </label>
          <label htmlFor="password">
            password:
            <input
              onChange={(e)=>setPass(e.target.value)}
              required
              minLength={8}
              type="password"
              id="password"
              name="password"
              className=" bg-white w-full border-0 ml-1 rounded-2xl pl-3 text-slate-800 font-bold"
            />
          </label>
          <button
            type="submit"
            className=" mt-15 md:mt-0 bg-gradient-to-r from-purple-800 to-blue-800 bg-clip-text text-transparent text-xl font-bold animate-click"
            onClick={()=> auth(user , pass)}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
