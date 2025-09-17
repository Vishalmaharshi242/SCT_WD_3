import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function RootLayout() {
    return (
        <main className=' min-h-screen w-screen flex flex-col items-center justify-center bg-slate-800'>
            <Navbar/>
            <div className=' flex-grow'>
                <Outlet/>
            </div>
            <Footer/>
        </main>
    )
}

export default RootLayout
