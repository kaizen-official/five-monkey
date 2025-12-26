"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 lg:pt-0">
            {/* Background elements */}
            <div className="absolute inset-0 w-full h-full z-0">
                <Image
                    src="/svg/homebg.svg"
                    alt="Background"
                    fill
                    className="object-cover object-center opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-linear-to-b from-[#FFF2E6]/0 via-[#FFF2E6]/50 to-[#FFF2E6]"></div>
            </div>

            <div className="container mx-auto px-4 md:px-8 z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold fontchange leading-[1.1] text-[#2A1800]">
                            Serving Classy <br />
                            Cuisine In <span className="text-[#7E4300] inline-block relative">
                                Sonipat
                                <motion.svg
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, delay: 0.8 }}
                                    className="absolute -bottom-2 left-0 w-full"
                                    viewBox="0 0 100 10"
                                    fill="none"
                                >
                                    <path d="M0 5 Q 50 10 100 5" stroke="#7E4300" strokeWidth="4" />
                                </motion.svg>
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="mt-6 text-lg md:text-xl text-[#7E4300]/80 max-w-lg"
                    >
                        Where Italian Flavors meet European elegance. Experience the finest coffee and culinary delights in a cozy atmosphere.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
                    >
                        <button
                            className="bg-[#7E4300] text-white px-8 py-4 rounded-full text-lg font-medium shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                            onClick={() => { window.location.href = '/contact' }}
                        >
                            Book A Table
                        </button>
                        <button
                            className="bg-white text-[#7E4300] border border-[#7E4300]/20 px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl hover:bg-[#F6EBDA] hover:scale-105 transition-all duration-300"
                            onClick={() => { window.location.href = '/menu' }}
                        >
                            View Menu
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-12 flex gap-8 text-[#7E4300]/60"
                    >
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-[#7E4300]">50+</span>
                            <span className="text-sm">Dishes</span>
                        </div>
                        <div className="w-px h-10 bg-[#7E4300]/20"></div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-[#7E4300]">4.9</span>
                            <span className="text-sm">Ratings</span>
                        </div>
                        <div className="w-px h-10 bg-[#7E4300]/20"></div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold text-[#7E4300]">100%</span>
                            <span className="text-sm">Fresh</span>
                        </div>
                    </motion.div>
                </div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full lg:w-1/2 relative flex justify-center lg:justify-end"
                >
                    <div className="relative w-[300px] md:w-[400px] lg:w-[500px] aspect-3/4">
                        <div className="absolute inset-0 bg-[#7E4300] rounded-[3rem] rotate-3 opacity-20 transform translate-x-4 translate-y-4"></div>
                        <Image
                            src="/svg/HomeH.svg"
                            alt="Hero Image"
                            fill
                            className="object-cover rounded-[3rem] shadow-2xl relative z-10"
                            priority
                        />

                        {/* Floating badge */}
                        {/* <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                            className="absolute -bottom-6 -left-6 z-20 bg-white px-6 py-4 rounded-full shadow-xl flex items-center gap-3"
                        >
                            <div className="bg-[#FFF2E6] p-2 rounded-full">
                                <span className="text-2xl">☕</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Best In Town</p>
                                <p className="text-[#7E4300] font-bold">Coffee & Vibes</p>
                            </div>
                        </motion.div> */}
                    </div>
                </motion.div>

            </div>
        </section>
    )
}