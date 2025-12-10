"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import menuData from "@/src/menuData.json";

export default function Desserts() {
    const dessertsData = menuData.desserts;

    return (
        <div className="min-h-screen bg-[#FFF2E6] overflow-x-hidden pt-24 md:pt-32 pb-20 relative">
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <Image src="/svg/Leaf.svg" alt="leaf" width={400} height={400} className="absolute top-40 right-10 opacity-5 -rotate-12" />
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/svg/paper-texture.png')] opacity-20 mix-blend-multiply"></div>
            </div>

            <div className="max-w-3xl mx-auto px-6 relative z-10">
                {/* Navigation */}
                <div className="mb-12">
                    <Link
                        href="/menu"
                        className="inline-flex items-center gap-2 text-[#7E4300]/60 hover:text-[#7E4300] transition-colors font-medium text-sm tracking-wide"
                    >
                        <ArrowLeft className="w-4 h-4" /> BACK TO CATEGORIES
                    </Link>
                </div>

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-6xl fontchange text-[#7E4300] mb-4">Desserts</h1>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-0.5 w-12 bg-[#7E4300]/20"></div>
                        <span className="text-[#7E4300]/60 text-sm italic">Sweet. Indulging. Divine.</span>
                        <div className="h-0.5 w-12 bg-[#7E4300]/20"></div>
                    </div>
                </motion.div>

                {/* Menu Content */}
                <div className="space-y-16">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {Object.entries(dessertsData).map(([key, category]: [string, any], index) => (
                        <MenuSection
                            key={key}
                            title={category.title}
                            items={category.items}
                            delay={0.2 + (index * 0.1)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

interface MenuItem {
    name: string;
    price: string | number;
    description?: string;
    desc?: string;
}

const MenuSection = ({ title, items, delay }: { title: string, items: MenuItem[], delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay }}
    >
        <h2 className="text-2xl md:text-3xl fontchange text-[#7E4300] mb-8 text-center">{title}</h2>
        <div className="space-y-6">
            {items.map((item, idx) => (
                <div key={idx} className="group flex items-end justify-between gap-4">
                    <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold text-[#7E4300] mb-1">{item.name}</h3>
                        {item.description && <p className="text-black text-sm font-light italic">{item.description}</p>}
                    </div>
                    <div className="flex-1 border-b-2 border-dotted border-[#7E4300]/20 mb-2 mx-2"></div>
                    <div className="text-lg md:text-xl font-bold text-[#7E4300]">₹{item.price}</div>
                </div>
            ))}
        </div>
    </motion.div>
);