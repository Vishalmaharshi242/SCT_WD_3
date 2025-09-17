import React from 'react'
import Logo from '../components/Logo'
import { NavLink } from 'react-router-dom'

function Footer() {
    return (
        <div className='h-32 md:h-28 w-full dark:bg-slate-800 text-white flex justify-around items-center '>
            <Logo/>
            <ul className=' flex justify-around gap-10'>
                <NavLink><li>Github</li></NavLink>
                <NavLink><li>LinkedIn</li></NavLink>
                <NavLink><li>Instagram</li></NavLink>
            </ul>
        </div>
    )
}

export default Footer
