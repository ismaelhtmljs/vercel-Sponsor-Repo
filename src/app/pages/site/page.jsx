'use client'
import '../css/blog-style.css';
import '../css/header.css'
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
                            <h1 className='titulo_vercel_2_1'style={{fontSize: '155px'}}>Vercel</h1>
                            <div className="titulo_vercel_2_1">
                                <h1 style={{fontSize: '155px'}}>Hosting</h1>
                            </div>
                            <div className="titulo_vercel_3_1">
                                <h1 style={{fontSize: '155px'}}>Gratuito</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}