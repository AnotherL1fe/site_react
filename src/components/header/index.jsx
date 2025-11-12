import React from 'react';
import logo from "../../assets/logo.png"; 
import './style.module.css'; 

const Header = () => {
    return (
        <header>
            <div className='logoBox'>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <h1>DodepCounter.com</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Главная</a></li>
                    <li><a href="/about">О Нас</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;