import propertiesData from "@/app/data/properties.json";
import CardDesign from "@/app/design/CardDesign";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

const Featured = () => {
    return (
        <section className='max-w-7xl mx-auto py-20 flex flex-col space-y-5 h-180'>
            <div className='flex-between flex-row mb-15'>
                <h2 className="text-2xl">Featured Properties</h2>
                <div className="flex-between gap-2 group">
                    <Link href={'/properties'} className="btn-tertiary">View All</Link>
                    <ArrowRight size={16} className="text-accent group-hover:translate-x-1 transition-transform"/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {propertiesData.slice(0, 3).map((property) => (
                    <div key={property.id}
                         className="h-full w-full rounded-lg overflow-hidden border border-border shadow-sm group">
                        <Link href={`/properties/${property.id}`}>
                            <CardDesign property={property}/>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Featured
