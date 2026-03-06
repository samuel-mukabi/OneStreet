'use client'

import Link from "next/link";
import {useState} from "react";
import {Menu, X, Phone} from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        {label: 'Home', href: '/'},
        {label: 'Properties', href: '/properties'},
        {label: 'About', href: '/about'},
        {label: 'Contact', href: '/contact'},
    ]

    return (
        <nav className='bg-background h-20 top-0 z-1000 sticky border-b border-border px-4'>
            <div className='max-w-7xl mx-auto h-full flex justify-between items-center'>
                <Link href="/" className='logo'>ONESTREET</Link>

                {/* Desktop Menu */}
                <div className='hidden lg:flex items-center gap-8 text-xs'>
                    {navLinks.map((nav) => (
                        <Link href={nav.href} key={nav.label} className='links'>{nav.label}</Link>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Phone size={14} className="text-accent" />
                        <h6 className="cursor-pointer font-bold">+(254) 742 479 092</h6>
                    </div>
                    <Link href={'/contact'} className="btn-primary">Schedule Viewing</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-foreground p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsOpen(false)} />
            <div className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-1001 transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-12">
                        <span className="logo">ONESTREET</span>
                        <button onClick={() => setIsOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-6">
                        {navLinks.map((nav) => (
                            <Link
                                href={nav.href}
                                key={nav.label}
                                className="text-xl font-medium tracking-tight hover:text-accent transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {nav.label}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-auto space-y-6">
                        <div className="space-y-2">
                            <p className="text-xs text-muted uppercase tracking-widest font-bold">Inquiries</p>
                            <p className="text-lg font-bold">+(254) 742 479 092</p>
                        </div>
                        <Link
                            href="/contact"
                            className="btn-primary w-full py-4 text-center inline-block"
                            onClick={() => setIsOpen(false)}
                        >
                            Schedule Viewing
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default NavBar
