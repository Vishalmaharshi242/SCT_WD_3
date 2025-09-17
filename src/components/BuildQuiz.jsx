import React, { useEffect, useState } from "react";
import cate from "../assets/cate.json";
import Quiz from "./Quiz";
function BuildQuiz() {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState({});
  const [data , setData] = useState({})
  const [isQuizReady , setIsQuizReady] = useState(false)
  const handleSubmit = (e) => {
        e.preventDefault()
        alert("Building")
    }
  const handleClick = async () => {
      console.log("starting")
      try {
        const response = await  fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
        const data = await response.json()
        if(data){
        setData(data)
        setIsQuizReady(true)
        }
      } catch (error) {
        console.log("Failed To Create Quiz!!")
      }
  }
  return (
    <main className=" h-full w-full">
      {!isQuizReady && <div className=" bg-gradient-to-tl from-purple-800 to-blue-800 rounded-2xl h-96 w-2/5 mt-10 ml-auto mr-auto p-7 flex flex-col items-center justify-around font-semibold">
        <h1 className=" text-2xl font-bold">Build Quiz</h1>
        <form onSubmit={handleSubmit}  className=" h-3/5 w-full flex flex-col gap-5 items-center ">
          <label htmlFor="category" className=" text-center">
            Cetagory:
            <select
              onChange={(e)=>setCategory(e.target.value)}
              name="category"
              id="cateory"
              value={category}
              className=" bg-slate-800 w-full p-3 m-1 rounded-xl text-center"
            >
              <option value="">Any Category</option>
              {cate.map((item) => (
                <option value={item.id}  key={item.id}>{item.name}</option>
              ))}
            </select>
          </label>
          <label htmlFor="difficulty" className=" text-center">
            Difficulty:
            <select
              onChange={(e)=>setDifficulty(e.target.value)}
              name="difficulty"
              id="difficulty"
              value={difficulty}
              className=" bg-slate-800 w-full p-3 m-1 rounded-xl text-center"
            >
              <option value="">Any Difficulty</option>
              <option value="easy" key={1}>
                Easy
              </option>
              <option value="medium" key={2}>
                Medium
              </option>
              <option value="hard" key={3}>
                Hard
              </option>
            </select>
          </label>
          <button
            type="submit"
            className=" bg-slate-800 p-2 rounded-2xl animate-click"
            onClick={handleClick}
          >
            Build
          </button>
        </form>
      </div>}
      { isQuizReady &&
        <Quiz data={data} />
      }
    </main>
  );
}

export default BuildQuiz;
