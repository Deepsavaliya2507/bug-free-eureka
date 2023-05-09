import React from 'react';
import {Link} from 'react-router-dom';

export default function Footer() {
    return (
        <div>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
                <nav class="navbar">
                    <ul class="nav-list">
                        <li>
                            <Link to="/Footerpage">Footer Page</Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </div>
    )
}