'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FiPhone, FiMail } from 'react-icons/fi'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <footer className='bg-linear-to-b from-white to-primary/5 text-black pt-16 pb-6'>
      <div className='max-w-[1300px] mx-auto px-4 xl:px-0'>
        {/*  */}
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-12'>
         
          <div className='flex flex-col gap-6'>
            <Image
              src='/icons/logo.svg'
              alt='CarLand Logo'
              width={150}
              height={40}
              className='h-10 w-auto'
            />
            <p className='text-gray-700 text-sm leading-relaxed'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className='flex flex-col gap-3'>
              <a href='tel:+12134567890' className='flex items-center gap-3 text-black hover:text-accent transition-colors'>
                <FiPhone className='text-lg' />
                <span>(123) 456-7890</span>
              </a>
              <a href='mailto:office@carland.com' className='flex items-center gap-3 text-black hover:text-accent transition-colors'>
                <FiMail className='text-lg' />
                <span>office@carland.com</span>
              </a>
            </div>
          </div>

          {/*LINKS*/}
          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-bold text-black'>Company</h3>
            <ul className='flex flex-col gap-3'>
              <li>
                <Link href='#' className='text-black hover:text-accent transition-colors'>
                  New York
                </Link>
              </li>
              <li>
                <Link href='#' className='text-black hover:text-accent transition-colors'>
                  Careers
                </Link>
              </li>
              <li>
                <Link href='#' className='text-black hover:text-accent transition-colors'>
                  Mobile
                </Link>
              </li>
              <li>
                <Link href='#' className='text-black hover:text-accent transition-colors'>
                  Blog
                </Link>
              </li>
              <li>
                <Link href='#' className='text-black hover:text-accent transition-colors'>
                  How we work
                </Link>
              </li>
            </ul>
          </div>

          {/*DATE, WORKING HOURS */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-bold text-black'>Working Hours</h3>
            <ul className='flex flex-col gap-3 text-sm'>
              <li className='text-black'>
                <span className='font-semibold'>Mon-Fri:</span> 09:00AM - 09:00PM
              </li>
              <li className='text-black'>
                <span className='font-semibold'>Sat:</span> 09:00AM - 07:00PM
              </li>
              <li className='text-black'>
                <span className='font-semibold'>Sun:</span> Closed
              </li>
            </ul>
          </div>

          {/* SUBMIT */}
          <div className='flex flex-col gap-4'>
            <h3 className='text-lg font-bold text-black'>Newsletter</h3>
            <p className='text-black text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <form onSubmit={handleNewsletterSubmit} className='flex flex-col gap-2'>
              <input
                type='email'
                placeholder='Your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='px-4 py-2 rounded text-black focus:outline-none focus:ring-2 focus:ring-accent bg-white'
              />
              <button
                type='submit'
                className='bg-accent text-white px-4 py-2 rounded font-semibold hover:bg-accent-hover transition-colors'
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>

        <div className='border-t border-gray-300 pt-6 text-center'>
          {/* Copyright */}
          <p className='text-black text-sm'>
            Copyright © CarLand 2025. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
