'use client'
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
        <nav className="fixed top-0 left-0 w-full py-2 md:py-4 px-4 md:px-8 lg:px-12 z-10 bg-gradient-to-b from-purple-900/80 to-transparent backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                        src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_100/9161476/692697_163804.png"
                        alt="Purple Logo"
                        className="h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 mr-2"
                        width={80}
                        height={80}
                    />
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white font-semibold">
                        {isMobile ? "PURPLE" : "PURPLE OCTOPUS SERVICE"}
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center">
                    <button onClick={() => scrollToSection('home')} className="text-lg xl:text-xl text-white font-semibold mr-4">HOME</button>
                    <button onClick={() => scrollToSection('services')} className="text-lg xl:text-xl text-white font-semibold mr-4">SERVICES</button>
                    <button onClick={() => scrollToSection('about')} className="text-lg xl:text-xl text-white font-semibold">ABOUT</button>
                    <button onClick={() => scrollToSection('form')} className="text-lg xl:text-xl text-white font-semibold ml-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">CONTACT US</button>
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
                <div className="lg:hidden bg-purple-900/95 mt-2 py-4 px-4 rounded-lg">
                    <div className="flex flex-col space-y-4">
                        <button 
                            onClick={() => scrollToSection('home')} 
                            className="text-lg text-white font-semibold py-2 border-b border-purple-700 text-left"
                        >
                            HOME
                        </button>
                        <button 
                            onClick={() => scrollToSection('services')} 
                            className="text-lg text-white font-semibold py-2 border-b border-purple-700 text-left"
                        >
                            SERVICES
                        </button>
                        <button 
                            onClick={() => scrollToSection('about')} 
                            className="text-lg text-white font-semibold py-2 border-b border-purple-700 text-left"
                        >
                            ABOUT
                        </button>
                        <button 
                            onClick={() => scrollToSection('form')} 
                            className="text-lg text-white font-semibold bg-purple-500 hover:bg-purple-600 py-2 px-4 rounded self-start"
                        >
                            CONTACT US
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}