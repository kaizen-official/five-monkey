"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Menu = () => {
    return (
        <div className="min-h-screen bg-[#FFF2E6] overflow-x-hidden pt-24 md:pt-32 pb-20 relative">
            {/* Background Texture/Leaf */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <Image src="/svg/Leaf.svg" alt="leaf" width={400} height={400} className="absolute -top-20 -right-20 opacity-5 rotate-12" />
                <Image src="/svg/Leaf.svg" alt="leaf" width={300} height={300} className="absolute bottom-40 -left-10 opacity-5 -rotate-45" />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-16 md:mb-24"
                >
                    {/* <span className="text-[#7E4300] uppercase tracking-[0.3em] text-xs md:text-sm font-bold mb-4 block">Est. 2023</span> */}
                    <h1 className="text-5xl md:text-7xl fontchange text-[#7E4300] mb-6">The Menu</h1>
                    <div className="w-16 h-0.5 bg-[#7E4300]/30 mx-auto"></div>
                    <p className="mt-6 text-[#7E4300]/70 italic font-light text-lg">
                        &quot;A collection of flavors drafted with passion.&quot;
                    </p>
                </motion.div>

                {/* TOC List */}
                <div className="space-y-4">
                    <MenuItemLink
                        href="/menu/food#specialties"
                        title="Chef's Specialties"
                        subtitle="Signature Dishes & Recommendations"
                        index="01"
                    />
                    <MenuItemLink
                        href="/menu/food"
                        title="Dining"
                        subtitle="Breakfast, Burgers, Pasta & More"
                        index="02"
                    />
                    <MenuItemLink
                        href="/menu/drinks"
                        title="Beverages"
                        subtitle="Coffee, Tea, Mocktails & Shakes"
                        index="03"
                    />
                    <MenuItemLink
                        href="/menu/desserts"
                        title="Desserts"
                        subtitle="Cakes, Pastries & Sweet Treats"
                        index="04"
                    />
                    {/* Placeholder for potential future sections like 'Food' if added */}
                </div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-20 text-center text-[#7E4300]/40 text-sm"
                >
                    * Please inform our staff of any allergies.
                </motion.div>
            </div>
        </div>
    );
};

const MenuItemLink = ({ href, title, subtitle, index }: { href: string, title: string, subtitle: string, index: string }) => {
    return (
        <Link href={href} className="block group">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between border-b border-[#7E4300]/10 py-8 hover:bg-white/40 hover:px-6 transition-all duration-300 rounded-lg cursor-pointer"
            >
                <div className="flex items-center gap-6 md:gap-12">
                    <span className="text-3xl md:text-4xl fontchange text-[#7E4300]/20 font-bold group-hover:text-[#7E4300]/40 transition-colors">
                        {index}
                    </span>
                    <div>
                        <h2 className="text-3xl md:text-4xl fontchange text-[#7E4300] mb-1 group-hover:translate-x-2 transition-transform duration-300">
                            {title}
                        </h2>
                        <p className="text-black text-sm md:text-base font-light tracking-wide group-hover:text-[#7E4300]/80 transition-colors">
                            {subtitle}
                        </p>
                    </div>
                </div>

                <div className="w-12 h-12 rounded-full border border-[#7E4300]/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-5 h-5 text-[#7E4300]" />
                </div>
            </motion.div>
        </Link>
    );
}

export default Menu;