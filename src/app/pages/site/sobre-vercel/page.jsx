import '../../css/sobre-vercel/sobre-vercel.css'
import Header from '@/components/Header';
import ScreenTransition from '@/components/ScreenTransition';
import '../../css/header.css'

export default function SobreVercel() {
    return (
        <>
            <ScreenTransition />
            <div className="sobre-vercel-page">
                <Header />
                <main className='main-grid-pag4'>
                    <div className="contenedor-grid-pag4">
                        <div className="imagen-grid-pag4">
                            <img src="/images/Img_vercel_prataformer.png" alt="" style={{width: '560px', height: 'auto', objectFit: 'cover', borderRadius: '24px'}}/>
                        </div>
                        <div className="texto-grid-pag4">
                            <h1 style={{fontSize: '54.7px'}}>SOBRE VERCEL</h1>
                            <div className="description_pag4">
                                <p style={{fontSize: '16.6px'}}>Vercel es una plataforma de desarrollo que facilita el despliegue y la optimización de aplicaciones web, con un enfoque en velocidad y rendimiento. Especialmente ideal para proyectos con Next.js, permite una integración continua, despliegues automáticos y escalabilidad global a través de su red de distribución de contenido.</p>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
