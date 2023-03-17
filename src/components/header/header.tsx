import React, { useState } from 'react';
import './Header.css';
import Naranja from '../../img/naranjacortada.png';
import fruti from '../../img/fruti2.png';
import { Link } from 'react-router-dom';
import 'animate.css';
import { FaBars } from 'react-icons/fa';
import { Button } from '@mui/material';



function Header() {
    const [showNaranja, setShowNaranja] = useState(true);
    const [showFrutilla, setShowFrutilla] = useState(false);
    const [activeLink, setActiveLink] = useState('Home');
    const [showSidebar, setShowSidebar] = useState(false);
    const handleHomeClick = () => {
        setShowNaranja(true);
        setShowFrutilla(false);
        setActiveLink('Home');
    };

    const handleNaranjaClick = () => {
        setShowNaranja(true);
        setShowFrutilla(false);
        setActiveLink('Naranja');
    };

    const handleFrutillaClick = () => {
        setShowNaranja(false);
        setShowFrutilla(true);
        setActiveLink('Frutilla');
    };

    const handleVarationsClick = () => {
        setShowNaranja(false);
        setShowFrutilla(false);
        setActiveLink('Varations');
    };

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <div>
            <header className="header animate__animated animate__fadeInDown">
                <h1 className="animated-title">
                    Fruit <span className="juices">Juices</span>
                </h1>
                <nav className="Nav">
                    <ul className="Ul">
                        <Link to={'/'} className="link" onClick={handleHomeClick}>
                            <li className={activeLink === 'Home' ? 'hrefs active' : 'hrefs'}>Home</li>
                        </Link>
                        <Link to={'/varations'} className="link" onClick={handleVarationsClick}>
                            <li className={activeLink === 'Varations' ? 'hrefs active' : 'hrefs'}>Varations</li>
                        </Link>
                        <Link to={'/frutilla'} className="link" onClick={handleFrutillaClick}>
                            <li className={activeLink === 'Frutilla' ? 'hrefs active' : 'hrefs'}>Frutilla</li>
                        </Link>
                        <Link to={'/naranja'} className="link" onClick={handleNaranjaClick}>
                            <li className={activeLink === 'Naranja' ? 'hrefs active' : 'hrefs'}>Naranja</li>
                        </Link>
                    </ul>
                </nav>
                <div className='iconBur' >
                    <FaBars />
                </div>
                {showNaranja ? (
                    <div className="contenedorNaranja">
                        <img src={Naranja} alt="Jugo de naranja natural" className='imgJugo' />
                    </div>
                ) : null}
                {showFrutilla ? (
                    <img src={fruti} alt="Jugo de frutilla natural" className="img2Frutiila" />
                ) : null}
            </header>
        </div>
    );
}

export default Header;
