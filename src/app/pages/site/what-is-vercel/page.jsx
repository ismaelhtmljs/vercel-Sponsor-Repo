'use client'
import '../../css/what-is-vercel/what-is-vercel.css'
import Header from '@/components/Header';
import '../../css/mediaqueris/pag-sections/pag1_mediaqueri_sector.css';
import '../../css/header.css'
import ScreenTransition from '@/components/ScreenTransition';

export default function WhatIsVercel() {
    return (
        <>
            <ScreenTransition />
            <div className="what-is-vercel-page">
                <Header />
                <main className='main-grid-pag3'>
                    <div className="contenedor-grid-pag3">
                    <div className="imagen-grid-pag3">
                        <img src="/images/Vercel-icon-img.jpg" alt="" style={{width: '560px', height: 'auto', objectFit: 'cover', borderRadius: '24px'}}/>
                    </div>
                    <div className="texto-grid-pag3">
                        <h1 style={{fontSize: '54.7px'}}>QUÉ ES VERCEL?</h1>
                        <div className="description">
                            <p style={{fontSize: '16.6px'}}>Vercel es una plataforma de desarrollo enfocada en la optimización de aplicaciones web, facilitando el despliegue, la colaboración y el rendimiento, especialmente para proyectos construidos con frameworks como Next.js.</p>
                        </div>
                    </div>
                    </div>
                </main>
            </div>
        </>
    );
} 