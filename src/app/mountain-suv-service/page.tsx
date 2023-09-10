import Image from "next/image"
import { PAGE_LINKS } from "@/page-links"
import Link from "next/link"

import mount_car_inside from '../../../public/images/mountain-suv-service/mount_car_inside.webp'
import snow_town from '../../../public/images/mountain-suv-service/snow-town.webp'
import snow_road from '../../../public/images/mountain-suv-service/snow-road.webp'


export default function MountainSuvService() {

  const cities = [
    {
      inx: 1,
      city: 'Aspen',
      link: 'https://www.colorado.com/cities-and-towns/aspen',
    },
    {
      inx: 2,
      city: 'Allenspark',
      link: 'https://www.colorado.com/cities-and-towns/allenspark',
    },
    {
      inx: 3,
      city: 'Avon',
      link: 'https://www.colorado.com/cities-and-towns/avon',
    },
    {
      inx: 4,
      city: 'Boulder',
      link: 'https://www.colorado.com/cities-and-towns/boulder',
    },
    {
      inx: 5,
      city: 'Breckenridge',
      link: 'https://www.colorado.com/cities-and-towns/breckenridge',
    },
    {
      inx: 6,
      city: 'Cañon City',
      link: 'https://www.colorado.com/cities-and-towns/canon-city',
    },
    {
      inx: 7,
      city: 'Creede',
      link: 'https://www.colorado.com/cities-and-towns/creede',
    },
    {
      inx: 8,
      city: 'Crested Butte',
      link: 'https://www.colorado.com/cities-and-towns/crested-buttemt-crested-butte',
    },
    {
      inx: 9,
      city: 'Cripple Creek',
      link: 'https://www.colorado.com/cities-and-towns/cripple-creek',
    },
    {
      inx: 10,
      city: 'Durango',
      link: 'https://www.colorado.com/cities-and-towns/durango',
    },
    {
      inx: 11,
      city: 'Estes Park',
      link: 'https://www.colorado.com/cities-and-towns/estes-park',
    },
    {
      inx: 12,
      city: 'Georgetown',
      link: 'https://www.colorado.com/cities-and-towns/georgetown',
    },
    {
      inx: 13,
      city: 'Glenwood Springs',
      link: 'https://www.colorado.com/cities-and-towns/glenwood-springs',
    },
    {
      inx: 14,
      city: 'Granby',
      link: 'https://www.colorado.com/cities-and-towns/granby',
    },
    {
      inx: 15,
      city: 'Grand Lake',
      link: 'https://www.colorado.com/cities-and-towns/grand-lake',
    },
    {
      inx: 16,
      city: 'Leadville',
      link: 'https://www.colorado.com/cities-and-towns/leadville',
    },
    {
      inx: 17,
      city: 'Manitou Springs',
      link: 'https://www.colorado.com/cities-and-towns/manitou-springs',
    },
    {
      inx: 18,
      city: 'Ouray',
      link: 'https://www.colorado.com/cities-and-towns/ouray',
    },
    {
      inx: 19,
      city: 'Silverthorne',
      link: 'https://www.colorado.com/cities-and-towns/silverthorne',
    },
    {
      inx: 20,
      city: 'Steamboat Springs',
      link: 'https://www.colorado.com/cities-and-towns/steamboat-springs',
    },
    {
      inx: 21,
      city: 'Trinidad',
      link: 'https://www.colorado.com/cities-and-towns/trinidad',
    },
    {
      inx: 22,
      city: 'Vail',
      link: 'https://www.colorado.com/cities-and-towns/vail',
    },
  ]

  const destinations = [
    {
      inx: 1,
      destination: 'Arapahoe Basin',
      link: 'https://www.coloradoski.com/resorts/arapahoe-basin/',
    },
    {
      inx: 2,
      destination: 'Aspen Highlands',
      link: 'https://www.coloradoski.com/resorts/aspen-highlands',
    },
    {
      inx: 3,
      destination: 'Aspen Mountain',
      link: 'https://www.coloradoski.com/resorts/aspen-mountain',
    },
    {
      inx: 4,
      destination: 'Buttermilk',
      link: 'https://www.coloradoski.com/resorts/buttermilk/',
    },
    {
      inx: 5,
      destination: 'Cooper',
      link: 'https://www.coloradoski.com/resorts/cooper',
    },
    {
      inx: 6,
      destination: 'Copper Mountain',
      link: 'https://www.coloradoski.com/resorts/copper-mountain/',
    },
    {
      inx: 7,
      destination: 'Echo Mountain',
      link: 'https://www.coloradoski.com/resorts/echo-mountain/',
    },
    {
      inx: 8,
      destination: 'Eldora',
      link: 'https://www.coloradoski.com/resorts/eldora/',
    },
    {
      inx: 9,
      destination: 'Granby Ranch',
      link: 'https://www.coloradoski.com/resorts/granby-ranch/',
    },
    {
      inx: 10,
      destination: 'Hesperus Ski Area',
      link: 'https://www.coloradoski.com/resorts/hesperus-ski-area',
    },
    {
      inx: 11,
      destination: 'Howelsen Hill',
      link: 'https://www.coloradoski.com/resorts/howelsen-hill/',
    },
    {
      inx: 12,
      destination: 'Kendall Mountain',
      link: 'https://www.coloradoski.com/resorts/silverton/',
    },
    {
      inx: 13,
      destination: 'Loveland',
      link: 'https://www.coloradoski.com/resorts/loveland/',
    },
    {
      inx: 14,
      destination: 'Monarch',
      link: 'https://www.coloradoski.com/resorts/monarch/',
    },
    {
      inx: 15,
      destination: 'Powderhorn',
      link: 'https://www.coloradoski.com/resorts/powderhorn/',
    },
    {
      inx: 16,
      destination: 'Purgatory Resort',
      link: 'https://www.coloradoski.com/resorts/purgatory-resort/',
    },
    {
      inx: 17,
      destination: 'Silverton',
      link: 'https://www.coloradoski.com/resorts/snowmass/',
    },
    {
      inx: 18,
      destination: 'Snowmass',
      link: 'https://www.coloradoski.com/resorts/snowmass/',
    },
    {
      inx: 19,
      destination: 'Steamboat',
      link: 'https://www.coloradoski.com/resorts/steamboat/',
    },
    {
      inx: 20,
      destination: 'Sunlight',
      link: 'https://www.coloradoski.com/resorts/sunlight',
    },
    {
      inx: 21,
      destination: 'Telluride',
      link: 'https://www.coloradoski.com/resorts/telluride/',
    },
    {
      inx: 22,
      destination: 'Winter Park',
      link: 'https://www.coloradoski.com/resorts/winter-park',
    },
  ]


  return (
    <div className="w-full bg-[#161616]">
      <section className="tablet:py-[56px] py-10 w-full max-w-[1140px] mx-auto">
          <Image src={mount_car_inside} alt="car_inside" className="tablet:rounded-[10px]"/>
          <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] leading-[44px] tablet:leading-[60px] font-[900] text-center mt-8 mb-10'>
            Private Mountain SUV Service
          </h2>
          <div className='px-6 tablet:px-0 flex tablet:flex-row flex-col justify-between text-[#A4A4A4] text-[16px] leading-[22px]'>
            <div className='flex flex-col gap-y-6 text-center'>
              <h4 className='text-[#F7F7F7] text-[22px] leading-[28px]'>
                Fits 1-7 passengers
              </h4>
              <div className='w-full max-w-[773px] flex flex-col gap-y-6'>
                <p className="text-center">
                The Rocky Mountains in Colorado make SUV services essential to people visiting the state because they represent a challenging terrain. The mountains offer skiing opportunities to people from different destinations. The slippery nature of roads, especially during winter requires a reliable SUV service to ensure both safety and comfort. 
                </p>
                <strong className="text-center">
                  Our mountain SUV service offers the following advantages to our clients:
                </strong>
                <ul className='flex flex-col gap-y-6 list-disc text-start'>
                  <li className='ml-10'>Our drivers are knowledgeable about ski resorts in Colorado. If you are looking for ski resorts that offer a relaxing atmosphere, our drivers can reduce the need for you to spend time and effort looking for one.</li>
                  <li className='ml-10'>We have designed our SUVs by anticipating your needs. Our SUVs have adequate storage to allow you to transport your skiing equipment comfortably. You do not have to worry about bulky equipment because our SUV vehicles will facilitate their transportation while our drivers will help you load and offload them.</li>
                  <li className='ml-10'>Our vehicles are equipped with the snow tires that increase your safety during winter. The tires create additional traction, which allows you to travel safely through the Rocky Mountains.</li>
                  <li className='ml-10'>We train our drivers on a regular basis to sharpen their skills for winter driving. Our competent drivers will offer you comfort and safety and thus improve your overall experience.</li>
                  <li className='ml-10'>Since comfort is our priority, the SUVs have leather interiors and heated seats to provide you the luxury experience.</li>
                  <li className='ml-10'>We provide a flexibility by tracking your flight, offering to make extra stops on the way to your destination and doing our best to satisfy any requests you might have. This is our way to show how much we care for the diverse needs of our customers.</li>
                </ul>
                <p>
                  If you are looking for a black car service around Denver International Airport, Northern Colorado, or any place within the state of Colorado, kindly contact us for an unforgettable transport experience. 
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-y-6 tablet:mt-0 mt-6 text-center'>
              <h4 className='text-[#F7F7F7] text-[22px] leading-[28px]'>
                Safe Mountain Rides
              </h4>
              <p className="text-center">
                Check our <a href={PAGE_LINKS.PRICES} className='text-[#EEB975] underline'>rates</a> and book your next trip with us! 
              </p>
              <Link 
                href={PAGE_LINKS.BOOK_NOW}
                className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full tablet:w-fit mx-auto
                leading-[24px] tracking-[1px] font-bold rounded-xl mt-6 hover:bg-[#ffdea0] text-center'
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        </section>
        <section className='tablet:py-[56px] py-10 w-full bg-black'>
          <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] leading-[44px] tablet:leading-[60px] font-[900] text-center mb-10'>
            Denver's TOP Places
          </h2>
          <div className='px-6 tablet:px-0 w-full max-w-[1140px] mx-auto 
            grid tablet:grid-cols-[50%_50%] text-[16px] leading-[22px] text-[#919191] text-center'>
            <div className="flex flex-col gap-y-6 tablet:px-6">
              <Image src={snow_town} alt="town" className="rounded-[10px]"/>
              <h4 className="text-[22px] leading-[28px] text-[#E2E2E2]">
                Reliable, Affordable and Trusted.
              </h4>
              <p>
                The state of Colorado has a diverse landscape including arid deserts, forested plaints, river canyons and the famous Rocky Mountains. Driving through the state or getting to your destination might be challenging, especially with unpredictable and rapidly-changing weather conditions. Book our mountain SUV transfer service and leave driving to professionals.
              </p>
              <strong className="tracking-[0.2px]">
                Our vehicles are equipped and well-maintained to get you to your destination anywhere in the state of Colorado safely and comfortably.
              </strong>
              <p >
                Enjoy the peace of mind on your next visit to Colorado with our one-way transfer, roundtrip or hourly chauffeur service.
              </p>
              <div className="text-[16px] leading-[22px] text-[#EEB957] flex flex-col gap-y-6 font-[700] tracking-[0.4px]">
                <strong className="text-[#919191] tablet:mb-[22px]">
                  We service all cities in the state of Colorado including:
                </strong>
                {cities.map((item, inx) => (
                  <p key={inx} className="underline">
                    <a href={item.link} target="_blank">{item.city}</a>
                  </p>
                ))}
              </div>
              <Link 
                href={PAGE_LINKS.BOOK_NOW}
                className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full tablet:w-fit mx-auto
                leading-[24px] tracking-[1px] font-bold rounded-xl mt-6 hover:bg-[#ffdea0] text-center mb-8 tablet:mb-0'
              >
                BOOK NOW RIDE
              </Link>
            </div>

            <div className="flex flex-col gap-y-6 tablet:px-6">
              <Image src={snow_road} alt="road" className="rounded-[10px]"/>
              <h4 className="text-[22px] leading-[28px] text-[#E2E2E2]">
                Comfortable, spacious and luxury.
              </h4>
              <p className="tracking-[0.5px]">
                Colorado is a popular winter destination for skiers and snowboarders from all over the world, both professional and amateur.
                The variety of ski resorts in the Rocky Mountains are suitable for any level of professionalism - from beginners to world champions.
              </p>
              <strong className="tracking-[0.2px]">
                Use our Mountain SUV service to get to the world's best skiing and snowboarding destinations that Colorado offers.
              </strong>
              <p>
                Our drivers will safely get you to your Rocky Mountain destination through the challenging weather conditions in a spacious and comfortable vehicle.
              </p>
              <div className="text-[16px] leading-[22px] text-[#EEB957] flex flex-col gap-y-6 font-[700] tracking-[0.4px]">
                <strong className="text-[#919191]">
                  We service all Rocky Mountains destinations in the state of Colorado that include:
                </strong>
                {destinations.map((item, inx) => (
                  <p key={inx} className="underline">
                    <a href={item.link} target="_blank">{item.destination}</a>
                  </p>
                ))}
              </div>
              <Link 
                href={PAGE_LINKS.BOOK_NOW}
                className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full tablet:w-fit mx-auto
                leading-[24px] tracking-[1px] font-bold rounded-xl mt-6 hover:bg-[#ffdea0] text-center'
              >
                BOOK NOW RIDE
              </Link>
            </div>
          </div>
        </section>
    </div>
  )
}