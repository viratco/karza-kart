import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

import './BubbleMenu.css';

const DEFAULT_ITEMS = [
    {
        label: 'home',
        href: '#',
        ariaLabel: 'Home',
        rotation: -8,
        hoverStyles: { bgColor: '#3b82f6', textColor: '#ffffff' }
    },
    {
        label: 'about',
        href: '#',
        ariaLabel: 'About',
        rotation: 8,
        hoverStyles: { bgColor: '#10b981', textColor: '#ffffff' }
    },
    {
        label: 'projects',
        href: '#',
        ariaLabel: 'Documentation',
        rotation: 8,
        hoverStyles: { bgColor: '#f59e0b', textColor: '#ffffff' }
    },
    {
        label: 'blog',
        href: '#',
        ariaLabel: 'Blog',
        rotation: 8,
        hoverStyles: { bgColor: '#ef4444', textColor: '#ffffff' }
    },
    {
        label: 'contact',
        href: '#',
        ariaLabel: 'Contact',
        rotation: -8,
        hoverStyles: { bgColor: '#8b5cf6', textColor: '#ffffff' }
    }
];

export default function BubbleMenu({
    className,
    style,
    menuBg = '#fff',
    menuContentColor = '#111',
    useFixedPosition = false,
    items,
    animationEase = 'back.out(1.5)',
    animationDuration = 0.5,
    staggerDelay = 0.12
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    const overlayRef = useRef(null);
    const bubblesRef = useRef([]);
    const labelRefs = useRef([]);
    const containerRef = useRef(null);

    const menuItems = items?.length ? items : DEFAULT_ITEMS;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsMenuOpen(true);
                    setShowOverlay(true);
                } else {
                    // Optional: Close menu when out of view if desired, 
                    // but usually "trigger on scroll" means "animate in when seen"
                    // setIsMenuOpen(false); 
                }
            },
            {
                threshold: 0.5, // Trigger when 50% visible
                rootMargin: '0px'
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const overlay = overlayRef.current;
        const bubbles = bubblesRef.current.filter(Boolean);
        const labels = labelRefs.current.filter(Boolean);

        if (!overlay || !bubbles.length) return;

        if (isMenuOpen) {
            gsap.set(overlay, { display: 'flex' });
            gsap.killTweensOf([...bubbles, ...labels]);
            gsap.set(bubbles, { scale: 0, y: 30, transformOrigin: '50% 50%', opacity: 0 });
            gsap.set(labels, { y: 20, autoAlpha: 0 });

            bubbles.forEach((bubble, i) => {
                const delay = i * staggerDelay;
                const tl = gsap.timeline({ delay });

                tl.to(bubble, {
                    scale: 1,
                    y: 0,
                    opacity: 1,
                    duration: animationDuration * 1.2,
                    ease: 'elastic.out(1, 0.5)'
                });
                if (labels[i]) {
                    tl.to(
                        labels[i],
                        {
                            y: 0,
                            autoAlpha: 1,
                            duration: animationDuration * 0.8,
                            ease: 'power2.out'
                        },
                        `-=${animationDuration * 0.6}`
                    );
                }
            });
        }
    }, [isMenuOpen, animationEase, animationDuration, staggerDelay]);

    useEffect(() => {
        const handleResize = () => {
            if (isMenuOpen) {
                const bubbles = bubblesRef.current.filter(Boolean);
                const isDesktop = window.innerWidth >= 900;

                bubbles.forEach((bubble, i) => {
                    const item = menuItems[i];
                    if (bubble && item) {
                        const rotation = isDesktop ? (item.rotation ?? 0) : 0;
                        gsap.set(bubble, { rotation });
                    }
                });
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isMenuOpen, menuItems]);

    return (
        <div ref={containerRef} className={`bubble-menu-container ${className || ''}`} style={{ width: '100%', height: '100%', ...style }}>
            {showOverlay && (
                <div
                    ref={overlayRef}
                    className={`bubble-menu-items ${useFixedPosition ? 'fixed' : 'absolute'}`}
                    aria-hidden={!isMenuOpen}
                >
                    <ul className="pill-list" role="menu" aria-label="Menu links">
                        {menuItems.map((item, idx) => (
                            <li key={idx} role="none" className="pill-col">
                                <a
                                    role="menuitem"
                                    href={item.href}
                                    aria-label={item.ariaLabel || item.label}
                                    className="pill-link"
                                    style={{
                                        '--item-rot': `${item.rotation ?? 0}deg`,
                                        '--pill-bg': menuBg,
                                        '--pill-color': menuContentColor,
                                        '--hover-bg': item.hoverStyles?.bgColor || '#f3f4f6',
                                        '--hover-color': item.hoverStyles?.textColor || menuContentColor
                                    }}
                                    ref={el => {
                                        if (el) bubblesRef.current[idx] = el;
                                    }}
                                >
                                    <span
                                        className="pill-label"
                                        ref={el => {
                                            if (el) labelRefs.current[idx] = el;
                                        }}
                                    >
                                        {item.label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
