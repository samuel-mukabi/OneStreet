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
        <section className="py-20 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl leading-tight">Comprehensive Real Estate Solutions</h2>
                    <p className="text-muted text-base">
                        OneStreet is more than just an agency; we are your end-to-end partner in luxury living. 
                        Whether you are looking to invest, relocate, or manage your assets, our team delivers world-class service.
                    </p>
                    <div className="flex gap-4">
                        <Link href="/properties" className="btn-primary">View All Services</Link>
                        <button className="btn-secondary">Get In Touch</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="p-8 rounded-lg border border-border bg-white hover:border-accent hover:shadow-lg transition-all space-y-4">
                            <div className="text-accent">{service.icon}</div>
                            <h3 className="text-xl font-bold">{service.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
