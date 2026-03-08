'use client'

import {useParams} from 'next/navigation'
import Image from 'next/image'
import {useState} from 'react'
import propertiesData from "@/app/data/properties.json"
import {BedSingle, Scan, MapPin, Phone, CheckCircle2, X, ChevronLeft, ChevronRight} from "lucide-react"
import Link from "next/link";

const PropertyPage = () => {
    const params = useParams()
    const id = parseInt(params.id as string)
    const property = propertiesData.find(p => p.id === id)
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

    const images = property?.gallery || (property?.image ? [property.image] : [])

    const handleNext = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % images.length)
        }
    }

    const handlePrev = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex - 1 + images.length) % images.length)
        }
    }

    if (!property) {
        return (
            <div className="flex-center min-h-[70vh] flex-col gap-4">
                <h2 className="text-3xl">Property Not Found</h2>
                <p className="text-muted">The property you are looking for does not exist.</p>
                <Link href="/properties" className="btn-primary">Back to Properties</Link>
            </div>
        )
    }

    return (
        <div className="min-h-screen pb-20">
            {/* Hero Image Section */}
            <div
                className="relative min-h-[70vh] md:h-[60vh] w-full cursor-pointer"
                onClick={() => setSelectedImageIndex(0)}
            >
                <Image
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/30"/>
                <div className="absolute bottom-10 left-0 w-full px-4">
                    <div
                        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                        <div>
                            <span className="tag mb-4 inline-block">{property.tag}</span>
                            <h1 className="text-4xl! md:text-7xl! text-white! leading-tight">
                                {property.name}
                            </h1>
                            <div className="flex items-center gap-2 text-white/90 mt-4">
                                <MapPin size={20} className="text-white"/>
                                <span className="text-base">{property.location}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-10">
                    {/* Features/Stats */}
                    <div className="md:flex-between flex-col md:flex-row space-y-6 border-b border-border pb-8">
                        <div className="flex flex-wrap">
                            <div className="flex flex-col gap-1">
                                <span className="text-muted text-xs uppercase font-medium">Bedrooms</span>
                                <div className="flex items-center gap-2">
                                    <BedSingle size={20} className="text-primary"/>
                                    <span className="text-xl font-bold">{property.rooms}</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1 border-l border-border pl-10">
                                <span className="text-muted text-xs uppercase font-medium">Area Size</span>
                                <div className="flex items-center gap-2">
                                    <Scan size={20} className="text-primary"/>
                                    <span className="text-xl font-bold">{property.size}</span>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-primary! text-2xl!">{property.currency} {property.price.toLocaleString()} /{property.rate}</h4>
                    </div>

                    {/* Description */}
                    <div>
                        <h2 className="mb-6">Description</h2>
                        <div className="space-y-4 leading-relaxed">
                            {property.description.split('\n').map((paragraph, index) => (
                                <p key={index}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Key Features */}
                    {property.features && (
                        <div>
                            <h2 className="mb-6">Key Features</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {property.features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-primary shrink-0"/>
                                        <p>{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Image Gallery */}
                    {property.gallery && (
                        <div>
                            <h2 className="mb-6">Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {property.gallery.map((img, index) => (
                                    <div
                                        key={index}
                                        className="relative h-64 w-full rounded-xl overflow-hidden group cursor-pointer"
                                        onClick={() => setSelectedImageIndex(index)}
                                    >
                                        <Image
                                            src={img}
                                            alt={`${property.name} gallery ${index + 1}`}
                                            fill
                                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Image Modal/Lightbox */}
                    {selectedImageIndex !== null && (
                        <div
                            className="fixed h-full inset-0 z-50 flex-center bg-black/90"
                            onClick={() => setSelectedImageIndex(null)}
                        >
                            <button
                                className="absolute top-30 right-6 text-white hover:text-accent transition-colors z-60 cursor-pointer"
                                onClick={() => setSelectedImageIndex(null)}
                            >
                                <X size={32}/>
                            </button>

                            {/* Previous Button */}
                            <button
                                className="absolute left-0 md:left-10 text-white hover:text-accent transition-colors z-60 cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrev();
                                }}
                            >
                                <ChevronLeft size={48}/>
                            </button>

                            {/* Next Button */}
                            <button
                                className="absolute right-0 md:right-10 text-white hover:text-accent transition-colors z-60 cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                            >
                                <ChevronRight size={48}/>
                            </button>

                            <div
                                className="relative w-full h-full max-w-7xl max-h-screen flex-center p-2 md:p-10"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={images[selectedImageIndex]}
                                    alt="Full screen view"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    )}

                    {/* Lease Terms */}
                    {property.terms && (
                        <div>
                            <h2 className="mb-6">Lease Terms</h2>
                            <div className="bg-secondary/50">
                                <ul className="space-y-3">
                                    {property.terms.map((term, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0"/>
                                            <p className="font-medium">{term}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}
                </div>

                {/* Sidebar / Contact Info */}
                <div className="lg:col-span-1">
                    <div className="bg-white p-8 rounded-xl shadow-lg border border-border sticky top-24">
                        <h3 className="mb-6">Interested?</h3>
                        <p className="text-foreground mb-8">Schedule a viewing or get more details about this property
                            today.</p>

                        <div className="space-y-4 mb-8">
                            <button className="w-full btn-primary py-4 text-sm flex-center gap-2">
                                <Phone size={16}/>
                                Call Agent
                            </button>
                            <button className="w-full btn-secondary py-4 text-sm border border-primary/20">
                                Send Message
                            </button>
                        </div>

                        <div className="pt-8 border-t border-border">
                            <div className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex-center">
                                    <span className="text-primary font-bold">OS</span>
                                </div>
                                <div>
                                    <p className="font-bold text-sm">OneStreet Real Estate</p>
                                    <p className="text-xs text-muted">Official Listing Agent</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyPage
