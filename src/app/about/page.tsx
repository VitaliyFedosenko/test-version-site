'use client'
import Image from "next/image"

import first from '../../../public/images/about/first.webp'
import second from '../../../public/images/about/second.webp'
import third from '../../../public/images/about/third.webp'
import fourth from '../../../public/images/about/fourth.webp'

import wedding_limousine from '../../../public/images/home-page-pic/limo_widding.webp'
import wedding_limousine_mobile from '../../../public/images/home-page-pic/limo_widding_mobile-_1_.webp'
import five_stars from '../../../public/images/home-page-pic/rate-stars-yellow.svg'
import google_logo from '../../../public/images/home-page-pic/google-tile.svg'
import { ReviewSlider } from "@/components/slider"


export default function About() {
  return (
    <div className="w-full bg-[#161616]">
      <section className="tablet:py-[56px] py-10 w-full max-w-[1140px] mx-auto text-[#A4A4A4] px-6 tablet:px-0">
        <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] 
          leading-[44px] tablet:leading-[60px] font-[900] text-center mb-10'
        >
          Get-A-Ride Denver
        </h2>

        <div className="flex tablet:flex-row flex-col items-center tablet:gap-x-[48px] mb-10 tablet:mb-[64px]">
          <Image src={first} alt="first" className="rounded-[10px] w-full max-w-[532px] h-fit mb-6 tablet:mb-0"/>
          <div className="flex flex-col gap-y-6 text-center">
            <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] text-center'>
              Service You Can Rely On
            </h4>
            <p>Fast and friendly, we offer professional transportation services throughout Denver metro area. Our team is up for any job, from big to small, putting your safety and satisfaction as our #1 priority. What really makes us stand out is our dedication, great prices and attention to details. Contact us to learn more on how we can help you!</p>
            <p>We are trusted company based in Denver, Colorado offering transportation solutions such as black car service, mountain SUV service, and corporate transportation. Our services are oriented to exceed your expectations. Our experience and local knowledge of Denver Metro Area and the entire state of Colorado make us the preferred company for your transportation needs.</p>
          </div>
        </div>

        <div className="flex tablet:flex-row flex-col-reverse items-center tablet:gap-x-[48px] mb-10 tablet:mb-[64px]">
          <div className="flex flex-col gap-y-6 text-center">
            <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] text-center'>
              Luxury Airport Transportation
            </h4>
            <p className="leading-[32px]">We are fully licensed and insured by $1M policy to operate at the Denver International Airport, Rocky Mountain Regional Airport, Centennial Airport, Colorado Springs Airport and Northern Colorado Regional Airport. We offer services such as airport transfers, hotel transfers, ski resort transfers, mountain transfers, point-to-point transfers in Colorado. We also provide hourly services such as weddings, night in the town and business meetings, as well as the executive transportation in Denver and the entire state of Colorado.</p>
          </div>
          <Image src={second} alt="second" className="rounded-[10px] w-full max-w-[532px] h-fit mb-6 tablet:mb-0"/>
        </div>

        <div className="flex tablet:flex-row flex-col items-center tablet:gap-x-[48px] mb-10 tablet:mb-[64px]">
          <Image src={third} alt="third" className="rounded-[10px] w-full max-w-[532px] h-fit mb-6 tablet:mb-0"/>
          <div className="flex flex-col gap-y-6 text-center">
            <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] text-center'>
              Executive transportation for all your needs
            </h4>
            <p>Get-A-Ride is proud to present its fleet of executive and premium class vehicles that are made to satisfy all your transportation needs. Our company strives to provide an excellent chauffeur service for any occasions. Our team of trained and experienced drivers will assist you and make sure your ride is safe and comfortable. Book our services if you want to get to the airport, train station, or any other destination in an executive car. Forget about wandering around with heavy luggage looking for a cab or waiting for a ride. Our chauffeur will always be there on time to pick you up, help with your bags and adjust the settings in the car to make you feel comfortable.</p>
          </div>
        </div>

        <div className="flex tablet:flex-row flex-col-reverse items-center tablet:gap-x-[48px] mb-[64px]">
          <div className="flex flex-col gap-y-6 text-center">
            <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] text-center'>
              Why choose our services?
            </h4>
            <p className="">Do you still have doubts about choosing limo service over other types of ground transportation? Here are some benefits of booking limo service with us:</p>
            <ul className='flex flex-col list-disc text-start'>
              <li className='ml-10'><strong>Punctuality</strong> – Our driver will always be there on time to pick you up.</li>
              <li className='ml-10'><strong>Maintenance</strong> – All vehicles are inspected daily and serviced regularly to prevent the hassle of breakdowns.</li>
              <li className='ml-10'><strong>Chauffeurs</strong> – Our team of trained and experienced drivers will make your trip enjoyable and comfortable.</li>
              <li className='ml-10'><strong>Safety</strong> – Regular maintenance and professionalism of our drivers will give you a peace of mind on your trip, no matter what weather brings on the way.</li>
              <li className='ml-10'><strong>Comfort</strong> – Our late model vehicles are always spacious, clean, and shiny - ready for your trips.</li>
              <li className='ml-10'><strong>Navigation</strong> – Experience that our drivers have will help to avoid traffic and get to your destination in fast and efficient way.</li>
            </ul>
          </div>
          <Image src={fourth} alt="fourth" className="rounded-[10px] w-full max-w-[532px] h-fit mb-6 tablet:mb-0"/>
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
    </div>
    )
}