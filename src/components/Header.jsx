'use client'
import { useState } from 'react';
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { github_Vercel, twitter_Vercel, youtube_Vercel } from "@/utils/navegation-icon";
import { MdOutlineMenu } from "react-icons/md";

function Header(){
    const [isMenuActive, setIsMenuActive] = useState(false);

    const toggleMenu = () => {
        setIsMenuActive(!isMenuActive);
    };

    const closeMenu = () => {
        setIsMenuActive(false);
    };

    return(
        <header className="header">
            <div className="contenedor-header">
                <div className="logo">
                    <img src="/favicon.ico" alt="logo" style={{width: '56px'}}/> 
                </div>
                <div className="Redes">
                    <p style={{fontSize: '16px'}}>Visita nuestras redes</p>
                    <div className="iconos-redes" style={{gap: '25px'}}>
                        <FaGithub style={{color: 'black', fontSize: '30px'}} className="github" onClick={github_Vercel}/>
                        <FaTwitter style={{color: 'cyan', fontSize: '30px'}} className="twitter" onClick={twitter_Vercel}/>
                        <FaYoutube style={{color: 'red', fontSize: '30px'}} className="youtube" onClick={youtube_Vercel}/>
                    </div>
                </div>
                <div className="menu-responsive">
                    <span className='Span_header_menu'>Menu</span>
                    <MdOutlineMenu 
                        style={{color: 'black', fontSize: '30px'}} 
                        className='menu'
                        onClick={toggleMenu}
                    />
                </div>
                <nav className={`nav${isMenuActive ? '-active' : ''}`}>
                    <p className='close-menu' onClick={closeMenu}>X</p>
                    <hr className='hr-responsive-header'/>
                    <ul>
                        <li><a href="/pages/site">VERCEL</a></li>
                        <li><a href="/pages/site/what-is-vercel">QUE ES VERCEL</a></li>
                        <li><a href="/pages/site/sobre-vercel">SOBRE VERCEL</a></li>
                        <li><a href="/pages/site/try-vercel">PROBAR VERCEL</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;