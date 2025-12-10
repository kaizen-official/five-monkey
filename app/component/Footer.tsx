import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full bg-[#2C1810] text-[#FFF2E6] pt-20 pb-10 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <Image src="/svg/Leaf.svg" alt="Texture" layout="fill" objectFit="cover" className="opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col items-start gap-6">
                        <div className="relative w-40 h-16">
                            <Image
                                src="/svg/Logo.svg"
                                alt="5Monkey Logo"
                                layout="fill"
                                objectFit="contain"
                                className="brightness-0 invert"
                            />
                        </div>
                        <p className="text-[#FFF2E6]/70 leading-relaxed text-sm">
                            Where authentic flavors meet a vibrant atmosphere. Join us for a culinary journey crafted with passion.
                        </p>
                        <div className="flex gap-4">
                            <SocialIcon icon={<Instagram className="w-5 h-5" />} href="#" />
                            <SocialIcon icon={<Facebook className="w-5 h-5" />} href="#" />
                            <SocialIcon icon={<Twitter className="w-5 h-5" />} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl fontchange mb-6 text-[#E6A45C]">Quick Links</h4>
                        <ul className="space-y-3">
                            <FooterLink href="/" label="Home" />
                            <FooterLink href="/#OurStory" label="Our Story" />
                            <FooterLink href="/menu" label="Menu" />
                            <FooterLink href="/gallery" label="Gallery" />
                            <FooterLink href="/contact" label="Contact Us" />
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-xl fontchange mb-6 text-[#E6A45C]">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-[#FFF2E6]/70 text-sm">
                                <MapPin className="w-5 h-5 text-[#E6A45C] shrink-0" />
                                <span>SCO-150, Sector-15,<br />Sonipat, Haryana</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#FFF2E6]/70 text-sm">
                                <Phone className="w-5 h-5 text-[#E6A45C] shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-[#FFF2E6]/70 text-sm">
                                <Mail className="w-5 h-5 text-[#E6A45C] shrink-0" />
                                <span>hello@fivemonkey.cafe</span>
                            </li>
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h4 className="text-xl fontchange mb-6 text-[#E6A45C]">Opening Hours</h4>
                        <ul className="space-y-3 text-[#FFF2E6]/70 text-sm">
                            <li className="flex justify-between border-b border-[#FFF2E6]/10 pb-2">
                                <span>Mon - Fri</span>
                                <span>11:00 AM - 11:00 PM</span>
                            </li>
                            <li className="flex justify-between border-b border-[#FFF2E6]/10 pb-2">
                                <span>Sat - Sun</span>
                                <span>11:00 AM - 11:00 PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full h-px bg-[#FFF2E6]/10 mb-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#FFF2E6]/40">
                    <p>© {new Date().getFullYear()} 5Monkey Bistro. All Rights Reserved.</p>
                    <div className="flex gap-6">
                        <Link href="#" className="hover:text-[#E6A45C] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#E6A45C] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const FooterLink = ({ href, label }: { href: string, label: string }) => (
    <li>
        <Link href={href} className="text-[#FFF2E6]/70 hover:text-[#E6A45C] transition-colors text-sm flex items-center gap-2 group">
            <span className="w-0 group-hover:w-2 h-0.5 bg-[#E6A45C] transition-all duration-300"></span>
            {label}
        </Link>
    </li>
)

const SocialIcon = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
    <Link href={href} className="w-10 h-10 rounded-full border border-[#FFF2E6]/20 flex items-center justify-center text-[#FFF2E6] hover:bg-[#E6A45C] hover:border-[#E6A45C] hover:text-[#2C1810] transition-all duration-300">
        {icon}
    </Link>
)