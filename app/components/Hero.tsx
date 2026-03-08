import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className='h-[calc(100vh-5rem)] relative overflow-hidden'>
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <Image src={'/image/Bungalow House Landscape.jpg'}
                       alt={'Real Estate Picture.jpg'}
                       fill
                       className={'object-cover'}
                       priority/>
            </div>
            <div className="absolute inset-0 z-20 flex-center -top-1/4 md:-top-1/2 pt-20 flex-col space-y-10  md:max-w-4xl mx-auto text-center px-4">
                <h1 className="text-6xl! md:text-8xl!">Extraordinary Homes for Extraordinary Lives</h1>
                <h5 className='max-w-2xl text-sm md:text-base'>Discover an unparalleled collection of luxury properties curated by Kenya&#39;s most trusted real estate firm.</h5>
                <div className="flex-center flex-col sm:flex-row gap-4 sm:gap-10 w-full sm:w-auto">
                    <Link href='/properties' className="btn-primary w-full sm:w-auto text-center">View Properties</Link>
                    <Link href='/contact' className="btn-secondary w-full sm:w-auto text-center">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}
export default Hero
