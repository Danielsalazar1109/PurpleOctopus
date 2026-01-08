'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const servicesRef = useRef<HTMLDivElement | null>(null);

    const serviceItems = [
        { href: "/removal", label: "MOSS REMOVAL" },
        { href: "/treatment", label: "MOSS TREATMENT" },
        { href: "/windows", label: "WINDOWS CLEANING" },
        { href: "/office", label: "OFFICE CLEANING" },
        { href: "/gutter", label: "GUTTER CLEANING" },
        { href: "/painting", label: "PAINTING" },
        { href: "/condo", label: "CONDO CLEANING" },
        { href: "/moving", label: "MOVE IN/MOVE OUT CLEANING" },
        { href: "/airbnb", label: "AIRBNB CLEANING" },
        { href: "/residential", label: "RESIDENTIAL CLEANING" },
    ];

    // Handle window resize to determine if mobile view should be shown
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
            if (window.innerWidth >= 1024) {
                setIsMenuOpen(false);
            }
        };

        // Set initial value
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const onPointerDown = (e: MouseEvent) => {
            if (!servicesRef.current) return;
            const target = e.target as Node | null;
            if (!target) return;
            if (!servicesRef.current.contains(target)) {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener('mousedown', onPointerDown);
        return () => document.removeEventListener('mousedown', onPointerDown);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => {
            const next = !prev;
            if (!next) setIsMobileServicesOpen(false);
            return next;
        });
    };

    // Smooth scroll function
    const scrollToSection = (sectionId: string) => {
        setIsMenuOpen(false); // Close mobile menu if open
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-purple-900/95 to-purple-900/40 backdrop-blur-md shadow-lg">
            <div className="mx-auto flex max-w-6xl lg:max-w-none lg:w-full items-center justify-between px-4 py-3 md:px-8 lg:px-4">
                <div className="flex items-center gap-3 min-w-0">
                    <Link href="/" className="text-lg xl:text-xl text-white font-semibold mr-4">
                    <Image
                        src="/images/logas.png"
                        alt="Purple Logo"
                        className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 shrink-0"
                        width={250}
                        height={250}
                    />
                    </Link>
                    <span className="text-xl sm:text-2xl md:text-2xl lg:text-3xl text-white font-semibold leading-tight break-words">
                        {isMobile ? "PURPLE OCTOPUS SERVICE" : "PURPLE OCTOPUS SERVICE"}
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center">
                    <Link href="/" className="text-lg xl:text-xl text-white font-semibold mr-4">HOME</Link>
                    <div ref={servicesRef} className="relative mr-4">
                        <button
                            type="button"
                            onClick={() => setIsServicesOpen((v) => !v)}
                            className="inline-flex items-center gap-1 text-lg xl:text-xl text-white font-semibold"
                            aria-haspopup="menu"
                            aria-expanded={isServicesOpen}
                        >
                            SERVICES
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {isServicesOpen && (
                            <div className="absolute right-[-64] mt-2 w-72 overflow-hidden rounded-lg bg-purple-900/95 backdrop-blur-md shadow-xl ring-1 ring-white/10 border border-white">
                                <div className="py-1">
                                    {serviceItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsServicesOpen(false)}
                                           className="block px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 hover:text-white transition text-center border-b border-white last:border-b-0"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <button onClick={() => scrollToSection('about')} className="text-lg xl:text-xl text-white font-semibold">ABOUT</button>
                    <Link href="/book-now" className="text-lg xl:text-xl text-white font-semibold ml-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">BOOK NOW</Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden text-white p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        // X icon for close
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Hamburger icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-purple-900 mt-2 py-4 px-4 rounded-lg">
                    <div className="flex flex-col mx-auto">
                        <Link
                            href="/"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg text-white font-semibold py-3 border-b border-purple-700 text-center"
                        >
                            HOME
                        </Link>
                        <div>
                            <button
                                type="button"
                                onClick={() => setIsMobileServicesOpen((v) => !v)}
                                className="w-full text-lg text-white font-semibold py-3 border-b border-purple-700 text-center flex items-center justify-center gap-2"
                                aria-expanded={isMobileServicesOpen}
                            >
                                SERVICES
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className={`h-5 w-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.168l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.24 4.5a.75.75 0 0 1-1.08 0l-4.24-4.5a.75.75 0 0 1 .02-1.06Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>
                            {isMobileServicesOpen && (
                                <div className="grid grid-cols-2 gap-x-2">
                                    {serviceItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => {
                                                setIsMobileServicesOpen(false);
                                                setIsMenuOpen(false);
                                            }}
                                            className="text-base text-white/90 font-semibold py-2 border-b border-white text-center hover:text-white hover:bg-white/10 transition"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                        <button 
                            onClick={() => scrollToSection('about')} 
                            className="text-lg text-white font-semibold py-3 border-b border-purple-700 text-center"
                        >
                            ABOUT
                        </button>
                        <Link
                            href="/book-now"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-lg text-white font-semibold bg-purple-500 hover:bg-purple-600 py-3 px-6 rounded self-center mt-4"
                        >
                            BOOK NOW
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}