import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton,] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        setClick(!click);
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo">
                        TRVL<i className="fab fa typo-3" />
                    </Link>
                    <div className='menu=icon' onclick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onclick={closeMobileMenu}>
                                Home
                            </Link>

                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onclick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onclick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onclick={closeMobileMenu}>
                                sign up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonstyle='btn---outline'></Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
