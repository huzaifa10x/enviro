import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="absolute w-full shadow-sm px-10 py-10 z-50">
            <div className='max-w-7xl mx-auto flex items-center justify-between'>
                <Link href='/'>
                    <Image
                        src={'/images/logo.webp'}
                        width={150}
                        height={300}
                        alt='logo'
                    />
                </Link>
                <div className="lg:flex hidden gap-6 font-medium text-white">
                    {
                        [
                            { 'id': 1, 'title': 'Services', 'url': '' },
                            { 'id': 2, 'title': 'Our Story', 'url': '/our-story/' },
                            { 'id': 3, 'title': 'FAQ', 'url': '' },
                            { 'id': 4, 'title': 'Blog', 'url': '' },
                            { 'id': 5, 'title': 'Contact', 'url': '' },
                        ].map(item => (
                            <a key={item.id} href={item.url} className="hover:text-green-300">{item.title}</a>
                        ))}
                </div>
                <button className="lg:block hidden px-4 py-1 rounded font-medium bg-secondary">Get In Touch</button>
                <Menu className='lg:hidden text-white' />
            </div>
        </nav >
    )
}