"use client";
import Image from "next/image"
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Coffee, Cake, UtensilsCrossed } from "lucide-react";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${scrolled ? 'bg-[#FFF2E6]/90 backdrop-blur-md shadow-sm py-3 border-[#7E4300]/10' : 'bg-transparent py-6 border-transparent'}`}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-row justify-between items-center">
                    <Link href="/" className="z-50 relative">
                        <Image src="/svg/Logo.svg" alt="logo"
                            unoptimized
                            width={140}
                            height={50}
                            className={`transition-all duration-300 ${scrolled ? 'w-40' : 'w-40'}`}
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex gap-8 items-center text-sm uppercase tracking-wider font-bold text-[#7E4300]">
                        {['Home', 'OurStory', 'Gallery', 'Contact'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : item === 'OurStory' ? '/#OurStory' : `/${item.toLowerCase()}`}
                                className="relative group py-2"
                            >
                                <span className="hover:text-amber-700 transition-colors duration-300">{item === 'OurStory' ? 'Our Story' : item}</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#7E4300] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}

                        {/* Menu Dropdown */}
                        <div
                            className="relative group py-2"
                            onMouseEnter={() => setIsMenuDropdownOpen(true)}
                            onMouseLeave={() => setIsMenuDropdownOpen(false)}
                        >
                            <Link
                                href="/menu"
                                className="flex items-center gap-1 hover:text-amber-700 transition-colors group"
                            >
                                Menu
                                <motion.div
                                    animate={{ rotate: isMenuDropdownOpen ? 180 : 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown className="w-4 h-4" />
                                </motion.div>
                            </Link>

                            <AnimatePresence>
                                {isMenuDropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full -left-4 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden py-2 border border-[#7E4300]/10"
                                    >
                                        <Link
                                            href="/menu/drinks"
                                            className="px-4 py-3 hover:bg-[#F6EBDA] hover:text-[#7E4300] text-[#7E4300]/80 transition-colors flex items-center gap-2 group/item"
                                        >
                                            <Coffee className="w-4 h-4 group-hover/item:text-[#7E4300] transition-colors" />
                                            <span>Drinks</span>
                                        </Link>
                                        <Link
                                            href="/menu/desserts"
                                            className="px-4 py-3 hover:bg-[#F6EBDA] hover:text-[#7E4300] text-[#7E4300]/80 transition-colors flex items-center gap-2 group/item"
                                        >
                                            <Cake className="w-4 h-4 group-hover/item:text-[#7E4300] transition-colors" />
                                            <span>Desserts</span>
                                        </Link>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#7E4300] text-white px-7 py-3 rounded-full cursor-pointer shadow-lg hover:shadow-xl hover:bg-[#5e3200] transition-all flex items-center gap-2"
                            onClick={() => { window.location.href = '/contact' }}
                        >
                            <UtensilsCrossed className="w-4 h-4" />
                            <span>Book a Table</span>
                        </motion.button>
                    </div>

                    {/* Mobile Hamburger Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleMobileMenu}
                        className="lg:hidden flex justify-center items-center w-10 h-10 z-50 text-[#7E4300]"
                    >
                        {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </motion.button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: "100%" }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: "100%" }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="fixed inset-0 bg-[#FFF2E6] z-40 flex flex-col pt-32 px-8"
                        >
                            <div className="flex flex-col space-y-6 text-2xl text-[#7E4300] font-bold">
                                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-600 border-b border-[#7E4300]/10 pb-4">Home</Link>
                                <Link href="/#OurStory" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-600 border-b border-[#7E4300]/10 pb-4">Our Story</Link>

                                <div className="flex flex-col space-y-4 border-b border-[#7E4300]/10 pb-4">
                                    <Link href="/menu" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-600">Menu</Link>
                                    <div className="flex flex-col pl-6 space-y-3 text-lg font-medium text-[#7E4300]/70">
                                        <Link href="/menu/drinks" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                                            <Coffee className="w-4 h-4" /> Drinks
                                        </Link>
                                        <Link href="/menu/desserts" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                                            <Cake className="w-4 h-4" /> Desserts
                                        </Link>
                                    </div>
                                </div>

                                <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-600 border-b border-[#7E4300]/10 pb-4">Gallery</Link>
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-amber-600 border-b border-[#7E4300]/10 pb-4">Contact</Link>

                                <button
                                    className="bg-[#7E4300] text-white px-8 py-4 rounded-full mt-4 flex items-center justify-center gap-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <UtensilsCrossed className="w-5 h-5" />
                                    Book a Table
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </>
    )
}