"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

export default function Header() {
  const [header, setHeader] = useState(false)
  const [nav, setNav] = useState(false)

  const desktopMode = useMediaQuery({
    query: '(min-width: 1300px)',
  })

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true)
      } else {
        setHeader(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Csukva
  useEffect(() => {
    if (desktopMode) {
      setNav(false)
    }
  }, [desktopMode])

  // Navigációs linkek
  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'CARS', href: '#cars' },
    { name: 'ABOUT', href: '#about' },
    { name: 'WHY US', href: '#why' },
    { name: 'TESTIMONIALS', href: '#testimonial' },
    { name: 'CONTACT', href: '#contact' },
    { name: 'SEARCHMOBILE', href: '#searchmobile' },
  ]

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        header ? 'bg-white/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className='max-w-[1300px] mx-auto px-4 xl:px-0 flex items-center justify-between h-full'>
        {/* Logo */}
        <Link href='#' className='flex items-center'>
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            header ? 'text-black' : 'text-black'
          }`}>
             <Image
            src='/icons/logo.svg'
            alt='CarLand Logo'
            width={200}
            height={50}
            className='h-12 w-auto'
          />

          </div>
        </Link>

        {/* Asztali navigáció */}
        {desktopMode && (
          <nav className='hidden lg:flex items-center gap-8'>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 font-medium hover:text-red-600 ${
                  header ? 'text-black' : 'text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        )}

        {/* Asztali, RESERVE NOW */}
        {desktopMode && (
          <button className={`hidden lg:flex px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
            header 
              ? 'bg-red-600 text-black hover:bg-red-700' 
              : 'bg-black text-white hover:bg-red-700'
          }`}>
            Reserve Now
          </button>
        )}

        {/* Mobil Gomb */}
        {!desktopMode && (
          <button
            onClick={() => setNav(!nav)}
            className={`text-3xl lg:hidden transition-colors duration-300 ${
              header ? 'text-black' : 'text-black'
            }`}
          >
            {nav ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
        )}

        {/* Mobil  */}
        {!desktopMode && nav && (
          <nav className='absolute left-0 right-0 top-full mt-0 bg-white shadow-lg border-t'>
            <div className='flex flex-col items-center gap-6 py-6 px-4'>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setNav(false)}
                  className='text-black hover:text-red-600 transition-colors duration-300 font-medium text-lg'
                >
                  {link.name}
                </Link>
              ))}
              <button className='bg-black text-white hover:bg-red-700 px-6 py-2 rounded-lg font-medium  transition-colors duration-300 w-full max-w-[200px]'>
                Reserve Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}