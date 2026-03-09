import propertiesData from "@/app/data/properties.json";
import CardDesign from "@/app/design/CardDesign";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Featured = () => {
    return (
        <section className='min-h-180 flex-center flex-col'>
            <div className="flex flex-col w-full max-w-7xl mx-auto px-4">
                <div className='flex justify-between items-center mb-10'>
                    <h2 className="text-2xl">Featured Properties</h2>
                    <div className="flex-between gap-2 group">
                        <Link href={'/properties'} className="btn-tertiary">View All</Link>
                        <ArrowRight size={16}
                                    className="text-gold group-hover:text-gold-strong group-hover:translate-x-1 transition-transform"/>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {propertiesData.slice(0, 3).map((property) => (
                        <Link href={`/properties/${property.id}`} key={property.id} className="block h-full group">
                            <CardDesign property={property}/>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}
export default Featured
