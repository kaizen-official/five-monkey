"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStory() {
    return (
        <div id="OurStory" className="relative py-20 md:py-32 overflow-hidden bg-white/50 backdrop-blur-sm">
            {/* Background Decorations */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-0 -z-10 opacity-30 w-64 h-64"
            >
                <Image src="/svg/Leaf.svg" alt="leaf" width={300} height={300} className="w-full h-full object-contain rotate-45" />
            </motion.div>
            <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 left-0 -z-10 opacity-30 w-64 h-64"
            >
                <Image src="/svg/Leaf.svg" alt="leaf" width={300} height={300} className="w-full h-full object-contain -rotate-12" />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* Left Side: Title and Text */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-4xl md:text-6xl fontchange text-[#7E4300] mb-4">Our Story</h2>
                            <div className="h-1.5 w-24 bg-[#7E4300] rounded-full"></div>
                        </div>

                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-light">
                            <p>
                                {/* <span className="text-3xl font-bold text-[#7E4300] float-left mr-2 leading-none">W</span> */}
                                Welcome to Five Monkey, where passion meets flavor. Born from a love for authentic culinary experiences, we started with a simple mission: to serve real food that warms the soul.
                            </p>
                            <p>
                                Nestled in the heart of Sonipat, we are more than just a cafe; we are a community hub where friends gather, ideas brew, and memories are made over steaming cups of artisanal coffee and handcrafted delicacies.
                            </p>
                        </div>

                        {/* Highlights Row */}
                        {/* <div className="grid grid-cols-3 gap-4 pt-4">
                            <div className="flex flex-col items-center p-4 bg-[#FFF2E6] rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                                <Coffee className="w-8 h-8 text-[#7E4300] mb-2" />
                                <span className="font-bold text-[#7E4300]">Artisan</span>
                                <span className="text-xs text-gray-600">Coffee</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-[#FFF2E6] rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                                <Heart className="w-8 h-8 text-[#7E4300] mb-2" />
                                <span className="font-bold text-[#7E4300]">Made with</span>
                                <span className="text-xs text-gray-600">Love</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-[#FFF2E6] rounded-xl text-center shadow-sm hover:shadow-md transition-shadow">
                                <Leaf className="w-8 h-8 text-[#7E4300] mb-2" />
                                <span className="font-bold text-[#7E4300]">Fresh</span>
                                <span className="text-xs text-gray-600">Ingredients</span>
                            </div>
                        </div> */}
                    </div>

                    {/* Right Side: Image/Visual */}
                    <div className="relative h-full min-h-[400px]">
                        <div className="absolute inset-0 bg-[#7E4300] rounded-3xl transform rotate-3 opacity-10"></div>
                        <div className="absolute inset-0 bg-[#FFF2E6] rounded-3xl transform -rotate-3 opacity-50 border border-[#7E4300]/20"></div>

                        <div className="relative h-full flex flex-col justify-center items-center p-8 text-center space-y-4">
                            <h3 className="text-3xl fontchange text-[#7E4300]">&quot;Food is the ingredient that binds us together.&quot;</h3>
                            <p className="italic text-gray-500">- The Five Monkey Team</p>

                            <div className="w-full h-px bg-linear-to-r from-transparent via-[#7E4300]/30 to-transparent my-8"></div>

                            <div className="grid grid-cols-2 gap-4 w-full">
                                <Image src="/svg/card2.webp" width={200} height={200} alt="food" className="w-full h-auto object-contain rounded-2xl shadow-inner bg-white/50 p-2" />
                                <Image src="/svg/card3.webp" width={200} height={200} alt="coffee" className="w-full h-auto object-contain rounded-2xl shadow-inner bg-white/50 p-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}