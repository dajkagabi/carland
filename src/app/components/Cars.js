'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Cars() {
  // Brand 
  const brands = [
    { name: 'Ford', logo: '/icons/brands/ford.svg' },
    { name: 'Mercedes', logo: '/icons/brands/mercedes.svg' },
    { name: 'Audi', logo: '/icons/brands/audi.svg' },
    { name: 'BMW', logo: '/icons/brands/bmw.svg' },
    { name: 'Volkswagen', logo: '/icons/brands/vw.svg' },
    { name: 'Skoda', logo: '/icons/brands/skoda.svg' },
    { name: 'Mazda', logo: '/icons/brands/mazda.svg' },
  ]

  // 
  const cars = [
    {
      id: 1,
      name: 'Toyota Corolla',
      category: 'Sedan',
      price: '$35/day',
      rating: 5,
      image: '/images/carSlider/toyota.png',
      features: {
        doors: 4,
        seats: 5,
        fuel: 'Hybrid',
        engine: '1.8L',
        transmission: 'Auto',
        drive: 'FWD'
      }
    },
    {
      id: 2,
      name: 'Honda CR-V',
      category: 'SUV',
      price: '$45/day',
      rating: 5,
      image: '/images/carSlider/honda-cr-v.png',
      features: {
        doors: 4,
        seats: 5,
        fuel: 'Petrol',
        engine: '1.5L Turbo',
        transmission: 'Auto',
        drive: 'AWD'
      }
    },
    {
      id: 3,
      name: 'BMW 3 Series',
      category: 'Premium',
      price: '$65/day',
      rating: 5,
      image: '/images/carSlider/bmw3.png',
      features: {
        doors: 4,
        seats: 5,
        fuel: 'Diesel',
        engine: '2.0L',
        transmission: 'Auto',
        drive: 'RWD'
      }
    },
    {
      id: 4,
      name: 'Ford Focus',
      category: 'Economy',
      price: '$29/day',
      rating: 4,
      image: '/images/carSlider/ford-f.png',
      features: {
        doors: 4,
        seats: 5,
        fuel: 'Petrol',
        engine: '1.0L EcoBoost',
        transmission: 'Manual',
        drive: 'FWD'
      }
    },
    {
      id: 5,
      name: 'Mercedes C-Class',
      category: 'Luxury',
      price: '$75/day',
      rating: 5,
      image: '/images/carSlider/mercedes.png',
      features: {
        doors: 4,
        seats: 5,
        fuel: 'Petrol',
        engine: '2.0L Turbo',
        transmission: 'Auto',
        drive: 'RWD'
      }
    },
  ]

  // SVG 
  const SeatIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_145_42684)">
        <path d="M15.9192 9.28439C15.804 8.79361 15.4328 8.40998 14.9504 8.28318C14.4476 8.15118 13.5944 7.99316 12.3796 7.99316C12.2368 7.99316 12.1448 7.99598 12.1268 7.99677L12.0156 8.00118L11.8804 7.99677C11.8624 7.99598 11.7684 7.99316 11.6196 7.99316C10.4052 7.99316 9.55157 8.15118 9.04917 8.28318C8.56635 8.40998 8.19514 8.79361 8.07997 9.28397L6.90795 14.2664C6.85236 14.5004 6.84237 14.7312 6.87715 14.9524C6.89717 15.0796 6.91915 15.2012 6.94236 15.3168C7.07876 15.9952 7.71917 16.4428 8.39957 16.3716V15.1996C8.39957 14.9784 8.57835 14.7996 8.79955 14.7996C9.02076 14.7996 9.19954 14.9784 9.19954 15.1996V16.2408C9.46832 16.1968 9.73476 16.1596 9.99956 16.1276V14.7996C9.99956 14.5784 10.1783 14.3997 10.3995 14.3997C10.6208 14.3997 10.7995 14.5784 10.7995 14.7996V16.0505C11.0691 16.0304 11.3356 16.0173 11.5996 16.0105V14.3997C11.5996 14.1785 11.7783 13.9997 11.9995 13.9997C12.2207 13.9997 12.3995 14.1785 12.3995 14.3997V16.0105C12.6635 16.0173 12.9299 16.0305 13.1995 16.0505V14.7996C13.1995 14.5784 13.3783 14.3997 13.5995 14.3997C13.8207 14.3997 13.9995 14.5784 13.9995 14.7996V16.1277C14.2647 16.1597 14.5311 16.1965 14.7995 16.2404V15.1996C14.7995 14.9784 14.9783 14.7996 15.1995 14.7996C15.4207 14.7996 15.5995 14.9784 15.5995 15.1996V16.3717C16.2787 16.4424 16.9203 15.9952 17.0571 15.3169C17.0799 15.2016 17.1019 15.0805 17.1223 14.9533C17.1571 14.7317 17.1463 14.5004 17.0915 14.2664L15.9192 9.28439Z" fill="currentColor"/>
        <path d="M20.2834 15.4521C20.383 14.8189 20.357 14.1733 20.2066 13.5337L18.7818 7.48125C18.3346 6.04522 16.733 5.37163 15.1998 5.05845V4.00001H16.325C16.7462 4.00001 17.1402 3.79319 17.3802 3.44721C17.6198 3.1016 17.6742 2.65961 17.5266 2.26642L16.989 0.832411C16.8022 0.334408 16.3194 0 15.7878 0H8.21177C7.68016 0 7.19735 0.334408 7.01017 0.832786L6.47256 2.266C6.32495 2.65961 6.37975 3.1016 6.61937 3.44721C6.85895 3.79319 7.25336 4.00001 7.67416 4.00001H8.79978V5.06244C7.26217 5.37964 5.66054 6.06004 5.21016 7.50806L3.79251 13.5337C3.64209 14.1733 3.6165 14.8189 3.71653 15.4525C4.17933 18.3849 5.41655 20.0001 7.19974 20.0001H7.27014L7.33614 19.9761C7.35733 19.9685 9.50577 19.2001 11.9998 19.2001C14.4934 19.2001 16.6418 19.9685 16.6634 19.9761L16.7294 20.0001H16.7998C18.583 20.0001 19.8202 18.3849 20.2834 15.4521ZM9.59975 4.00001H14.3998V4.92401C13.149 4.75559 12.1034 4.796 12.0178 4.8004C11.9166 4.7952 10.859 4.75479 9.59975 4.9264V4.00001ZM17.9126 15.0785C17.8902 15.2177 17.867 15.3497 17.8414 15.4749C17.6382 16.4861 16.7418 17.1865 15.7414 17.1865C15.6018 17.1865 15.4598 17.1725 15.3174 17.1441C14.1738 16.9157 13.0578 16.8001 11.9998 16.8001C10.9418 16.8001 9.82578 16.9157 8.68259 17.1441C7.52097 17.3777 6.38936 16.6269 6.15779 15.4741C6.13257 15.3485 6.109 15.2169 6.08739 15.0777C6.0362 14.7537 6.05017 14.4189 6.12901 14.0833L7.30141 9.10126C7.4846 8.32167 8.07621 7.71206 8.84581 7.51003C9.39341 7.36561 10.3198 7.19362 11.6198 7.19362C11.7858 7.19362 11.8906 7.19723 11.9126 7.19803L12.0166 7.20243L12.091 7.19803C12.1043 7.19723 12.2106 7.19362 12.3798 7.19362C13.6798 7.19362 14.6058 7.36561 15.1542 7.51003C15.923 7.71201 16.515 8.32163 16.6983 9.10163L17.8707 14.0833C17.9494 14.4189 17.9634 14.7537 17.9126 15.0785Z" fill="currentColor"/>
        <path d="M3.50369 17.8105C3.21367 17.9173 2.91807 18.0758 2.6657 18.315C2.22371 18.733 1.99969 19.2998 2.00049 20.0222C2.00208 20.0606 2.26407 23.7818 6.79972 23.9898V20.775C5.76931 20.6614 4.3721 20.051 3.50369 17.8105Z" fill="currentColor"/>
        <path d="M11.9997 20C9.67084 20 7.62722 20.7216 7.6072 20.7288L7.59961 20.7316V24.0001H16.3996V20.7313L16.3916 20.7284C16.372 20.7216 14.3285 20 11.9997 20Z" fill="currentColor"/>
        <path d="M21.3337 18.315C21.0809 18.0758 20.7853 17.917 20.4957 17.8105C19.627 20.051 18.2301 20.6614 17.1997 20.775V23.9898C21.7349 23.7818 21.9969 20.0602 21.9997 19.9998C21.9997 19.2998 21.7753 18.733 21.3337 18.315Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_145_42684">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )

  const FuelIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_145_42681)">
        <path d="M22.6471 7.4348C22.3051 7.0357 22.0789 6.80545 21.6709 6.38723C20.3617 5.04788 19.1776 3.86334 19.1763 3.86213L18.5861 3.2715L17.7689 4.06959L19.4592 6.63511L19.4768 6.67097C19.4857 6.69867 19.4943 6.74437 19.4943 6.80344C19.4967 6.93019 19.4486 7.11323 19.3781 7.23998L19.2297 7.51308C19.0581 7.82977 18.9619 8.50275 18.9623 8.85248C18.9619 9.18914 19.0418 9.52749 19.202 9.83602L19.4943 10.3997C19.8362 11.0593 20.4949 11.4848 21.2282 11.541L21.3689 11.5851C21.3689 13.4401 21.3689 15.7524 21.3689 17.5305C21.3664 18.0481 21.2144 18.3563 21.046 18.5446C20.8748 18.7317 20.6726 18.8087 20.4876 18.8092C20.3082 18.8059 20.1493 18.746 19.9993 18.5772C19.8525 18.4077 19.7009 18.0946 19.6993 17.5305C19.6993 15.8609 19.6993 15.4435 19.6993 14.4C19.6988 14.0666 19.632 13.7365 19.5097 13.4169C19.3255 12.9392 19.0128 12.4794 18.5559 12.124C18.1022 11.7685 17.4929 11.5337 16.8109 11.5362C16.731 11.5362 16.6504 11.5407 16.5689 11.5468V2.24794C16.5689 1.00636 15.5625 0 14.3209 0H4.45884C3.21727 0 2.21091 1.00636 2.21091 2.24794V21.287H0.75V24H18.0297V21.287H16.5689V13.2269C16.6552 13.2143 16.7376 13.2057 16.8109 13.2057C17.0217 13.2065 17.1864 13.2493 17.331 13.3182C17.5463 13.421 17.7236 13.5946 17.8479 13.8033C17.973 14.0087 18.0317 14.2468 18.0297 14.4C18.0297 15.4435 18.0297 15.8609 18.0297 17.5305C18.0281 18.4003 18.2787 19.1438 18.7389 19.6724C19.1955 20.2023 19.848 20.4824 20.4876 20.4791C21.1524 20.4795 21.8082 20.1901 22.2827 19.6663C22.7596 19.143 23.0408 18.3938 23.0384 17.5305C23.0384 14.8174 23.0384 10.487 23.0384 8.81742C23.0385 8.0348 22.9602 7.8 22.6471 7.4348ZM13.2298 10.6435H5.55V3.33914H13.2297L13.2298 10.6435ZM21.3689 9.93792C21.3689 10.0695 21.2935 10.1311 21.1863 10.1291C20.9845 10.1258 20.6702 10.0822 20.5341 9.86086C20.2908 9.46547 19.963 8.69508 20.3181 8.09105C20.3559 8.02664 20.4387 7.92309 20.5863 8.02177L21.0611 8.45789C21.2572 8.63723 21.3689 8.89036 21.3689 9.15609C21.3689 9.15609 21.3689 9.80625 21.3689 9.93792Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_145_42681">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )

  const EngineIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23 8.25H21.421C20.978 8.25 20.588 8.54198 20.462 8.96602L19.49 12.25H19.382L18.95 10.938C18.814 10.527 18.432 10.25 18 10.25H16V9.24999C16 8.69799 15.553 8.25 15 8.25H13V7.25002H14C14.553 7.25002 15 6.80203 15 6.25003V3.24998C15 2.69798 14.553 2.25 14 2.25H6C5.44702 2.25 5.00002 2.69798 5.00002 3.24998V6.24998C5.00002 6.80198 5.44702 7.24997 6 7.24997H6.99998V8.24995H3.99998C3.447 8.25 3 8.69799 3 9.24999V13.25H2.00002V12.25C2.00002 11.698 1.55302 11.25 1.00003 11.25C0.447 11.25 0 11.698 0 12.25V16.25C0 16.802 0.447 17.25 0.999984 17.25C1.55297 17.25 1.99997 16.802 1.99997 16.25V15.25H3V17.25C3 17.398 3.033 17.544 3.09698 17.678L4.518 20.678C4.683 21.027 5.034 21.25 5.421 21.25H17.474C17.827 21.25 18.154 21.063 18.334 20.76L19.229 19.2501H19.557L20.49 21.6171C20.642 21.999 21.011 22.2501 21.421 22.2501H23C23.553 22.2501 24 21.8021 24 21.2501V9.24999C24 8.69799 23.553 8.25 23 8.25Z" fill="currentColor"/>
    </svg>
  )

  const GearshiftIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_145_42674)">
        <path d="M20.4853 3.51469C18.2188 1.24819 15.2053 0 12 0C8.79469 0 5.78123 1.24819 3.51469 3.51469C1.24819 5.78123 0 8.79464 0 12C0 15.2054 1.24819 18.2188 3.51469 20.4853C5.78123 22.7518 8.79469 24 12 24C15.2053 24 18.2188 22.7518 20.4853 20.4853C22.7518 18.2188 24 15.2054 24 12C24 8.79464 22.7518 5.78123 20.4853 3.51469ZM12.7826 17.8231H11.2174V12.7826H7.09927V17.8231H5.53406V6.17686H7.09927V11.2174H11.2174V6.17691H12.7826V11.2174H16.9008V6.17691H18.466V12.7826H12.7826V17.8231ZM18.2014 17.5814L17.6235 16.6482H17.311V17.5814H16.4762V14.5421H17.8718C18.4667 14.5421 18.8948 15.0772 18.8948 15.5952C18.8948 15.9462 18.7322 16.2715 18.4582 16.4641L19.1431 17.5814H18.2014V17.5814Z" fill="currentColor"/>
        <path d="M17.8162 15.2695H17.311V15.9202H17.8376C17.9404 15.9202 18.0474 15.8003 18.0474 15.5949C18.0473 15.3851 17.9188 15.2695 17.8162 15.2695Z" fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_145_42674">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )

  const WheelIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_145_42662)">
        <g clipPath="url(#clip1_145_42662)">
          <path d="M12.0001 0C5.37244 0 0 5.37248 0 12.0002C0 18.6275 5.37244 24 12.0001 24C18.6275 24 24 18.6275 24 12.0002C23.9999 5.37248 18.6275 0 12.0001 0ZM12.0001 19.6491C7.77539 19.6491 4.35084 16.2249 4.35084 12.0002C4.35084 7.77544 7.77539 4.35094 12.0001 4.35094C16.2245 4.35094 19.649 7.77548 19.649 12.0002C19.649 16.225 16.2245 19.6491 12.0001 19.6491Z" fill="currentColor"/>
          <path d="M12.0001 12.7401C12.4088 12.7401 12.7396 12.4093 12.7396 12.0006C12.7396 11.592 12.4088 11.2607 12.0001 11.2607C11.5911 11.2607 11.2603 11.592 11.2603 12.0006C11.2602 12.4093 11.5911 12.7401 12.0001 12.7401Z" fill="currentColor"/>
          <path d="M7.0651 9.21775C7.11704 9.35622 7.22893 9.46333 7.36979 9.50894L10.006 10.3662C10.2516 10.4452 10.5205 10.4031 10.7292 10.2516C10.9375 10.0992 11.0617 9.85684 11.0617 9.59894V6.82863C11.0617 6.68106 10.9939 6.541 10.8776 6.44978C10.7618 6.35735 10.6102 6.32402 10.4666 6.35735C10.4666 6.35735 10.5059 6.32763 10.2392 6.41134C8.99513 6.80369 7.9291 7.59916 7.19715 8.64569C7.0464 8.8607 7.10433 8.7992 7.10433 8.7992C7.02858 8.92497 7.01433 9.07891 7.0651 9.21775Z" fill="currentColor"/>
          <path d="M9.94442 12.6689C9.86468 12.4229 9.67222 12.2301 9.42668 12.1512L6.79161 11.295C6.65117 11.2494 6.49765 11.2709 6.37465 11.3521C6.25165 11.4343 6.17271 11.568 6.16001 11.7155C6.16001 11.7155 6.14417 11.6687 6.14136 11.948C6.12945 13.2525 6.55714 14.5113 7.32603 15.5317C7.4839 15.7411 7.44265 15.6669 7.44265 15.6669C7.53982 15.7784 7.68186 15.8395 7.82867 15.8335C7.97661 15.8276 8.11348 15.7546 8.19997 15.6348L9.82972 13.3913C9.98126 13.1831 10.0237 12.9137 9.94442 12.6689Z" fill="currentColor"/>
          <path d="M12.6529 14.4942C12.5006 14.2859 12.2581 14.1621 12.0003 14.1621C11.742 14.1621 11.4996 14.2859 11.3484 14.4942L9.71951 16.7353C9.63303 16.8547 9.60523 17.0078 9.64568 17.1506C9.68496 17.293 9.78771 17.4089 9.92459 17.4665C9.92459 17.4665 9.87462 17.4676 10.14 17.5565C11.377 17.9711 12.7064 17.9528 13.9137 17.5366C14.1616 17.4514 14.0787 17.4676 14.0787 17.4676C14.2152 17.4105 14.3175 17.2939 14.3568 17.1518C14.3965 17.009 14.3683 16.8567 14.2818 16.7372L12.6529 14.4942Z" fill="currentColor"/>
          <path d="M17.2103 11.2943L14.5737 12.1512C14.3285 12.2301 14.1353 12.4229 14.0563 12.6689C13.9762 12.9137 14.0186 13.1831 14.171 13.3909L15.7988 15.6325C15.8861 15.7527 16.0229 15.8245 16.1709 15.8316C16.3185 15.838 16.4605 15.7757 16.5569 15.6638C16.5569 15.6638 16.5426 15.711 16.7088 15.4869C17.4852 14.4384 17.8799 13.1676 17.8573 11.8913C17.8529 11.6295 17.8419 11.7136 17.8419 11.7136C17.8292 11.566 17.7506 11.4323 17.6273 11.351C17.5043 11.2701 17.3512 11.2482 17.2103 11.2943Z" fill="currentColor"/>
          <path d="M13.2708 10.2519C13.4799 10.403 13.7481 10.4455 13.9937 10.3665L16.6279 9.50922C16.7688 9.46394 16.8807 9.35645 16.9326 9.21803C16.9842 9.07918 16.9691 8.92483 16.8922 8.79831C16.8922 8.79831 16.9331 8.82606 16.7708 8.59914C16.0138 7.53629 14.9276 6.76904 13.7065 6.39573C13.4553 6.31956 13.5319 6.35528 13.5319 6.35528C13.3879 6.32195 13.2368 6.35603 13.1217 6.44809C13.0054 6.53894 12.938 6.679 12.938 6.82618V9.59893C12.938 9.85708 13.0622 10.0995 13.2708 10.2519Z" fill="currentColor"/>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_145_42662">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
        <clipPath id="clip1_145_42662">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )

  const StarIcon = ({ filled }) => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill={filled ? "currentColor" : "none"} 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )

  return (
    <section id='cars' className='min-h-screen bg-white py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/*  */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-gray-900 mb-4'>
            Our Fleet
          </h2>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Choose from our wide selection of premium vehicles for your next journey
          </p>
        </div>

        {/*  */}
        <div className='mb-20'>
          <div className='flex flex-wrap justify-center items-center gap-8 lg:gap-12'>
            {brands.map((brand) => (
              <div
                key={brand.name}
                className='flex items-center justify-center w-24 h-16 opacity-60 hover:opacity-100 transition-opacity duration-300'
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={80}
                  height={40}
                  className='object-contain grayscale hover:grayscale-0 transition-all duration-300'
                />
              </div>
            ))}
          </div>
        </div>

        {/*  */}
        <div className='relative'>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={32}
            speed={600}
            pagination={{
              clickable: true,
              el: '.custom-pagination',
            }}
            navigation={{
              nextEl: '.custom-next',
              prevEl: '.custom-prev',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className='pb-16'
          >
            {cars.map((car) => (
              <SwiperSlide key={car.id}>
                <div className='bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden group'>
               
                  <div className='relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8'>
                    <Image
                      src={car.image}
                      alt={car.name}
                      width={200}
                      height={120}
                      className='object-contain transform group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>

                  {/*  */}
                  <div className='p-6'>
                   
                    <div className='flex justify-between items-start mb-4'>
                      <div>
                        <h3 className='text-xl font-bold text-gray-900 mb-1'>
                          {car.name}
                        </h3>
                        <p className='text-red-600 font-semibold text-sm uppercase tracking-wide'>
                          {car.category}
                        </p>
                      </div>
                      <div className='text-right'>
                        <p className='text-2xl font-bold text-gray-900'>
                          {car.price}
                        </p>
                      </div>
                    </div>

                    {/*  *  */}
                    <div className='flex items-center gap-2 mb-6'>
                      <div className='flex gap-1 text-yellow-400'>
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} filled={i < car.rating} />
                        ))}
                      </div>
                      <span className='text-sm text-gray-500'>
                        {car.rating}.0
                      </span>
                    </div>

                    {/*  - Első sor */}
                    <div className='grid grid-cols-3 gap-4 mb-4'>
                      <div className='flex flex-col items-center text-center'>
                        <div className='text-red-600 mb-2'>
                          <SeatIcon />
                        </div>
                        <span className='text-xs font-medium text-gray-600'>
                          {car.features.doors} Doors
                        </span>
                      </div>
                      <div className='flex flex-col items-center text-center'>
                        <div className='text-red-600 mb-2'>
                          <SeatIcon />
                        </div>
                        <span className='text-xs font-medium text-gray-600'>
                          {car.features.seats} Seats
                        </span>
                      </div>
                      <div className='flex flex-col items-center text-center'>
                        <div className='text-red-600 mb-2'>
                          <FuelIcon />
                        </div>
                        <span className='text-xs font-medium text-gray-600'>
                          {car.features.fuel}
                        </span>
                      </div>
                    </div>

                    {/*  - Második sor */}
                    <div className='grid grid-cols-3 gap-4 mb-6'>
                      <div className='flex flex-col items-center text-center'>
                        <div className='text-red-600 mb-2'>
                          <EngineIcon />
                        </div>
                        <span className='text-xs font-medium text-gray-600'>
                          {car.features.engine}
                        </span>
                      </div>
                      <div className='flex flex-col items-center text-center'>
                        <div className='text-red-600 mb-2'>
                          <GearshiftIcon />
                        </div>
                        <span className='text-xs font-medium text-gray-600'>
                          {car.features.transmission}
                        </span>
                      </div>
                      <div className='flex flex-col items-center text-center'>
                        <div className='text-red-600 mb-2'>
                          <WheelIcon />
                        </div>
                        <span className='text-xs font-medium text-gray-600'>
                          {car.features.drive}
                        </span>
                      </div>
                    </div>

                    {/* Reserve now*/}
                    <button className='w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300'>
                      RESERVE NOW
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* NAVI*/}
          <button className='custom-prev absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 group'>
            <svg className='w-6 h-6 group-hover:scale-110 transition-transform' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button className='custom-next absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 bg-white shadow-lg rounded-full w-12 h-12 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 group'>
            <svg className='w-6 h-6 group-hover:scale-110 transition-transform' fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Oldal */}
          <div className='custom-pagination flex justify-center gap-2 mt-8' />
        </div>
      </div>

      <style jsx>{`
        :global(.custom-pagination .swiper-pagination-bullet) {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        :global(.custom-pagination .swiper-pagination-bullet-active) {
          background: #dc2626;
          transform: scale(1.2);
        }

        :global(.swiper-button-disabled) {
          opacity: 0.3;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </section>
  )
}