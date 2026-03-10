import { Home, Key, Layout, Handshake } from "lucide-react";
import Link from "next/link";

const Services = () => {
    const services = [
        {
            icon: <Home size={28} />,
            title: "Property Buy & Sell",
            desc: "Expert guidance on navigating the luxury real estate market with ease."
        },
        {
            icon: <Key size={28} />,
            title: "Property Rentals",
            desc: "Find your next high-end home in Nairobi's most prestigious locations."
        },
        {
            icon: <Layout size={28} />,
            title: "Real Estate Management",
            desc: "Worry-free property management services for local and international owners."
        },
        {
            icon: <Handshake size={28} />,
            title: "Investment Advisory",
            desc: "Strategic advice to maximize returns on your property investment portfolio."
        }
    ];

    return (
        <section className="py-24 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-6xl leading-tight text-white drop-shadow-xl">Comprehensive Real Estate Solutions</h2>
                    <p className="text-white/80 text-lg leading-relaxed">
                        OneStreet is more than just an agency; we are your end-to-end partner in luxury living.
                        Whether you are looking to invest, relocate, or manage your assets, our team delivers world-class service.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link href="/properties" className="btn-primary flex-center">View All Services</Link>
                        <Link href="/contact" className="btn-secondary flex-center">Get In Touch</Link>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/10 blur-3xl rounded-full mix-blend-screen pointer-events-none"></div>
                    {services.map((service, index) => (
                        <div key={index} className={`p-8 rounded-3xl glass hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 space-y-5 cursor-pointer flex flex-col justify-start relative z-10 ${index % 2 !== 0 ? 'sm:mt-12' : ''}`}>
                            <div className="h-14 w-14 rounded-2xl glass flex-center text-gold shadow-inner border border-accent/20">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold  text-highlight/80!">{service.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
