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
        <header className="header" style={{padding : '10px'}}>
            <div className="contenedor-header">
                <div className="logo">
                    <MdOutlineMenu style={{color: 'black', fontSize: '30px'}} className='menu' onClick={toggleMenu}/>
                    <div className="section_titulo_blog_vercel" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src="/favicon.ico" alt="" style={{width: '36px' , height : 'auto' , display: 'flex' , alignItems: 'center', marginRight: '5px'}}/>
                        <h1> VERCEL </h1> 
                    </div>
                    <FaGithub style={{color: 'black', fontSize: '30px'}} className="Github_header_responsive" onClick={github_Vercel}/>
                </div>
                <div className="Redes">
                    <p style={{fontSize: '16px'}}>Visita nuestras redes</p>
                    <div className="iconos-redes" style={{gap: '25px'}}>
                        <FaGithub style={{color: 'black', fontSize: '30px'}} className="github" onClick={github_Vercel}/>
                        <FaTwitter style={{color: 'cyan', fontSize: '30px'}} className="twitter" onClick={twitter_Vercel}/>
                        <FaYoutube style={{color: 'red', fontSize: '30px'}} className="youtube" onClick={youtube_Vercel}/>
                    </div>
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
                    <div className="Redes-nav">
                    <p style={{fontSize: '16px'}}>Visita nuestras redes</p>
                    <div className="iconos-redes-nav" style={{gap: '25px'}}>
                        <FaGithub style={{color: 'black', fontSize: '30px'}} className="github" onClick={github_Vercel}/>
                        <FaTwitter style={{color: 'cyan', fontSize: '30px'}} className="twitter" onClick={twitter_Vercel}/>
                        <FaYoutube style={{color: 'red', fontSize: '30px'}} className="youtube" onClick={youtube_Vercel}/>
                    </div>
                </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;