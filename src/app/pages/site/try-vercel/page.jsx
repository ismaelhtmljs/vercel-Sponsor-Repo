'use client'
import '../../css/try-vercel/try-vercel.css'
import Header from '@/components/Header';
import '../../css/header.css'
import ScreenTransition from '@/components/ScreenTransition';
import { TryVercelClick } from '@/utils/navegation';
import '../../css/mediaqueris/pag-sections/pag3_mediaqueiri_sector.css'

export default function TryVercel() {
    return (
        <>
            <ScreenTransition />
            <div className="try-vercel-page">
                <Header />
                <main className='main-grid-pag5'>
                    <div className="contenedor-grid-pag5">
                        <div className="video-grid-pag5">
                            <video 
                                src="/video/video-1.mp4" 
                                controls 
                                playsInline 
                                style={{
                                    width: '550px', 
                                    height: '550px', 
                                    objectFit: 'cover', 
                                    borderRadius: '24px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                                }}
                            />
                        </div>
                        <div className="texto-grid-pag5">
                            <h1 style={{fontSize: '54.7px'}}>PRUEBA VERCEL</h1>
                            <div className="description_pag5">
                                <p style={{fontSize: '16.6px'}}>Vercel es una plataforma de desarrollo que facilita el despliegue y la optimización de aplicaciones web, con un enfoque en velocidad y rendimiento. Especialmente ideal para proyectos con Next.js, permite una integración continua, despliegues automáticos y escalabilidad global a través de su red de distribución de contenido.</p>
                            </div>
                            <div className="button-grid-pag5">
                                <button type="button" onClick={TryVercelClick}>PROBAR VERCEL AHORA</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
