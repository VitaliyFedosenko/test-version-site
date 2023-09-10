import Image from "next/image"
import { PAGE_LINKS } from "@/page-links"
import Link from "next/link"

import wedding from '../../../public/images/wedding-transportation/wedding.webp'

export default function WeddingTransportation() {

  const rates = [
    {
      title: 'Denver Metro:',
      bullets: [
        {
          text: 'Sedan..................starting at $150'
        },
        {
          text: 'SUV.......................starting at $180'
        },
      ]
    },
    {
      title: 'Outside of Denver Metro:',
      bullets: [
        {
          text: 'Sedan..................starting at $200'
        },
        {
          text: 'SUV.......................starting at $250'
        },
      ]
    },
  ]

  return (
    <div className="w-full bg-[#161616]">
      <section className="tablet:py-[56px] py-10 w-full max-w-[1140px] mx-auto text-[#A4A4A4]">
        <Image src={wedding} alt="wedding" className="tablet:rounded-[10px]"/>
        <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] leading-[44px] tablet:leading-[60px] font-[900] text-center mt-8 mb-10'>
          Wedding Transportation
        </h2>
        <div className="flex tablet:flex-row flex-col tablet:justify-between gap-y-6 tablet:gap-y-0 px-6 tablet:px-0">
          <div className="w-full max-w-[725px]">
            <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] text-center mb-6'>
              Best Wedding Get Away Car and Limo Service in Denver
            </h4>
            <div className="text-[#A4A4A4] text-[16px] leading-[22px] flex flex-col gap-y-6">
              <p>
                We provide spectacular limo service for your special night. Services can be highly customizable to your needs and include hotel to venue transfers, rides between the church or courthouse and celebration venue or shuttles for the guests. Still our most popular service is getaway car for bride and groom to make the night unforgeteable.
              </p>
              <p>
                Get-A-Ride uses only premium and luxury vehicles to provide maximum comfort and relaxation to our customers.
              </p>
              <p>
                Our Denver Wedding Get Away Limo Service is a great and stylish choice that will provide you with immaculate experience on your important day. 
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 w-full tablet:max-w-[370px]">
            <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] text-center'>
              Best Get Away Limo rates in town:
            </h4>
            <div className="flex flex-col gap-y-6">
                {rates.map((item) => (
                  <div key={item.title}>
                    <p>{item.title}</p>
                    <ul>
                    {item.bullets.map((bullet, inx) => (
                      <li key={inx}>
                        {bullet.text}
                      </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p>
                20% standard gratuity will be added to the rate listed above. 
              </p>
            <Link 
              href={PAGE_LINKS.BOOK_NOW}
              className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full mobile:w-fit mx-auto
              leading-[24px] tracking-[1px] font-bold rounded-xl hover:bg-[#ffdea0] text-center mt-6'
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}