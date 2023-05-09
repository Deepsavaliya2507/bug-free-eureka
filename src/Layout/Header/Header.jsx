import React from 'react';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src="./img/logo.png" />
                    </div>
                    <li><Link to="/Secondpage">Second-page</Link></li>
                    <li><Link to="/tutorials">Tutorials</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to='/student'>Student</Link></li>
                </ul>
            </nav>
        </div>
    )
}