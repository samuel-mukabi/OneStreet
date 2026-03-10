import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className='h-[calc(100vh-5rem)] relative overflow-hidden'>
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-black/60 to-primary/20 z-10"></div>
                <Image src={'/images/hero.jpg'}
                       alt={'Real Estate Picture.jpg'}
                       fill
                       className={'object-cover'}
                       priority/>
            </div>
            <div
                className="absolute inset-0 z-20 flex-center -top-1/4 md:-top-1/3 pt-20 flex-col space-y-10  md:max-w-4xl mx-auto text-center px-4">
                <h1 className="text-5xl! md:text-8xl!">Where Exceptional Living Begins</h1>
                <h5 className='max-w-2xl text-sm! md:text-lg!'>Explore curated homes in prime locations, combining quality, comfort, and timeless design for modern living</h5>
                <div className="flex-center flex-col sm:flex-row gap-4 sm:gap-10 w-2/3 sm:w-auto">
                    <Link href='/properties' className="btn-primary w-full sm:w-auto text-center">View Properties</Link>
                    <Link href='/contact' className="btn-secondary w-full sm:w-auto text-center">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}
export default Hero
