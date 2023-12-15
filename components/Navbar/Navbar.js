'use client'
import React from 'react';
import { Link } from 'react-router-dom';
import UserDetails from './UserDetails';
import UserMenu from './UserMenu';
import LanguageSwitch from './LanguageSwitch';
import DarkModeSwitch from './DarkModeSwitch';


const Navbar = () => {
    return (
        <div>
            <nav>
                {/* <Link to="/dashboard">Dashboard</Link> */}
                <a>Dashboard</a>
                <p>Lupka</p>
                {/* <img src={searchLogo} alt="search logo" /> */}
                <UserDetails />
                <UserMenu />
                <LanguageSwitch/>
                <DarkModeSwitch/>
            </nav>
        </div>
    );
};

export default Navbar;