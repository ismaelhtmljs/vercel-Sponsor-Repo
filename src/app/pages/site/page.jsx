'use client'
import '../css/blog-style.css';
import '../css/header.css';
import '../css/mediaqueris/pag2_mediaquieri.css';
import Header from '@/components/Header'
import LandingScreenAnimation from '@/components/LandingScreenAnimation'

export default function Blog() {
    return (
        <div className="blog-page">
            <LandingScreenAnimation />
            <Header />
            <main>
                <div className="contenedor-main">
                    <div className="contenedor-contenido">
                        <div className="contenedor_txt_section_2">
                            <div className="titulo_vercel_1_1">
                                <h1 className="titulo_vercel_1_1" style={{fontSize: '155px'}} translate='no'>Vercel</h1>
                            </div>
                            <div className="titulo_vercel_2_1">
                                <h1 style={{fontSize: '155px'}} translate='no'>Free</h1>
                            </div>
                            <div className="titulo_vercel_3_1">
                                <h1 style={{fontSize: '155px'}} translate='no'>Hosting</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}