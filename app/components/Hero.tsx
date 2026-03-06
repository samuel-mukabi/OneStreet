import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <div className='h-[calc(100vh-5rem)] relative overflow-hidden'>
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-black/50 z-10"></div>
                <Image src={'/image/Real Estate Picture.jpg'}
                       alt={'Real Estate Picture.jpg'}
                       fill
                       className={'object-cover'}
                       priority/>
            </div>
            <div className="absolute inset-0 z-20 flex items-center top-1/12 flex-col space-y-10 max-w-4xl mx-auto text-center">
                <h1>Extraordinary Homes for Extraordinary Lives</h1>
                <h5 className='max-w-2xl'>Discover an unparalleled collection of luxury properties curated by Kenya&#39;s most trusted real estate firm.</h5>
                <div className="flex-between max-w-2xl gap-10">
                    <Link href='/' className="btn-primary">View Properties</Link>
                    <Link href='/' className="btn-secondary">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}
export default Hero
