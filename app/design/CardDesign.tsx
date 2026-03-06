import Image from "next/image";
import {BedSingle, Scan} from "lucide-react";

export interface Property {
    id: number;
    image: string;
    tag: string;
    price: number;
    name: string;
    location: string;
    rooms: number;
    size: number;
}

const CardDesign = ({ property }: { property: Property }) => {
    return (
        <div className='h-auto w-full rounded-lg overflow-hidden border border-border shadow-sm group'>
            <div className="relative h-64 w-full">
                <Image 
                    src={property.image} 
                    alt={property.name} 
                    fill 
                    className='object-cover'
                />
                <div className="absolute top-2 left-2 tag">
                    {property.tag}
                </div>
            </div>
            <div className="p-4">
                <h3 className="">{property.name}</h3>
                <p className="text-gray-500 text-sm">{property.location}</p>
                <div className="mt-2 flex-between">
                    <span className="text-accent font-bold">Ksh {property.price.toLocaleString()}</span>
                    <div className="text-gray-600 text-xs flex-between gap-1">
                            <span className="flex-between gap-1"><BedSingle size={16}/> {property.rooms} Rooms</span>
                        .
                            <span className="flex-between gap-1"><Scan size={16}/> {property.size} m²</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDesign
