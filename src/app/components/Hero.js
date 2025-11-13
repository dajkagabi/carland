'use client'

import Image from 'next/image'
import { useState } from 'react'
import { BsCalendarWeek } from 'react-icons/bs'
import { BiMap } from 'react-icons/bi'
import { BiTime } from 'react-icons/bi'

export default function Hero() {
  const [location, setLocation] = useState('')
  const [pickupDate, setPickupDate] = useState('')
  const [pickupTime, setPickupTime] = useState('')

  //Nincs adatbázis, manuális tartalom feltöltés
  const locations = [
    'New York - Manhattan',
    'Los Angeles - Downtown',
    'Chicago - O\'Hare Airport',
    'Miami - Beach Area',
    'San Francisco - Bay Area',
    'Boston - Logan Airport',
    'Las Vegas - Strip',
    'Seattle - Downtown',
  ]

  //Keresési logika
  const handleSearch = (e) => {
    e.preventDefault()
    console.log({ location, pickupDate, pickupTime })
  
  }

  return (
    <section id='home' className='min-h-screen bg-linear-to-b from-primary/10 to-white flex items-center pt-45'>
      <div className='max-w-[1300px] mx-auto w-full px-4 xl:px-0'>
      
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12'>
         
          <div className='flex flex-col gap-6'>
            <div>
              <h1 className='h1 mb-4'>
                Premium Car Rental Experience
              </h1>
              <p className='description text-secondary max-w-md'>
                Discover our exclusive fleet of premium vehicles. Whether you're planning a business trip or a weekend getaway, we have the perfect car for you. Experience luxury, comfort, and reliability with our professional service.
              </p>
            </div>

            {/* Leírás */}
            <div className='flex flex-col gap-4'>
              <div className='flex items-center gap-3'>
                <div className='w-4 h-4 bg-accent rounded-full'></div>
                <span className='text-secondary font-medium'>Wide selection of premium vehicles</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-4 h-4 bg-accent rounded-full'></div>
                <span className='text-secondary font-medium'>24/7 customer support</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-4 h-4 bg-accent rounded-full'></div>
                <span className='text-secondary font-medium'>Best prices guaranteed</span>
              </div>
            </div>
          </div>

          {/*Hero */}
          <div className='relative h-96 flex items-center justify-center'>
            <div className='relative w-full h-full'>
              <Image
                src='/images/hero/car.svg'
                alt='Premium Car'
                fill
                className='object-contain'
                priority
              />
            </div>
          </div>
        </div>

        {/* Search Form */}
        <div className='bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto'>
          <form onSubmit={handleSearch} className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {/* Location Input */}
            <div className='flex flex-col gap-2'>
              <label className='text-primary font-semibold text-xs flex items-center gap-2'>
                <BiMap className='text-accent text-lg' />
                Pick-up Location
              </label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition-colors text-sm'
              >
                <option value=''>Select location...</option>
                {locations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Date Input */}
            <div className='flex flex-col gap-2'>
              <label className='text-primary font-semibold text-xs flex items-center gap-2'>
                <BsCalendarWeek className='text-accent text-lg' />
                Pick-up Date
              </label>
              <input
                type='date'
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition-colors text-sm'
              />
            </div>

            {/* Time Input */}
            <div className='flex flex-col gap-2'>
              <label className='text-primary font-semibold text-xs flex items-center gap-2'>
                <BiTime className='text-accent text-lg' />
                Pick-up Time
              </label>
              <input
                type='time'
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className='px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-accent transition-colors text-sm'
              />
            </div>
          </form>

          <button
            onClick={handleSearch}
            className='btn btn-sm btn-cta mt-4'
          >
            Search Cars
          </button>
        </div>
      </div>
    </section>
  )
}
