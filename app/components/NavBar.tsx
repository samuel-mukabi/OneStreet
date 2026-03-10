'use client'

import Link from "next/link";
import {useState, useEffect} from "react";
import {Menu, X, Phone} from "lucide-react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    const navLinks = [
        {label: 'Home', href: '/'},
        {label: 'Properties', href: '/properties'},
        {label: 'About', href: '/about'},
        {label: 'Contact', href: '/contact'},
    ]

    return (
        <nav
            className='bg-linear-to-r from-primary to-primary-light h-20 top-0 z-1000 sticky px-4 shadow-lg text-white'>
            <div className='max-w-7xl mx-auto h-full flex-between'>
                <Link href="/" className='logo'>Onestreetrealty</Link>

                {/* Desktop Menu */}
                <div className='hidden lg:flex items-center gap-8'>
                    {navLinks.map((nav) => (
                        <Link href={nav.href} key={nav.label} className='links'>{nav.label}</Link>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Phone size={14} className="text-gold"/>
                        <Link href={`tel:0719213874`} className="cursor-pointer font-bold text-sm! tracking-widest">+(254) 719 213
                            874</Link>
                    </div>
                    <Link href={'/contact'} className="btn-primary">Schedule Viewing</Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? '' : <Menu size={28}/>}
                </button>
            </div>

            {/* Mobile Sidebar */}
            <div
                className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsOpen(false)}/>
            <div
                className={`fixed top-0 right-0 h-svh w-3/4 max-w-sm bg-linear-to-b from-primary to-primary-light z-1001 transition-transform duration-300 lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-between items-center mb-12">
                        <span className="logo">ONESTREET</span>
                        <button onClick={() => setIsOpen(false)}>
                            <X size={24}/>
                        </button>
                    </div>
                    <div className="flex flex-col gap-6">
                        {navLinks.map((nav) => (
                            <Link
                                href={nav.href}
                                key={nav.label}
                                className="text-base font-medium tracking-tight"
                                onClick={() => setIsOpen(false)}
                            >
                                {nav.label}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-auto space-y-6">
                        <div className="space-y-1">
                            <p className="text-lg! text-highlight! uppercase tracking-widest font-bold">Inquiries</p>
                            <div className="flex items-center gap-2">
                                <span>Press to call:</span>
                                <Link href={'tel:0719213874'} className="text-base font-bold">+(254) 719 213 874</Link>
                            </div>
                        </div>
                        <Link
                            href="/contact"
                            className="btn-primary transition-colors duration-75 w-full py-4 text-center inline-block"
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
