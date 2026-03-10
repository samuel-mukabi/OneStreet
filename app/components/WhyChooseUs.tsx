import { Shield, Clock, Award, Users } from "lucide-react";

const WhyChooseUs = () => {
    const features = [
        {
            icon: <Shield size={32} />,
            title: "Trusted Security",
            description: "We uphold the highest standards of transparency and ethics in every transaction."
        },
        {
            icon: <Clock size={32} />,
            title: "Quick Response",
            description: "Our agents are available around the clock to assist you with your property needs."
        },
        {
            icon: <Award size={32} />,
            title: "Premium Quality",
            description: "We only list the most exclusive and well-maintained properties across Kenya."
        },
        {
            icon: <Users size={32} />,
            title: "Expert Guidance",
            description: "Our team of seasoned professionals provides expert advice throughout your journey."
        }
    ];

    return (
        <section className="bg-linear-to-l from-primary to-primary-light min-h-200 flex-center flex-col py-24">
            <div className="max-w-7xl mx-auto px-4 space-y-16 relative z-10">
                <div className="space-y-4 max-w-2xl">
                    <span className="text-gold font-bold tracking-widest uppercase text-sm drop-shadow-md">Why Choose Us</span>
                    <h2 className="text-4xl md:text-6xl leading-tight text-white drop-shadow-xl">Elevating Your Real Estate Experience</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index}
                            className="p-10 glass rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:-translate-y-2 cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div
                                className="text-gold mb-8 transform group-hover:scale-110 transition-transform duration-300 relative z-10">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-highlight/80! relative z-10">{feature.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed relative z-10">
                                {feature.description}
                            </p>
                            <div
                                className="mt-8 pt-8 border-t border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10">
                                <span
                                    className="text-gold text-xs font-bold uppercase tracking-widest">Learn More</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
