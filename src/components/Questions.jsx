import React from 'react'
import { useState } from 'react';


const decodeHtmlEntities = (str) => {
        const textarea = document.createElement("textarea")
        textarea.innerHTML = str;
        return textarea.value;
    }
const suffle = (arr) => {
    return [...arr].sort(() => Math.random() - 0.5 )
}

function Questions(props) {
    const [selected , setSelected] = useState([])
    const handleClick = (ans)=> {
        if(!selected.includes(ans)){
            setSelected([...selected , ans])
        }
    }
    const que = decodeHtmlEntities(props.question)
    const incorrectAns = props.incorrectAns
    const correctAns = decodeHtmlEntities(props.correctAns)
    const options = [...incorrectAns , correctAns]
    const answer = suffle(options)
    return (
        <div className=' p-5 w-full  sm:w-2/3 text-xl bg-white mt-5 mb-5 shadow-2xl border-black border-6  ml-auto mr-auto rounded-2xl  flex flex-col gap-3  items-center justify-center'>
            <h3 className=' text-start'>{que}</h3>
            <ol className=' list-decimal p-3 w-full'>
                {answer.map((ans,index)=>{
                    return <li key={ans}><button onClick={()=> handleClick(ans)}  className={`${selected.includes(ans) ? "bg-amber-300" : ""} ${props.show && ans === correctAns ? "bg-green-400" : ""}  `}>{ans}</button></li>
                })}
            </ol>
            
        </div>
    )
}

export default Questions
