const Stats = () => {
    const stats = [
        { label: "Properties Sold", value: "1,200+" },
        { label: "Active Listings", value: "350+" },
        { label: "Satisfied Clients", value: "2,500+" },
        { label: "Years Experience", value: "12+" }
    ];

    return (
        <section className="py-20 glass border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <h4 className="text-5xl font-bold tracking-tighter text-accent italic">
                                {stat.value}
                            </h4>
                            <p className="text-white/60 uppercase text-xs tracking-widest font-medium">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
