'use client'

import CardDesign from "@/app/design/CardDesign";
import propertiesData from "@/app/data/properties.json";
import Link from "next/link";
import {useState} from "react";

const Page = () => {
    const tags = ['all', 'penthouse', 'villa', 'townhouse', 'waterfront', 'brownstone', 'condo']
    const [active, setActive] = useState('all')

    return (
        <div className='min-h-dvh w-screen'>
            <div className='h-30 flex justify-center flex-col max-w-7xl mx-auto'>
                <h2 className="text-2xl">Properties</h2>
            </div>
            <div>
                <hr/>
                <div className="flex justify-between items-center gap-4 h-15 w-1/3 ml-46">
                    {tags.map((tag) => (
                        <button
                            key={tag}
                            onClick={() => setActive(tag)}
                            className={`btn-secondary capitalize ${active === tag ? 'tag-btn-active' : ''}`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                <hr/>
            </div>
            <div className="max-w-7xl mx-auto h-full my-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
                    {propertiesData
                        .filter(property => active === 'all' || property.tag === active)
                        .map((property) => (
                            <Link href={`/properties/${property.id}`} key={property.id}>
                                <CardDesign property={property}/>
                            </Link>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default Page
