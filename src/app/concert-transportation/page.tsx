import Image from "next/image"
import { PAGE_LINKS } from "@/page-links"
import Link from "next/link"

import concert_img from '../../../public/images/concert-transportation/concert.webp'

export default function ConcertTransportation() {

  const location = [
    {
      title: 'Denver Metro:',
      bullets: [
        {
          text: 'Sedan......(1-3 passengers)......$350+'
        },
        {
          text: 'SUV...........(1-6 passengers)......$400+'
        },
        {
          text: 'Lux SUV...(1-6 passengers)......$450+'
        },
      ]
    },
    {
      title: 'Boulder:',
      bullets: [
        {
          text: 'Sedan......(1-3 passengers)......$400+'
        },
        {
          text: 'SUV...........(1-6 passengers)......$450+'
        },
        {
          text: 'Lux SUV...(1-6 passengers)......$500+'
        },
      ]
    },
    {
      title: 'Colorado Springs / Fort Collins:',
      bullets: [
        {
          text: 'Sedan......(1-3 passengers)......$490+'
        },
        {
          text: 'SUV...........(1-6 passengers)......$540+'
        },
        {
          text: 'Lux SUV...(1-6 passengers)......$590+'
        },
      ]
    },
  ]

  return (
    <div className="w-full bg-[#161616]">
      <section className="tablet:py-[56px] py-10 w-full max-w-[1140px] mx-auto text-[#A4A4A4]">
        <Image src={concert_img} alt="concert_img" className="mobile:rounded-[10px]"/>
        <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] leading-[44px] tablet:leading-[60px] font-[900] text-center mt-8 mb-10'>
          Concert Transportation
        </h2>
        <div className="flex tablet:flex-row flex-col tablet:justify-between gap-y-6 tablet:gap-y-0 px-6 tablet:px-0">
          <div className="w-full max-w-[725px]">
            <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] text-center mb-6'>
              Exceptional service for the great price.
            </h4>
            <div className="text-[#A4A4A4] text-[16px] leading-[22px] flex flex-col gap-y-6">
              <p>
                <a href={PAGE_LINKS.CONTACT_US} className="underline text-[#EEB975]">Contact us</a> on your next concert trip in the Mile High City for the stress-free and enjoyable experience. We provide newer vehicles driven by experienced chauffeurs to serve your needs.
              </p>
              <p>
              Our concert service includes a roundtrip to the venue in Denver. The driver will pick you up from your home/hotel, drive you to the concert location and return when the show is over to take you back home.
              </p>
              <div className="flex flex-col gap-y-6">
                {location.map((item) => (
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
            </div>
          </div>
          <div className="flex flex-col gap-y-6">
            <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] text-center'>
              Serving All Denver Concert Venues
            </h4>
            <ul className='flex flex-col list-disc text-start font-[700] tracking-[0.5px]'>
              <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Red Rocks Amphitheater Limo Service</li>
              <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Pepsi Center Limo Service</li>
              <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Fiddler’s Green Amphitheater Limo Service</li>
              <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Hudson Gardens Limo Service</li>
              <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Fillmore Auditorium Limo Service</li>
              <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Ellie Caulkins Opera House Limo Service</li>
              <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Ogden Theatre Limo Service</li>
              <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Empower Field at Mile High Limo Service</li>
              <li className='tablet:ml-10 ml-4'>Marquis Theater Limo Service</li>
            </ul>
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