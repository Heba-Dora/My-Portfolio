import React from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'

function FirstPage() {
    return (
        <div className="nav" style={{backgroundImage:"url(https://s3.envato.com/files/246473278/preview.jpg)", backgroundSize:"cover" , width:'100%', height:"100vh"}}>
            <div className="navbar">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>

                

            </div>
           
        </div>
    )
}

export default FirstPage
