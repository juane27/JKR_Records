import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import "./NavBarStyles.css";
import logo from '../../assets/logo-JKR1.png';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const [artistsHovered, setArtistsHovered] = useState(false);
    const location = useLocation();

    const handleClick = () => {
        setClicked(!clicked);
    };

    const handleArtistsHover = () => {
        setArtistsHovered(true);
    };

    const handleArtistsLeave = () => {
        setArtistsHovered(false);
    };
    const isRosterActive = location.pathname.includes('/artists') || location.pathname.includes('/producers');


    return (
        <nav className='nav-main'>
            <a href='/'><img src={logo} className='logo-navbar' alt="jkr-records"></img></a>
            <div >
                <ul id="navbar" className={clicked ? "navbar active" : "navbar"}>
                    <li><a href='/' className={location.pathname === '/' ? 'active' : ''}>Home</a></li>
                    <li><a href='/about-us' className={location.pathname === '/about-us' ? 'active' : ''}>About us</a></li>
                    <li
                        onMouseEnter={handleArtistsHover}
                        onMouseLeave={handleArtistsLeave}
                    >
                        <a className={isRosterActive ? 'hover-icon active' : 'hover-icon'}>Roster  <i className="fa-solid fa-chevron-up"></i></a>
                        <ul
                            className={artistsHovered ? 'dropdown active' : 'dropdown'}
                            onMouseEnter={handleArtistsHover}
                            onMouseLeave={handleArtistsLeave}
                        >
                            <li>
                                <a href='/artists' className={location.pathname.includes('/artists') ? 'active' : ''}>Artists</a>
                            </li>
                            <li>
                                <a href='/producers' className={location.pathname.includes('/producers') ? 'active' : ''}>Producers</a>
                            </li>
                        </ul>
                    </li>
                    {/* <li><a href='/giveaway' className={location.pathname === '/giveaway' ? 'active' : ''}>Sorteo</a></li> */}
                    <li><a href='/contact-us' className={location.pathname === '/contact-us' ? 'active' : ''}>Contact us</a></li>
                </ul>
            </div>
            <div id="mobile" onClick={handleClick}>
                <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
    );
};

export default Navbar;