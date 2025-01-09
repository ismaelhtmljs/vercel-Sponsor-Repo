'use client'
import "./style.css";
import { IconoHostingClick, NextBlogClick } from "@/utils/navegation";
import { useRouter } from 'next/navigation';
import './pages/css/mediaqueris/pag1_mediaqueri.css';

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div className="container_section_1">
        <div className="background">
          <video 
            autoPlay 
            loop 
            muted
            playsInline
            aria-hidden="true"
          >
            <source src="/video/background.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="content">
          <div className="titulo_vercel">
            <div className="frase_vercel">
                <p translate="no">Despliega tu futuro con Vercel: rápido, confiable y sin límites.</p>
            </div>
            <h1 translate="no">VERCEL</h1>
            <div className="icon_vercel" onClick={IconoHostingClick}>
                <img src="/favicon.ico" alt="Vercel" style={{width: "76px", height: "76px"}}/>
            </div>
            <p>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: '8px', verticalAlign: 'middle' }}
              >
                <path 
                  d="M12 2L2 7L12 12L22 7L12 2Z" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 17L12 22L22 17" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 12L12 17L22 12" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              Hosting Gratuito
            </p>
          </div>
        </div>
      </div>
      <div className="container_section_2">
        <div className="contenedor_contenido_section_2">
          <div className="contenedor_txt_section_2">
            <p className="about-text">ACERCA DE VERCEL</p>
            <span className="OYPEnA" translate="no">
                Vercel es una plataforma que transforma
                <br/>
                la manera de desplegar aplicaciones web.
                <br/>
                Con herramientas modernas y un
                <br/>
                rendimiento global, potencia a
                <br/>
                desarrolladores para crear experiencias
                <br/>
                rápidas y escalables.
            </span>
            <button 
              type="button" 
              className="btn_section_2_2" 
              onClick={() => NextBlogClick(router)}
              translate="no"
            >
              SUMÉRGETE EN EL BLOG
            </button>
          </div>
        </div>
      </div>
      {/* CONTENEDOR DE LA SECCION 3 */}
      <div className="container_section_3">
        <div className="background_section_3">
          <img src="/Background_footer_vercel_blog1.png" alt="" className="img_section_3"/>
        </div>
        <div className="contenedor-msg">
          <div className="initial_msg">
              <h1 style={{fontSize: "82px", marginBottom: "10px"}}>VERCEL <img src="/favicon.ico" alt="Vercel" style={{width: "69px", height: "69px"}}/></h1>
              <p style={{fontSize: "1.2rem"}}>Despliega tu futuro con Vercel: rápido, confiable y sin límites.</p>
          </div>
          <div className="final_msg">
              <p style={{fontSize: "1.2rem"}}>Despliega tu página web o blog gratis con vercel</p>
              <div className="button-cloud-container">
                <button type="button" className="btn_section_2_2" onClick={IconoHostingClick}>
                  Comenzar a desplegar mi página web
                </button>
                <img src="/cloud-globe.svg" alt="" style={{width: "76px", height: "76px"}}/>
              </div>
              <div className="copy">
                  <p>&copy; CopyRight by Ismaelxd74 | official License from 2024-2058</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
