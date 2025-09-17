import React from 'react'
import { useUser } from '../context/UserContext'
import { Outlet, useNavigate } from 'react-router-dom'
import BuildQuiz from '../components/BuildQuiz'

function Home() {
    const {isLoggedIn} = useUser()
    const navigate = useNavigate()
    return (
        <>
            <div className=' min-h-screen w-screen flex flex-col items-center justify-center  bg-slate-800 text-white'>
            {!isLoggedIn ? <Outlet/> : null}
            {
                isLoggedIn &&
                <BuildQuiz/>
            }

            </div>
        </>
    )
}

export default Home
