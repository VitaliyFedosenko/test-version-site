'use client'
import Image from 'next/image'
import './globals.css'
import React from 'react'
import { roboto } from './font'

import { PAGE_LINKS } from '@/page-links'
import Link from 'next/link'
import { NextPage } from 'next'
// @ts-ignore
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { ReviewSlider } from '@/components/slider'


import image_6 from '../../public/images/home-page-slider/slider-mobile/image1.webp'
import image_7 from '../../public/images/home-page-slider/slider-mobile/image2.webp'
import image_8 from '../../public/images/home-page-slider/slider-mobile/image3.webp'
import image_9 from '../../public/images/home-page-slider/slider-mobile/image4.webp'
import image_10 from '../../public/images/home-page-slider/slider-mobile/image5.webp'

import image_1 from '../../public/images/home-page-slider/image1.webp'
import image_2 from '../../public/images/home-page-slider/image2.webp'
import image_3 from '../../public/images/home-page-slider/image3.webp'
import image_4 from '../../public/images/home-page-slider/image4.webp'
import image_5 from '../../public/images/home-page-slider/image5.webp'

import car_pic_1 from '../../public/images/home-page-pic/pic_car_1.webp'
import car_pic_2 from '../../public/images/home-page-pic/pic_car_2.webp'
import car_pic_3 from '../../public/images/home-page-pic/pic_car_3.webp'
import car_pic_4 from '../../public/images/home-page-pic/pic_car_4.webp'
import wedding_limousine from '../../public/images/home-page-pic/limo_widding.webp'
import wedding_limousine_mobile from '../../public/images/home-page-pic/limo_widding_mobile-_1_.webp'
import five_stars from '../../public/images/home-page-pic/rate-stars-yellow.svg'
import google_logo from '../../public/images/home-page-pic/google-tile.svg'
import whatsapp from '../../public/images/home-page-pic/whatsapp-logo.svg'



const Home: NextPage = () => {
  const suvServices = [
    {
      title: 'Mountain SUV Service',
      text: 'Comfortable, spacious and luxury option for ski resorts and Rocky Mountain travel. Preferred class for the groups or families of up to 7 people with luggage. Large ski boxes can be requested for an additional luggage space.',
      img: car_pic_3,
      url: '/mountain-suv-service',
    },
    {
      title: 'Luxury SUV Service',
      text: 'Denver elite transportation service provided by Get-A-Ride for the clients who enjoy VIP treatment. If you like to treat your business partner or your family to one of the best services in the city - this option is what you are looking for.',
      img: car_pic_4,
      url: '/corporate-transportation',
    },
  ]

  const sliderImages = [
    {
      inx: 1,
      img: image_1,
    },
    {
      inx: 2,
      img: image_2,
    },
    {
      inx: 3,
      img: image_3,
    },
    {
      inx: 4,
      img: image_4,
    },
    {
      inx: 5,
      img: image_5,
    },
  ]

  const sliderImagesMobile = [
    {
      inx: 1,
      img: image_6,
    },
    {
      inx: 2,
      img: image_7,
    },
    {
      inx: 3,
      img: image_8,
    },
    {
      inx: 4,
      img: image_9,
    },
    {
      inx: 5,
      img: image_10,
    },
  ]

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [sliderImages])

  return (
    <div className={roboto.className}>
      <div className='relative w-full tablet:min-h-[576px] min-h-[560px]'>
        <div className='text-white'>
          <div className='bg-slider px-6 tablet:px-0 w-full h-full absolute top-0 left-0 z-30 flex flex-col justify-center items-center'>
            <a 
              href="tel:9704382743"
              className='absolute top-0 tablet:right-[120px] text-[22px] leading-[32px] px-5 py-2 tablet:bg-[#0000004f]'
            >
              (970)GET-A-RIDE (970-438-2743)
            </a>
            <h3 className='tablet:text-[62px] text-[32px] tablet:leading-[74px] font-noto leading-[40px] font-bold text-center'>
                Get A Ride Denver <br />
                Executive Airport Transportation  <br />
                and Mountain Transfer
            </h3>
            <p className='text-[22px] leading-[32px] flex flex-col justify-center items-center text-center mt-6 tablet:mt-0'>
              <span>Reliable, Affordable and Trusted Black Car and Limo Service.</span>
              <span>Limo in Denver, Winter Park, Breckenridge, Vail, Aspen and more.</span>
            </p>
              <Link 
                href={PAGE_LINKS.BOOK_NOW}
                className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full mobile:w-fit
                leading-[24px] tracking-[1px] font-bold rounded-xl mt-6 hover:bg-[#ffdea0] text-center'
              >
                BOOK NOW
              </Link>
          </div>
        </div>
        <TransitionGroup className="slider hidden mobile:block">
          <CSSTransition
            key={currentImageIndex}
            timeout={1000}
            classNames="fade "
          >
            <Image
              src={sliderImages[currentImageIndex].img}
              alt={`Slide ${sliderImages[currentImageIndex].inx}`}
              className="slide"
            />
          </CSSTransition>
        </TransitionGroup>
        <TransitionGroup className="slider mobile:hidden block">
          <CSSTransition
            key={currentImageIndex}
            timeout={1000}
            classNames="fade "
          >
            <Image
              src={sliderImagesMobile[currentImageIndex].img}
              alt={`Slide ${sliderImagesMobile[currentImageIndex].inx}`}
              className="slide"
            />
          </CSSTransition>
        </TransitionGroup>
      </div>
      <section className='bg-[#161616] tablet:py-[56px] py-10 px-6 tablet:px-0'>
        <div className='flex flex-col tablet:flex-row gap-x-[48px] mx-auto max-w-[1140px] items-center'>
          <div>
            <Image
              src={car_pic_1}
              alt="car_pic_1"
              className="w-[532px] h-fit rounded-lg"
            />
          </div>
          <div className='text-[20px] leading-[32px] text-[#A4A4A4] w-full max-w-[532px] mt-10 tablet:mt-0'>
            <h4 className='text-[32px] text-[#EEB957] mb-6 leading-[40px]'>
              Reliable and Luxury Private Car Service
            </h4>
            <div>
              <p>We provide Luxury Limousine service around Denver Metro area and Rocky Mountains.</p>
              <p>Offering the best in class ground transportation in Denver and beyond.</p>
              <p>Providing transportation services to/from Denver International Airport, APA, COS, EGE, ASE and more.</p>
              <p>Experienced drivers, reliable vehicles, competitive rates.</p>
            </div>
            <Link href={PAGE_LINKS.BOOK_NOW} className='text-[#EEB957] underline'>Book Now</Link>
          </div>
        </div>
      </section>
      <section className='bg-black tabelt:py-[56px] py-10 flex flex-col justify-center items-center px-6 tablet:px-0'>
        <div className='max-w-[1140px] w-full'>
          <h3 className='font-noto tablet:text-[44px] text-[32px] tablet:leading-[64px] 
            leading-[44px] text-[#EEB957] mb-10 text-center tracking-[0.1rem] font-bold'
          >
            Our Services
          </h3>
          <Image
              src={car_pic_2}
              alt="car_pic_2"
              className="w-full h-fit rounded-lg"
            />
          <p className='text-[#E2E2E2] tablet:my-6 my-4 text-center text-[22px] leading-[32px]'>
            Black Car Service
          </p>
          <p className='text-[#919191] mb-6 text-center leading-[22px]'>
            Enjoy a hassle-free ride in our top-of-the-class vehicle. Luxury option for up to three passengers with luggage. 
            Preferred vehicle class for hourly business, corporate and leisure rides. Wedding getaway car, night out on the town limo. 
            Get A Ride also provides concert and sporting event transportation in Denver, including Red Rocks Amphitheater, Pepsi Center, Buell Theater and many more.
          </p>
        </div>
        <Link 
          href={PAGE_LINKS.BLACK_CAR_SERVICE} 
          className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full tablet:w-fit mobile:w-[532px] text-center
          leading-[24px] tracking-[1px] font-bold rounded-xl hover:bg-[#ffdea0]'
        >
          LEARN MORE
        </Link>
        <div className='flex tablet:flex-row flex-col tablet:pt-[48px] pt-10 tablet:gap-x-[48px] gap-y-10 tablet:gap-y-0'>
          {suvServices.map((item) => (
            <div key={item.title} className='flex flex-col justify-center items-center max-w-[532px] w-full'>
              <Image
                src={item.img}
                alt="car_pic"
                className="w-full max-w-[532px] h-fit rounded-lg"
              />
              <h4 className='text-[#E2E2E2] my-6 text-center text-[22px] leading-[32px]'>{item.title}</h4>
              <p className='text-[#919191] mb-6 text-center leading-[22px]'>{item.text}</p>
              <Link 
                href={item.url}
                className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full tablet:w-fit text-center
                leading-[24px] tracking-[1px] font-bold rounded-xl hover:bg-[#ffdea0]'
                >
                  LEARN MORE
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section className='relative'>
        <Image
          src={wedding_limousine}
          alt="car_pic"
          className="w-full h-fit mobile:block hidden"
        />
        <Image
          src={wedding_limousine_mobile}
          alt="car_pic"
          className="w-full h-fit block mobile:hidden"
        />
        <div className='absolute top-0 left-0 w-full h-full bg-slider z-10'>
          <h3 className='font-noto text-[44px] leading-[64px] mobile:leading-[44px] tablet:leading-[64px] text-white mobile:my-8 
            tablet:my-[56px] my-4 text-center tracking-[0.1rem] font-bold'>
            Reviews
          </h3>
          <div className='text-white flex justify-center items-center'>
            <div className='flex justify-center items-center'>
              <Image
                src={google_logo}
                alt="google_logo"
                className="tablet:w-[38px] mobile:w-8 w-[38px] h-fit mr-4"
              />
              <p className='text-[32px] font-noto leading-[32px] font-bold mr-8'>
                5.0
              </p>
            </div>
            <div className='flex flex-col justify-center gap-y-1'>
              <p className='text-[22px] leading-[26px] tracking-[1px]'>Get-A-Ride</p>
              <Image
                src={five_stars}
                alt="five_stars"
                className="w-full mobile:h-[19px] h-4"
              />
              <p className='tablet:block hidden'>4 Reviews</p>
            </div>
          </div>
          <ReviewSlider  />
        </div>
      </section>
      <section className='tablet:py-[56px] py-10 flex flex-col justify-center items-center bg-black tablet:px-0 px-6'>
        <div className='mt-[80px] flex tablet:flex-row flex-col justify-around items-center w-full max-w-[800px]'>
          <div className='text-center flex flex-col tablet:gap-y-6 gap-y-4'>
            <p className='text-[#E2E2E2] text-[22px]'>
              Get-A-Ride LLC
            </p>
            <p className='text-[#919191]'>
                Denver, Colorado 80202, United States
            </p>
            <a 
              href="mailto:info@getaride.limo"
              className='text-[#EEB957]'
            >
              info@getaride.limo
            </a>
            <a 
              href="tel:9704382743"
              className='text-[#EEB957]'
            >
              (970) 438-2743
            </a>
          </div>
          <div className='mt-10 tablet:mt-0'>
            <p className='text-[#E2E2E2] text-[22px] text-center tablet:mb-6 mb-4'>
              Hours
            </p>
            <div className='flex text-[#919191] gap-x-2'>
              <div> 
                <p>Mon</p>
                <p>Tue</p>
                <p>Wed</p>
                <p>Thu</p>
                <p>Fri</p>
                <p>Sat</p>
                <p>Sun</p>
              </div>
              <div> 
                <p>12:00 am – 12:00 am</p>
                <p>12:00 am – 12:00 am</p>
                <p>12:00 am – 12:00 am</p>
                <p>12:00 am – 12:00 am</p>
                <p>12:00 am – 12:00 am</p>
                <p>12:00 am – 12:00 am</p>
                <p>12:00 am – 12:00 am</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
