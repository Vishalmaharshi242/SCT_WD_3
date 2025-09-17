import React, { useState } from 'react'
import Questions from './Questions'
function Quiz(data) {
    const [show , setShow] = useState(false)
    const results = data.data.results
    const [answer , setAnswer] = useState({})
    const handleClick = (qId , opt) => {
        setAnswer((prev)=>({...prev , [qId]: opt}))
    }
    const handleShow = () => {
        setShow((prev)=> !prev )
    }
    const opt = "selected"
    return (
        <div className=' bg-slate-800 sm:bg-gradient-to-br sm:from-purple-500 sm:to-pink-500 text-black font-bold rounded-3xl   min-h-96 w-full  sm:w-2/3 mt-5 ml-auto mr-auto flex flex-col items-center justify-center'>
            <div className=' h-full w-full  flex flex-col'>
                {results.map((item,index)=>(
                    <Questions key={index} show={show}  question={item.question} incorrectAns={item.incorrect_answers} correctAns={item.correct_answer}  />
                ))}
            </div>
            <div>
                <button onClick={()=>handleShow()}  className=' bg-green-400 p-1 rounded-sm cursor-pointer shadow-lg border-black border-2  active:animate-click m-3'>Show Answer</button>
            </div>
        </div>
    )
}

export default Quiz
