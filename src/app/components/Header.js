"use client"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"

export default function Header() {
  const [header, setHeader] = useState(false)
  const [nav, setNav] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true) 

  // Képernyőméret kezelése
  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1300)
    }

    // Azonnal ellenőrizd
    checkScreenSize()

    // Event listener hozzáadása
    window.addEventListener('resize', checkScreenSize)

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Scroll 
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
    if (isDesktop) {
      setNav(false)
    }
  }, [isDesktop])

  // Navigáció
  const navLinks = [
    { name: 'HOME', href: 'home' },
    { name: 'CARS', href: 'cars' },
    { name: 'ABOUT', href: 'about' },
    { name: 'WHY US', href: 'why' },
    { name: 'TESTIMONIAL', href: 'testimonial' },
    { name: 'CONTACT', href: 'cta' },
  ]

  // Anchor navigáció 
  const handleNavClick = (sectionId) => {
    setNav(false) // Mobil menü bezárása
    
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const offsetTop = element.offsetTop - 80 // Header magassága miatt offset
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      } else {
        console.log(`Element with id '${sectionId}' not found`)
      }
    }, 100)
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        header ? 'bg-white/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className='max-w-[1300px] mx-auto px-4 xl:px-0 flex items-center justify-between h-full'>
        {/* Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className='flex items-center cursor-pointer'
        >
          <div className={`text-2xl font-bold transition-colors duration-300 ${
            header ? 'text-black' : 'text-black'
          }`}>
            <Image
              src='/icons/logo.svg'
              alt='CarLand Logo'
              width={200}
              height={50}
              className='h-12 w-auto'
              priority 
            />
          </div>
        </button>

        {/* Asztali navigáció */}
        {isDesktop && (
          <nav className='flex items-center gap-8'>
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`transition-colors duration-300 font-medium hover:text-red-600 ${
                  header ? 'text-black' : 'text-black'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>
        )}

        {/* Asztali, RESERVE NOW */}
        {isDesktop && (
          <button 
            onClick={() => handleNavClick('cars')}
            className={`flex px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
              header 
                ? 'bg-red-600 text-white hover:bg-red-700' 
                : 'bg-black text-white hover:bg-red-700'
            }`}
          >
            Reserve Now
          </button>
        )}

        {/* Mobil Gomb */}
        {!isDesktop && (
          <button
            onClick={() => setNav(!nav)}
            className={`text-3xl transition-colors duration-300 ${
              header ? 'text-black' : 'text-black'
            }`}
          >
            {nav ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </button>
        )}

        {/* Mobil menü */}
        {!isDesktop && nav && (
          <nav className='absolute left-0 right-0 top-full mt-0 bg-white shadow-lg border-t'>
            <div className='flex flex-col items-center gap-6 py-6 px-4'>
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className='text-black hover:text-red-600 transition-colors duration-300 font-medium text-lg'
                >
                  {link.name}
                </button>
              ))}
              <button 
                onClick={() => handleNavClick('cars')}
                className='bg-black text-white hover:bg-red-700 px-6 py-2 rounded-lg font-medium transition-colors duration-300 w-full max-w-[200px]'
              >
                Reserve Now
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}