import React from 'react'
import '../Medium.css'
import { Link, NavLink } from 'react-router-dom'
const Main = () => {
    return (
        <div>
            <nav>
                <ul className='main-nav-ul'>
                    <li className='main-nav-li'><NavLink className={({ isActive }) => `main-nav-link ${isActive ? 'isActive' : ''}`} to="/home">Home</NavLink></li>
                    <li className='main-nav-li'><NavLink className={({ isActive }) => `main-nav-link ${isActive ? 'isActive' : ''}`} to="/about">About</NavLink></li>
                    <li className='main-nav-li'><NavLink className={({ isActive }) => `main-nav-link ${isActive ? 'isActive' : ''}`} to="/contact">Contact</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

export default Main