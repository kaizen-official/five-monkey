"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export default function Gallery() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    // Using a more diverse set of images or repeating them for the grid
    const images = [
        { src: "/svg/g1.webp", alt: "Gallery Image 1", span: "col-span-1 md:col-span-2 row-span-2" },
        { src: "/svg/g2.webp", alt: "Gallery Image 2", span: "col-span-1 row-span-1" },
        { src: "/svg/g3.webp", alt: "Gallery Image 3", span: "col-span-1 row-span-1" },
        { src: "/svg/g4.webp", alt: "Gallery Image 4", span: "col-span-1 md:col-span-2 row-span-1" },
        { src: "/svg/g5.webp", alt: "Gallery Image 5", span: "col-span-1 row-span-1" },
        { src: "/svg/g6.webp", alt: "Gallery Image 6", span: "col-span-1 md:col-span-2 row-span-1" },
        { src: "/svg/g7.webp", alt: "Gallery Image 7", span: "col-span-1 row-span-1" },
    ];

    const openModal = (index: number) => {
        setSelectedImageIndex(index);
        // document.body.style.overflow = "hidden"; 
    };

    const closeModal = () => {
        setSelectedImageIndex(null);
        // document.body.style.overflow = "auto";
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImageIndex !== null) {
            setSelectedImageIndex(selectedImageIndex === 0 ? images.length - 1 : selectedImageIndex - 1);
        }
    };

    return (
        <>
            <motion.div
                className="min-h-screen relative py-24 md:py-32 px-4 md:px-8 overflow-hidden bg-[#FFF2E6]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                    <div className="absolute top-20 -left-20 w-96 h-96 bg-[#7E4300]/5 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 -right-20 w-96 h-96 bg-[#7E4300]/5 rounded-full blur-3xl"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-5xl md:text-7xl fontchange text-[#7E4300] mb-4">Gallery</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">A glimpse into our cozy ambiance and culinary creations.</p>
                        <div className="w-24 h-1 bg-[#7E4300] mx-auto mt-6 rounded-full"></div>
                    </motion.div>

                    {/* Masonry-like Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
                        {images.map((image, index) => (
                            <motion.div
                                key={index}
                                className={`relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg ${image.span}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                onClick={() => openModal(index)}
                                whileHover={{ y: -5 }}
                            >
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-xl">
                                        <ZoomIn className="w-6 h-6 text-[#7E4300]" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Modal Carousel */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 backdrop-blur-md z-60 flex items-center justify-center p-4"
                        onClick={closeModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="relative max-w-5xl w-full h-[80vh] flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        >
                            {/* Close button */}
                            <button
                                className="absolute -top-12 right-0 text-white hover:text-[#7E4300] transition-colors p-2 bg-white/10 rounded-full hover:bg-white"
                                onClick={closeModal}
                                aria-label="Close modal"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Previous button */}
                            <button
                                className="absolute left-0 md:-left-15 text-white hover:text-[#7E4300] transition-colors p-3 bg-white/10 rounded-full hover:bg-white z-10"
                                onClick={prevImage}
                                aria-label="Previous image"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            {/* Image */}
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl bg-black">
                                <Image
                                    src={images[selectedImageIndex].src}
                                    alt={images[selectedImageIndex].alt}
                                    fill
                                    className="object-contain"
                                    quality={100}
                                    priority
                                />
                            </div>

                            {/* Next button */}
                            <button
                                className="absolute right-0 md:-right-15 text-white hover:text-[#7E4300] transition-colors p-3 bg-white/10 rounded-full hover:bg-white z-10"
                                onClick={nextImage}
                                aria-label="Next image"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>

                            {/* Image counter */}
                            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 text-sm tracking-widest">
                                {selectedImageIndex + 1} / {images.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}