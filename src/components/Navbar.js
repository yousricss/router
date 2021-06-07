import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <ul className="menu">
                <Link to="/"><li className="menu-item">Home</li></Link>
                <Link to="/movies"><li className="menu-item">Movies</li></Link>


            </ul>

            
        </nav>
    )
}

export default Navbar
