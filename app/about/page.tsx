import Image from "next/image";
import {Users, Target, ShieldCheck, Award} from "lucide-react";
import Link from "next/link";

const AboutPage = () => {
    const values = [
        {
            icon: <ShieldCheck size={32}/>,
            title: "Integrity",
            desc: "We uphold the highest standards of transparency and ethics in every transaction."
        },
        {
            icon: <Target size={32}/>,
            title: "Precision",
            desc: "Meticulous attention to detail in property selection and client service."
        },
        {
            icon: <Users size={32}/>,
            title: "Client-Centric",
            desc: "Your dreams are our priority. We tailor our expertise to your unique lifestyle."
        },
        {
            icon: <Award size={32}/>,
            title: "Excellence",
            desc: "Setting the benchmark for luxury real estate services in East Africa."
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden px-4">
                <Image
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72"
                    alt="Modern Office Building"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 z-10"/>
                <div className="relative z-20 text-center space-y-4 max-w-4xl">
                    <h1 className="text-4xl! md:text-8xl! text-white!">Our Story</h1>
                    <p className="text-secondary max-w-2xl mx-auto text-base md:text-lg">
                        Redefining the standard of luxury living in Nairobi since 2015.
                    </p>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-24 max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">About OneStreet</span>
                        <h2 className="text-4xl md:text-5xl leading-tight">Elevating Real Estate to an Art Form</h2>
                        <p className="text-muted text-lg leading-relaxed">
                            OneStreet was founded on the belief that luxury is not just a price point, but an
                            experience.
                            We specialize in the most exclusive properties in Kenya, from the sprawling estates of Karen
                            to the avant-garde penthouses of Westlands.
                        </p>
                        <p className="text-muted text-lg leading-relaxed">
                            Our team of seasoned professionals brings decades of combined experience in market analysis,
                            investment strategy, and high-end property management, ensuring our clients make informed
                            decisions that build lasting wealth.
                        </p>
                        <div className="pt-4">
                            <Link href="/properties" className="btn-primary">Explore Our Collection</Link>
                        </div>
                    </div>
                    <div className="relative h-64 md:h-125 rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6"
                            alt="Luxury Interior"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 bg-white/70">
                <div className="max-w-7xl mx-auto px-4 space-y-15">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Philosophy</span>
                        <h2 className="text-4xl md:text-6xl leading-tight">The Principles That Guide Every
                            Transaction</h2>
                    </div>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border overflow-hidden rounded-2xl border border-border">
                        {values.map((value, index) => (
                            <div key={index}
                                 className="p-12 bg-white hover:bg-white/50 transition-all duration-300 group">
                                <div
                                    className="text-accent mb-8 transform group-hover:-translate-y-1 transition-transform duration-300">
                                    {value.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {value.desc}
                                </p>
                                <div
                                    className="mt-8 pt-8 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span
                                        className="text-accent text-xs font-bold uppercase tracking-widest">Read More</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-secondary/10 border-t border-accent/20 text-center space-y-8">
                <h2 className="text-3xl">Ready to find your dream home?</h2>
                <div className="flex justify-center gap-4">
                    <Link href="/properties" className="btn-primary">View Listings</Link>
                    <Link href="/contact" className="btn-secondary">Get in Touch</Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
