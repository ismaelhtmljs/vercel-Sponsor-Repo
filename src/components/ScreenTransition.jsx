'use client'
import { useEffect, useState } from 'react';
import '../app/pages/css/ScreenTransition.css';

export default function ScreenTransition() {
    const [isTransitioning, setIsTransitioning] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsTransitioning(false);
        }, 1500); // Duración de la transición
    }, []);

    return (
        <div className={`screen-transition ${!isTransitioning ? 'fade-out' : ''}`}>
            <div className="transition-content">
                <img 
                    src="/favicon.ico" 
                    alt="Vercel" 
                    className="transition-logo"
                />
                <h1 className="transition-text">VERCEL</h1>
            </div>
        </div>
    );
}
