import Image from "next/image";
import {BedSingle, MapPinned, Scan} from "lucide-react";

export interface Property {
    id: number;
    image: string;
    tag: string;
    currency: string;
    price: number;
    rate: string;
    name: string;
    location: string;
    rooms: number;
    size: string;
    baths: number;
    description: string;
}

const CardDesign = ({property}: { property: Property }) => {
    return (
        <div className='h-auto w-full rounded-lg overflow-hidden shadow-sm group'>
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
            <div className="p-4 bg-primary-black/70!">
                <h3 className="">{property.name}</h3>
                <div className="flex items-center gap-2">
                    <MapPinned size={16} className="text-highlight"/>
                    <p className="text-primary-light text-sm">{property.location}</p>
                </div>
                <div className="mt-2 flex-between">
                    <span className="text-gold font-bold">{property.currency} {property.price.toLocaleString()} /{property.rate}</span>
                    <div className="text-highlight text-xs flex-between gap-1">
                        <span className="flex-between gap-1"><BedSingle size={16}/> {property.rooms} Rooms</span>
                        .
                        <span className="flex-between gap-1"><Scan size={16}/> {property.size}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDesign
