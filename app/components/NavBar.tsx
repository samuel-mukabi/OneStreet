import Link from "next/link";

const NavBar = () => {
    const navLinks = [
        {label: 'Home', href: '/'},
        {label: 'Properties', href: '/properties'},
        {label: 'About', href: '/about'},
        {label: 'Contact', href: '/contact'},
    ]

    return (
        <nav className='bg-background h-20 top-0 z-1000 sticky border-b border-border'>
            <div className='max-w-7xl mx-auto h-full flex-between'>
                <Link href="/" className='logo'>ONESTREET</Link>
                <div className='flex-between gap-8 text-xs'>
                    {navLinks.map((nav) => (
                        <Link href={nav.href} key={nav.label} className='links'>{nav.label}</Link>
                    ))}
                </div>
                <div className="flex-between gap-8">
                    <h6 className="cursor-pointer">+(254)-742479092</h6>
                    <button className="btn-primary">Schedule Viewing</button>
                </div>
            </div>
        </nav>
    )
}
export default NavBar
