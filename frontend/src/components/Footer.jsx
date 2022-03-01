import React from 'react'
import {Link} from 'react-router-dom'


function Footer() {
  return (
    <footer>
        <div>
            <Link to='/'>Logo</Link>
        </div>
        <div>
            <ul>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer