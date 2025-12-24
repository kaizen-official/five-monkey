"use client";
import { motion } from "framer-motion";

export default function Gallery() {

    // Sample cards data
    const galleryCards = [
        { id: 1, bgImage: "bg-[url('/svg/g1.webp')]", title: "Card 1" },
        { id: 2, bgImage: "bg-[url('/svg/g2.webp')]", title: "Card 2" },
        { id: 3, bgImage: "bg-[url('/svg/g3.webp')]", title: "Card 3" },
        { id: 4, bgImage: "bg-[url('/svg/g4.webp')]", title: "Card 4" },
        { id: 5, bgImage: "bg-[url('/svg/g5.webp')]", title: "Card 5" },
        { id: 6, bgImage: "bg-[url('/svg/g6.webp')]", title: "Card 6" },
    ];

    // Triple the cards for smooth infinite scroll
    const infiniteCards = [...galleryCards, ...galleryCards, ...galleryCards];

    return (
        <section className="w-full py-20 lg:py-32 bg-[#2A1800] text-[#FFF2E6] overflow-hidden rounded-t-[3rem] -mt-10 relative z-20">
            <div className="container mx-auto px-4 mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h1 className="text-5xl md:text-7xl fontchange mb-6">Our <span className="text-[#D4A373] italic">Gallery</span></h1>
                    <p className="max-w-xl mx-auto text-lg text-[#FFF2E6]/70">
                        A glimpse into the ambiance, the food, and the moments that make 5Monkey Bistro special.
                    </p>
                </motion.div>
            </div>

            {/* Infinite Carousel */}
            <div className="relative w-full flex overflow-hidden">
                <motion.div
                    className="flex gap-8 px-4"
                    animate={{ x: ["0%", "-33.33%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30
                    }}
                >
                    {infiniteCards.map((card, index) => (
                        <div
                            key={`${card.id}-${index}`}
                            className={`w-72 h-96 md:w-80 md:h-112 ${card.bgImage} bg-cover bg-center bg-no-repeat rounded-3xl shadow-2xl shrink-0 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 border-4 border-[#FFF2E6]/10`}
                        >
                        </div>
                    ))}
                </motion.div>
            </div>

            <div className="text-center mt-16">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#D4A373] text-[#2A1800] px-10 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-white transition-all duration-300"
                    onClick={() => { window.location.href = '/gallery' }}
                >
                    View All Photos
                </motion.button>
            </div>
        </section>
    )
}