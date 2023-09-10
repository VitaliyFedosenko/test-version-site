import Image from "next/image"
import { PAGE_LINKS } from "@/page-links"
import Link from "next/link"

import airport from '../../../public/images/prices/airport.webp'
import car_1 from '../../../public/images/prices/price_car.webp'
import car_2 from '../../../public/images/prices/price-car-2.webp'
import car_3 from '../../../public/images/prices/price-car-3.webp'

const denverMetro = [
  {
    place: 'Aurora',
    sedan: '$120',
    suv: '$140',
  },
  {
    place: 'Arvada',
    sedan: '$135',
    suv: '$155',
  },
  {
    place: 'Brighton',
    sedan: '$125',
    suv: '$145',
  },
  {
    place: 'Broomfield',
    sedan: '$140',
    suv: '$165',
  },
  {
    place: 'Cherry Creek',
    sedan: '$125',
    suv: '$145',
  },
  {
    place: 'Cherry Hills Village',
    sedan: '$130',
    suv: '$150',
  },
  {
    place: 'Centennial',
    sedan: '$125',
    suv: '$145',
  },
  {
    place: 'Commerce City',
    sedan: '$125',
    suv: '$145',
  },
  {
    place: 'Denver Downtown',
    sedan: '$125',
    suv: '$145',
  },
  {
    place: 'DTC',
    sedan: '$125',
    suv: '$145',
  },
  {
    place: 'Englewood',
    sedan: '$125',
    suv: '$145',
  },
  {
    place: 'Federal Heights',
    sedan: '$145',
    suv: '$170',
  },
  {
    place: 'Glendale',
    sedan: '$125',
    suv: '$145',
  },

  {
    place: 'Greenwood Village',
    sedan: '$130',
    suv: '$150',
  },
  {
    place: 'Golden',
    sedan: '$140',
    suv: '$165',
  },
  {
    place: 'Highlands Ranch',
    sedan: '$140',
    suv: '$160',
  },
  {
    place: 'Ken Caryl Ranch',
    sedan: '$155',
    suv: '$185',
  },
  {
    place: 'Lafayette',
    sedan: '$145',
    suv: '$170',
  },
  {
    place: 'Lakewood',
    sedan: '$140',
    suv: '$165',
  },
  {
    place: 'Littleton',
    sedan: '$140',
    suv: '$170',
  },
  {
    place: 'Lone Tree',
    sedan: '$135',
    suv: '$160',
  },
  {
    place: 'Louisville',
    sedan: '$145',
    suv: '$170',
  },
  {
    place: 'Morrison',
    sedan: '$160',
    suv: '$190',
  },
  {
    place: 'Northglenn',
    sedan: '$140',
    suv: '$165',
  },
  {
    place: 'Sheridan',
    sedan: '$140',
    suv: '$160',
  },
  {
    place: 'Thornton',
    sedan: '$140',
    suv: '$165',
  },
  {
    place: 'Westminster',
    sedan: '$130',
    suv: '$150',
  },
]

const colorado = [
  {
    place: 'Berthoud',
    sedan: '$190',
    suv: '$230',
  },
  {
    place: 'Black Hawk',
    sedan: '$215',
    suv: '$250',
  },
  {
    place: 'Boulder',
    sedan: '$150',
    suv: '$180',
  },
  {
    place: 'Castle Rock',
    sedan: '$140',
    suv: '$165',
  },
  {
    place: 'Castle Pines',
    sedan: '$135',
    suv: '$160',
  },
  {
    place: 'Central City',
    sedan: '$215',
    suv: '$250',
  },
  {
    place: 'Colorado Springs',
    sedan: '$240',
    suv: '$270',
  },
  {
    place: 'Elizabeth',
    sedan: '$140',
    suv: '$165',
  },
  {
    place: 'Erie',
    sedan: '$145',
    suv: '$170',
  },
  {
    place: 'Evergreen',
    sedan: '$190',
    suv: '$230',
  },
  {
    place: 'Franktown',
    sedan: '$135',
    suv: '$160',
  },
  {
    place: 'Fort Collins',
    sedan: '$210',
    suv: '$250',
  },
  {
    place: 'Fort Morgan',
    sedan: '$240',
    suv: '$270',
  },
  {
    place: 'Greeley',
    sedan: '$215',
    suv: '$250',
  },
  {
    place: 'Idaho Springs',
    sedan: '$220',
    suv: '$260',
  },
  {
    place: 'Kiowa',
    sedan: '$150',
    suv: '$175',
  },
  {
    place: 'Limon',
    sedan: '$250',
    suv: '$290',
  },
  {
    place: 'Longmont',
    sedan: '$180',
    suv: '$220',
  },
  {
    place: 'Loveland',
    sedan: '$200',
    suv: '$240',
  },
  {
    place: 'Monument',
    sedan: '$190',
    suv: '$230',
  },
  {
    place: 'Pueblo',
    sedan: '$370',
    suv: '$410',
  },
  {
    place: 'Parker',
    sedan: '$135',
    suv: '$160',
  },
]

const mountains = [
  {
    place: 'Aspen',
    sedan: '$850',
    suv: '$960',
  },
  {
    place: 'Avon',
    sedan: '$500',
    suv: '$550',
  },
  {
    place: 'Beaver Creeek',
    sedan: '$500',
    suv: '$550',
  },
  {
    place: 'Breckenridge',
    sedan: '$410',
    suv: '$460',
  },
  {
    place: 'Copper Mountain',
    sedan: '$400',
    suv: '$440',
  },
  {
    place: 'Eagle',
    sedan: '$600',
    suv: '$660',
  },
  {
    place: 'Eagle Airport',
    sedan: '$650',
    suv: '$690',
  },
  {
    place: 'Estes Park',
    sedan: '$300',
    suv: '$350',
  },
  {
    place: 'Georgetown',
    sedan: '$310',
    suv: '$360',
  },
  {
    place: 'Glenwood Springs',
    sedan: '$760',
    suv: '$800',
  },
  {
    place: 'Grand Junction',
    sedan: '$840',
    suv: '$870',
  },
  {
    place: 'Keystone',
    sedan: '$420',
    suv: '$475',
  },
  {
    place: 'Loveland Ski Area',
    sedan: '$400',
    suv: '$440',
  },
  {
    place: 'Silverthorne',
    sedan: '$400',
    suv: '$440',
  },
  {
    place: 'Steamboat Springs',
    sedan: '$850',
    suv: '$960',
  },
  {
    place: 'Telluride',
    sedan: '$1200',
    suv: '$1250',
  },
  {
    place: 'Vail',
    sedan: '$480',
    suv: '$520',
  },
  {
    place: 'Winter Park',
    sedan: '$400',
    suv: '$440',
  },
]

export default function Prices() {
  return (
    <div className="w-full bg-[#161616] text-[#A4A4A4]">
      <section className="tablet:py-[56px] py-10 w-full max-w-[1140px] mx-auto px-6 mobile:px-0">
        <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] leading-[44px] 
          tablet:leading-[60px] font-[900] text-center mb-10'
        >
          Luxury Black Car Service
        </h2>
        <p className="text-center w-full max-w-[725px] mx-auto">
          Our hourly service can accommodate any needs you might have. From business meetings to special occasions or nights out when you need the car ready to go - we've got you covered. Our fleet of comfortable and well maintained vehicles will provide you with luxury and peace of mind on your trip.
        </p>
        <div className="w-full flex justify-center">
        <Link 
          href={PAGE_LINKS.BOOK_NOW}
          className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full mobile:w-fit
          leading-[24px] tracking-[1px] font-bold rounded-xl mt-6 hover:bg-[#ffdea0] text-center'
        >
          BOOK NOW
        </Link>
        </div>
        <div className="flex tablet:flex-row flex-col mt-[56px] justify-between items-center">
          <Image src={airport} alt="airport" className="mobile:rounded-[10px] w-full max-w-[640px] mb-6 tablet:mb-0"/>
          <div>
            <h4 className="text-[32px] leading-[42px] text-[#EEB957] mb-10 text-center">
              Always included in the price:
            </h4>
            <div className="flex flex-col gap-y-6">
              <p>Fresh bottled water</p>
              <p>Latest magazines</p>
              <p>Toll expenses</p>
              <p>One 15 minute stop along the route</p>
              <p>Car seat or booster per request</p>
            </div>
          </div>
        </div>
          <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] leading-[44px] 
            tablet:leading-[60px] font-[900] text-center my-10'
          >
            Hourly Service
          </h2>
          <div className="flex tablet:flex-row flex-col text-center justify-around gap-y-6 items-center">
            <Image src={car_1} alt="car_1" className="rounded-[10px] w-full max-w-[480px]"/>
            <div className="flex flex-col justify-center items-center gap-y-6">
              <p className="text-[22px] leading-[28px] text-[#F7F7F7] ">
                Luxury Sedan - $70.00/hr
              </p>
              <p>
                3 hours minimum. <br />
                20% gratuity is not included in the price listed. <br />
                Fits 1-3 passengers.
              </p>
                <Link 
                  href={PAGE_LINKS.BOOK_NOW}
                  className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full tablet:w-fit
                  leading-[24px] tracking-[1px] font-bold rounded-xl hover:bg-[#ffdea0] text-center'
                  >
                    BOOK NOW
                </Link>
            </div>
          </div>
          <div className="flex tablet:flex-row flex-col-reverse text-center justify-around gap-y-6 items-center mt-[64px]">
            <div className="flex flex-col justify-center items-center gap-y-6">
              <p className="text-[22px] leading-[28px] text-[#F7F7F7] ">
                Full Size SUV - $90.00/hr
              </p>
              <p>
                3 hours minimum. <br />
                20% gratuity is not included in the price listed. <br />
                Fits 1-6 passengers. 
              </p>
                <Link 
                  href={PAGE_LINKS.BOOK_NOW}
                  className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full tablet:w-fit 
                  leading-[24px] tracking-[1px] font-bold rounded-xl hover:bg-[#ffdea0] text-center'
                  >
                    BOOK NOW
                </Link>
            </div>
            <Image src={car_2} alt="car_2" className="rounded-[10px] w-full max-w-[480px]"/>
          </div>
          <div className="flex tablet:flex-row flex-col text-center justify-around gap-y-6 items-center mt-[64px]">
            <Image src={car_3} alt="car_3" className="rounded-[10px] w-full max-w-[480px]"/>
            <div className="flex flex-col justify-center items-center gap-y-6">
              <p className="text-[22px] leading-[28px] text-[#F7F7F7] ">
                Luxury SUV - $110.00/hr
              </p>
              <p>
                3 hours minimum. <br />
                20% gratuity is not included in the price listed. <br />
                Fits 1-7 passengers.
              </p>
                <Link 
                  href={PAGE_LINKS.BOOK_NOW}
                  className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full tablet:w-fit 
                  leading-[24px] tracking-[1px] font-bold rounded-xl hover:bg-[#ffdea0] text-center'
                  >
                    BOOK NOW
                </Link>
            </div>
          </div>
      </section>
      <section className="tablet:py-[56px] py-10 w-full bg-black mx-auto text-center px-6 mobile:px-0">
        <div>
          <h3 className="text-[32px] font-[800] leading-[44px] text-[#EEB957] tracking-[0.7px] mb-6">
            Denver Metro
          </h3>
          <p className="text-[26px] leading-[32px] text-white mb-6">
            20% gratuity is not included in <br />
            the price listed.
          </p>
          <div className="w-full max-w-[411px] mx-auto">
            <div className="text-[32px] leading-[44px] font-[800] text-[#EEB957] tracking-[0.7px] grid grid-cols-[2fr_1fr_1fr]">
              <p>{' '}</p>
              <p>Sedan</p>
              <p>SUV</p>
            </div>
            {denverMetro.map((item) => (
              <div 
                key={item.place}
                className="text-[26px] leading-[32px] text-white grid grid-cols-[2fr_1fr_1fr] py-[10px]"
              >
                <p>{item.place}</p>
                <p>{item.sedan}</p>
                <p>{item.suv}</p>
              </div> 
            ))}
          </div>
        </div>
      </section>
      <section className="tablet:py-[56px] py-10 w-full bg-[#161616] mx-auto text-center px-6 mobile:px-0">
        <div>
          <h3 className="text-[32px] font-[800] leading-[44px] text-[#EEB957] tracking-[0.7px] mb-6">
            Colorado
          </h3>
          <p className="text-[26px] leading-[32px] text-white mb-6">
            20% gratuity is not included in <br />
             the price listed.
          </p>
          <div className="w-full max-w-[411px] mx-auto">
            <div className="text-[32px] leading-[44px] font-[800] text-[#EEB957] tracking-[0.7px] grid grid-cols-[2fr_1fr_1fr]">
              <p>{' '}</p>
              <p>Sedan</p>
              <p>SUV</p>
            </div>
            {colorado.map((item) => (
              <div 
                key={item.place}
                className="text-[26px] leading-[32px] text-white grid grid-cols-[2fr_1fr_1fr] py-[10px]"
              >
                <p>{item.place}</p>
                <p>{item.sedan}</p>
                <p>{item.suv}</p>
              </div> 
            ))}
          </div>
        </div>
      </section>
      <section className="tablet:py-[56px] py-10 w-full bg-black mx-auto text-center px-6 mobile:px-0">
        <div>
          <h3 className="text-[32px] font-[800] leading-[44px] text-[#EEB957] tracking-[0.7px] mb-6">
            Mountains
          </h3>
          <p className="text-[26px] leading-[32px] text-white mb-6">
            20% gratuity is not included in <br />
            the price listed.
          </p>
          <div className="w-full max-w-[411px] mx-auto">
            <div className="text-[32px] leading-[44px] font-[800] text-[#EEB957] tracking-[0.7px] grid grid-cols-[2fr_1fr_1fr]">
              <p>{' '}</p>
              <p>Sedan*</p>
              <p>SUV</p>
            </div>
            {mountains.map((item) => (
              <div 
                key={item.place}
                className="text-[26px] leading-[32px] text-white grid grid-cols-[2fr_1fr_1fr] py-[10px]"
              >
                <p>{item.place}</p>
                <p>{item.sedan}</p>
                <p>{item.suv}</p>
              </div> 
            ))}
            <p className="text-[26px] leading-[32px] text-white mt-6">*Not available for mountain rides during the winter season.</p>
          </div>
        </div>
      </section>

    </div>
  )
}