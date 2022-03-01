import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header>
        <div>
            <Link to='/'>Logo</Link>
        </div>
        <div>
            <ul>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    </header>
  )
}

export default Header