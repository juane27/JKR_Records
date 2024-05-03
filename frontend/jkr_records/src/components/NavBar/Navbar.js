import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import "./NavBarStyles.css";
import logo from '../../assets/logo-JKR1.png';
import {logout, reset, getUserInfo} from '../../features/authSlice'
import  {useDispatch, useSelector} from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom';



const Navbar = () => {

    //Obtener informacion de usuario:
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const { userInfo, isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUserInfo()); // Esta acción debería cargar la información del usuario desde la API
    }, [dispatch]);

    console.log('isAuthenticated:', isAuthenticated);

    const [clicked, setClicked] = useState(false);
    const [artistsHovered, setArtistsHovered] = useState(false);
    const [sorteoHovered, setSorteoHovered] = useState(false);
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


    //
    const handleLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate("/")
      }

    const handleSorteoHover = () => {
        setSorteoHovered(true);
    };

    const handleSorteoLeave = () => {
        setSorteoHovered(false);
    };
    const isRosterActive = location.pathname.includes('/artists') || location.pathname.includes('/producers');

    const isUserActive = location.pathname.includes('/giveaway') || location.pathname.includes('/logout');



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
                    {!isAuthenticated && <li className='li-login'><a href='/login' className={`login-btn ${location.pathname === '/login' ? 'active' : ''}`}>
     Login
</a></li>}
                    {!isAuthenticated && <li className='li-login'><a href='/register' className={`login-btn ${location.pathname === '/register' ? 'active' : ''}`}>Register</a></li>}


                    
                    {isAuthenticated && (
                        <li
                            onMouseEnter={handleSorteoHover}
                            onMouseLeave={handleSorteoLeave}
                        >
                            <a className={isUserActive ? 'hover-icon active' : 'hover-icon'}>{userInfo.first_name}  <i className="fa-solid fa-chevron-up"></i></a>
                            <ul
                                className={sorteoHovered ? 'dropdown active' : 'dropdown'}
                                onMouseEnter={handleSorteoHover}
                                onMouseLeave={handleSorteoLeave}
                            >
                                <li>
                                    <a href='/giveaway' className={location.pathname.includes('/giveaway') ? 'active' : ''}>Sorteo</a>
                                </li>
                                <li onClick={handleLogout}>
                                    <a href='' className={location.pathname.includes('/logout') ? 'active' : ''}>Logout</a>
                                </li>
                            </ul>
                        </li>
                    )}




                </ul>
            </div>
            <div id="mobile" onClick={handleClick}>
                <i id="bar" className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
        </nav>
    );
};

export default Navbar;