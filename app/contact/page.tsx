'use client'

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactPage = () => {
    const contactInfo = [
        {
            icon: <Phone size={20} />,
            title: "Phone",
            details: "+(254) 719 213 874",
            sub: "Mon - Fri, 9am - 6pm"
        },
        {
            icon: <Mail size={20} />,
            title: "Email",
            details: "realtyonestreet@gmail.com",
            sub: "Support 24/7"
        },
        {
            icon: <MapPin size={20} />,
            title: "Office",
            details: "12th Floor, OneStreet Plaza",
            sub: "Westlands, Nairobi, Kenya"
        },
        {
            icon: <Clock size={20} />,
            title: "Working Hours",
            details: "08:00 AM - 05:00 PM",
            sub: "Saturday by Appointment"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Header Section */}
            <section className="bg-primary pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto text-center space-y-4">
                    <h1 className="text-4xl! md:text-8xl! text-gold!">Contact Our Experts</h1>
                    <p className="max-w-2xl mx-auto text-base md:text-lg">
                        Whether you are looking to buy, sell, or invest, our specialized team is
                        ready to provide you with personalized assistance.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 -mt-10 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-2 bg-linear-to-r from-primary to-primary-light rounded-md shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl mb-8">Send us a Message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gold-strong">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Samuel Mukabi"
                                        className="w-full px-4 py-3 rounded-lg border text-gold border-black/40 focus:border-gold outline-none transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gold-strong">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="sam@example.com"
                                        className="w-full px-4 py-3 rounded-lg border text-gold border-black/40 focus:border-gold outline-none transition-colors"
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gold-strong">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+254 000 000 000"
                                        className="w-full px-4 py-3 rounded-lg border text-gold border-black/40 focus:border-gold outline-none transition-colors"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gold-strong">Interest</label>
                                    <select className="w-full px-4 py-3 rounded-lg border text-gold border-black/40 focus:border-gold outline-none transition-colors bg-linear-to-r from-primary to-primary-light">
                                        <option>Buying a Property</option>
                                        <option>Selling a Property</option>
                                        <option>Property Management</option>
                                        <option>Investment Advisory</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gold-strong">Your Message</label>
                                <textarea
                                    rows={5}
                                    placeholder="Tell us more about what you're looking for..."
                                    className="w-full px-4 py-3 rounded-lg text-gold border border-black/40 focus:border-gold outline-none transition-colors resize-none"
                                ></textarea>
                            </div>
                            <button className="btn-primary w-full md:w-auto px-12 py-4 flex-center gap-2 text-sm uppercase tracking-widest">
                                <Send size={16} />
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Sidebar */}
                    <div className="lg:col-span-1 space-y-8">
                        <div className="bg-linear-to-l from-primary to-primary-light rounded-md border border-border p-8 shadow-sm space-y-8">
                            <h3 className="text-highlight! text-2xl border-b border-border pb-4">Information</h3>
                            <div className="space-y-6">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="text-gold mt-1">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <p className="font-bold text-base text-gold! uppercase tracking-wider">{item.title}</p>
                                            <p className="text-primary-light text-base">{item.details}</p>
                                            <p className="text-sm">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Links Placeholder */}
                        <div className="bg-linear-to-l from-primary to-primary-light rounded-lg p-8 text-white text-center space-y-4">
                            <h2 className=" text-xl">Follow Our Journey</h2>
                            <p className=" text-sm">Join our community on social media for the latest property listings and real estate insights.</p>
                            <div className="flex justify-center gap-4 pt-2">
                                <div className="h-10 w-10 rounded-full bg-white/10 flex-center cursor-pointer hover:bg-white/20 transition-colors border border-white/20">
                                    <span className="text-xs font-bold">IG</span>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-white/10 flex-center cursor-pointer hover:bg-white/20 transition-colors border border-white/20">
                                    <span className="text-xs font-bold">LI</span>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-white/10 flex-center cursor-pointer hover:bg-white/20 transition-colors border border-white/20">
                                    <span className="text-xs font-bold">FB</span>
                                </div>
                                <div className="h-10 w-10 rounded-full bg-white/10 flex-center cursor-pointer hover:bg-white/20 transition-colors border border-white/20">
                                    <span className="text-xs font-bold">X</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder Section */}
            <section className="h-100 w-full bg-border relative overflow-hidden flex-center grayscale">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-primary/20"></div>
                <div className="relative z-10 bg-white p-6 rounded-lg shadow-2xl border border-border text-center">
                    <MapPin size={32} className="text-gold mx-auto mb-2" />
                    <p className="font-bold text-primary!">Find us in Westlands</p>
                    <p className="text-xs text-primary!">Visit our headquarters for a coffee and a chat.</p>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;
