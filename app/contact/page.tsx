"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#FFF2E6] overflow-x-hidden pt-24 md:pt-32 pb-20 relative">
            {/* Background Elements */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
                <Image src="/svg/Leaf.svg" alt="leaf" width={400} height={400} className="absolute -top-20 -right-20 opacity-10 rotate-12" />
                <Image src="/svg/Leaf.svg" alt="leaf" width={300} height={300} className="absolute bottom-20 -left-10 opacity-10 -rotate-45" />
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-black uppercase tracking-[0.2em] text-sm font-bold mb-4 block">Get in Touch</span>
                    <h1 className="text-5xl md:text-7xl fontchange text-[#7E4300] mb-6">Contact Us</h1>
                    <div className="w-16 h-0.5 bg-[#7E4300]/30 mx-auto"></div>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Contact Info Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white/60 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-xl border border-[#7E4300]/10"
                    >
                        <h2 className="text-3xl fontchange text-black mb-8">Visit Us</h2>

                        <div className="space-y-8">
                            <ContactItem
                                icon={<MapPin className="w-6 h-6 text-[#7E4300]" />}
                                title="Location"
                                content={
                                    <>
                                        SCO-150, Sector-15<br />
                                        Sonipat, Haryana
                                    </>
                                }
                            />
                            <ContactItem
                                icon={<Phone className="w-6 h-6 text-[#7E4300]" />}
                                title="Call Us"
                                content="+91 98765 43210"
                            />
                            <ContactItem
                                icon={<Mail className="w-6 h-6 text-[#7E4300]" />}
                                title="Email"
                                content="hello@fivemonkey.cafe"
                            />
                            <ContactItem
                                icon={<Clock className="w-6 h-6 text-[#7E4300]" />}
                                title="Opening Hours"
                                content={
                                    <>
                                        Mon - Fri: 11:00 AM - 11:00 PM<br />
                                        Sat - Sun: 11:00 AM - 11:00 PM
                                    </>
                                }
                            />
                        </div>
                    </motion.div>

                    {/* Reservation Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-[#7E4300] p-8 md:p-12 rounded-3xl shadow-2xl text-white relative overflow-hidden"
                    >
                        {/* <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                            <Users className="w-64 h-64" />
                        </div> */}

                        <h2 className="text-3xl fontchange text-white mb-2 relative z-10">Reserve a Table</h2>
                        <p className="text-white/70 mb-8 relative z-10">Book your spot for an unforgettable dining experience.</p>

                        <form className="space-y-6 relative z-10">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80">First Name</label>
                                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-white/80">Last Name</label>
                                    <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">Email</label>
                                <input type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/50 transition-colors" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">Date & Time</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="date" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
                                    <input type="time" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/50 transition-colors" />
                                </div>
                            </div>

                            <button className="w-full bg-white text-[#7E4300] font-bold py-4 rounded-xl hover:bg-[#FFF2E6] transition-colors flex items-center justify-center gap-2 mt-4">
                                Confirm Reservation <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

const ContactItem = ({ icon, title, content }: { icon: React.ReactNode, title: string, content: React.ReactNode }) => (
    <div className="flex items-start gap-4">
        <div className="bg-[#7E4300]/10 p-3 rounded-full">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-[#7E4300] mb-1">{title}</h4>
            <div className="text-black font-medium leading-relaxed">
                {content}
            </div>
        </div>
    </div>
);