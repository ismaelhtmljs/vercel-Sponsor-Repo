'use client'
import { useEffect, useState } from 'react';
import '../app/pages/css/LandingScreenStyle.css'

export default function LandingScreenAnimation() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simular tiempo de carga
        setTimeout(() => {
            setIsLoading(false);
        }, 2000); // 2 segundos de animación
    }, []);

    return (
        <div className={`landing-screen ${!isLoading ? 'fade-out' : ''}`}>
            <div className="loading-animation">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <h2>VERCEL</h2>
            </div>
        </div>
    );
}
