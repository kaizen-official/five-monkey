"use client";
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Menu() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    return (
        <section ref={ref} className="w-full py-20 lg:py-32 relative overflow-hidden bg-[#FFF2E6]">
            {/* Decorative Elements with Parallax */}
            <motion.div style={{ y: y1, rotate }} className="absolute -top-20 -right-20 w-64 h-64 lg:w-96 lg:h-96 opacity-20 z-0">
                <Image src="/svg/Leaf.svg" alt="Leaf" fill className="object-contain" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-0 -left-20 w-80 h-80 opacity-20 z-0">
                <Image src="/svg/DesignL.svg" alt="Design" fill className="object-contain" />
            </motion.div>

            <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-7xl fontchange text-[#2A1800] relative inline-block">
                        Explore Our <span className="text-[#7E4300] italic">Menu</span>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute bottom-0 left-0 h-1 bg-[#7E4300]/30 rounded-full"
                        ></motion.div>
                    </h1>
                </motion.div>

                <div className="relative w-full max-w-5xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <Image
                            src="/svg/cards1.svg"
                            alt="Menu Preview"
                            width={1000}
                            height={600}
                            className="w-full h-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
                        />
                    </motion.div>

                    {/* Glow effect behind cards */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#7E4300]/10 blur-[100px] -z-10 rounded-full"></div>
                </div>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent border-2 border-[#7E4300] text-[#7E4300] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#7E4300] hover:text-white transition-all duration-300 shadow-lg hover:shadow-[#7E4300]/30"
                    onClick={() => {
                        window.location.href = "/menu";
                    }}
                >
                    View Full Menu
                </motion.button>
            </div>
        </section>
    )
}