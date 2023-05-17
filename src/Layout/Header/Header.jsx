import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <Link to="/"><img src="./img/logo.png" /></Link>
                    </div>
                    <li><Link to="/Secondpage">Second-page</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/links'>Links</Link></li>
                    <li><Link to='/course'>Course</Link></li>
                    <li><Link to='/team'>Team</Link></li>
                    <li><Link to='/support'>Support</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </nav>
        </div>
    )
}