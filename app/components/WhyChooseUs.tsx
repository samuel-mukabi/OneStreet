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
        <section className="py-32 bg-white/70">
            <div className="max-w-7xl mx-auto px-4 space-y-15">
                <div className="space-y-4 max-w-2xl">
                    <span className="text-accent font-bold tracking-widest uppercase text-sm">Why Choose Us</span>
                    <h2 className="text-4xl md:text-6xl leading-tight">Elevating Your Real Estate Experience</h2>
                </div>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border overflow-hidden rounded-2xl border border-border">
                    {features.map((feature, index) => (
                        <div key={index}
                             className="p-12 bg-white hover:bg-white/50 transition-all duration-300 group">
                            <div
                                className="text-accent mb-8 transform group-hover:-translate-y-1 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                            <p className="text-muted text-sm leading-relaxed">
                                {feature.description}
                            </p>
                            <div
                                className="mt-8 pt-8 border-t border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span
                                    className="text-accent text-xs font-bold uppercase tracking-widest">Learn More</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
