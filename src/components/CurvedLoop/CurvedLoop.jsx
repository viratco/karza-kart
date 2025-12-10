import React, { useEffect, useRef } from 'react';
import './CurvedLoop.css';

const CurvedLoop = () => {
    const pathRef = useRef(null);

    useEffect(() => {
        let requestRef;

        const animate = () => {
            const scrollY = window.scrollY;
            // Decreased speed: changed to 0.05 for slower movement
            const offset = (scrollY * 0.05) % 100;

            if (pathRef.current) {
                pathRef.current.setAttribute('startOffset', `${-offset}%`);
            }

            requestRef = requestAnimationFrame(animate);
        };

        requestRef = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(requestRef);
    }, []);

    return (
        <div className="curved-loop-container">
            <svg width="100%" height="200" viewBox="0 0 1000 200" preserveAspectRatio="none">
                <path
                    id="curve"
                    fill="transparent"
                    d="M0,100 C250,180 750,20 1000,100"
                />
                <text className="curved-text">
                    <textPath ref={pathRef} href="#curve" startOffset="0%">
                        KARZA KART • MORTGAGE LENDER • KARZA KART • MORTGAGE LENDER • KARZA KART • MORTGAGE LENDER • KARZA KART • MORTGAGE LENDER •
                    </textPath>
                </text>
            </svg>
        </div>
    );
};

export default CurvedLoop;
