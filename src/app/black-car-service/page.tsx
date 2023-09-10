import Image from "next/image"
import { PAGE_LINKS } from '@/page-links'
import Link from 'next/link'

import car_inside from '../../../public/images/black-car-service/car_inside.webp'
import hotel from '../../../public/images/black-car-service/hotels.webp'
import restaurant from '../../../public/images/black-car-service/restaurant.webp'
import hands from '../../../public/images/black-car-service/hands.webp'

export default function BlackCarService() {

  const hotels = [
    {
      inx: 1,
      hotel: 'Four Seasons Hotel',
      link: 'https://www.fourseasons.com/denver/'
    },
    {
      inx: 2,
      hotel: 'HALCYON Cherry Creek',
      link: 'https://www.halcyonhotelcherrycreek.com/'
    },
    {
      inx: 3,
      hotel: 'Hotel Teatro',
      link: 'https://www.hotelteatro.com/'
    },
    {
      inx: 4,
      hotel: 'Hyatt Regency Downtown Denver',
      link: 'https://www.hyatt.com/en-US/hotel/colorado/hyatt-regency-denver-at-colorado-convention-center/dencc'
    },
    {
      inx: 5,
      hotel: 'JW Marriott Denver Cherry Creek',
      link: 'https://www.marriott.com/hotels/travel/denjw-jw-marriott-denver-cherry-creek/'
    },
    {
      inx: 6,
      hotel: 'Kimpton Hotel Born',
      link: 'https://www.hotelborndenver.com/'
    },
    {
      inx: 7,
      hotel: 'Kimpton Hotel Monaco',
      link: 'https://www.monaco-denver.com/'
    },
    {
      inx: 8,
      hotel: 'Le Meridien Denver',
      link: 'https://www.marriott.com/hotels/travel/denmd-le-meridien-denver-downtown/'
    },
    {
      inx: 9,
      hotel: 'Magnolia Hotel Denver',
      link: 'https://www.marriott.com/hotels/travel/denmg-magnolia-hotel-denver-a-tribute-portfolio-hotel/'
    },
    {
      inx: 10,
      hotel: 'Moxy Hotel Cherry Creek',
      link: 'https://www.marriott.com/hotels/travel/denox-moxy-denver-cherry-creek/'
    },
    {
      inx: 11,
      hotel: 'Renaissance Denver Downtown',
      link: 'https://www.marriott.com/hotels/travel/dendr-renaissance-denver-downtown-city-center-hotel/'
    },
    {
      inx: 12,
      hotel: 'The Art Hotel',
      link: 'https://www.thearthotel.com/'
    },
    {
      inx: 13,
      hotel: 'The Brown Palace',
      link: 'https://www.marriott.com/hotels/travel/denak-the-brown-palace-hotel-and-spa-autograph-collection/'
    },
    {
      inx: 14,
      hotel: 'The Crawford Hotel',
      link: 'https://www.thecrawfordhotel.com/"'
    },
    {
      inx: 15,
      hotel: 'The Jacquard Hotel',
      link: 'https://www.thejacquard.com/'
    },
    {
      inx: 16,
      hotel: 'The Maven Hotel',
      link: 'https://www.themavenhotel.com/'
    },
    {
      inx: 17,
      hotel: 'The Oxford Hotel',
      link: 'https://www.theoxfordhotel.com/'
    },
    {
      inx: 18,
      hotel: 'The Ramble Hotel',
      link: 'https://www.theramblehotel.com/'
    },
    {
      inx: 19,
      hotel: 'The Ritz-Carlton Denver',
      link: 'https://www.ritzcarlton.com/en/hotels/colorado/denver'
    },
    {
      inx: 20,
      hotel: 'The Source Hotel',
      link: 'https://thesourcehotel.com/hotel'
    },
    {
      inx: 21,
      hotel: 'Warwick Denver Hotel',
      link: 'https://www.warwickhotels.com/warwick-denver'
    },
  ]

  const restaurants = [
    {
      inx: 1,
      restaurant: 'Beckon',
      link: 'https://beckon-denver.com/'
    },
    {
      inx: 2,
      restaurant: 'Buckhorn Exchange',
      link: 'http://www.buckhorn.com/'
    },
    {
      inx: 3,
      restaurant: 'ChoLon',
      link: 'https://www.cholon.com/'
    },
    {
      inx: 4,
      restaurant: 'El Five',
      link: 'https://www.ediblebeats.com/el-five'
    },
    {
      inx: 5,
      restaurant: 'Elway’s',
      link: 'https://www.elways.com/'
    },
    {
      inx: 6,
      restaurant: 'Fogo de Chão Brazilian Steakhouse',
      link: 'https://fogodechao.com/location/denver/'
    },
    {
      inx: 7,
      restaurant: 'Guard and Grace',
      link: 'https://www.guardandgrace.com/'
    },
    {
      inx: 8,
      restaurant: 'Jax Fish House & Oyster Bar',
      link: 'https://www.jaxfishhouse.com/lodo/'
    },
    {
      inx: 9,
      restaurant: 'Nocturne Jazz & Supper Club',
      link: 'https://www.nocturnejazz.com/'
    },
    {
      inx: 10,
      restaurant: 'Mercantile Dining and Provision',
      link: 'https://www.mercantiledenver.com/'
    },
    {
      inx: 11,
      restaurant: 'Mizuna Denver',
      link: 'https://www.mizunadenver.com/'
    },
    {
      inx: 12,
      restaurant: 'Ocean Prime Denver',
      link: 'https://www.ocean-prime.com/locations-menus/denver-larimer-square'
    },
    {
      inx: 13,
      restaurant: 'Palace Arms',
      link: 'https://www.brownpalace.com/dining/restaurants/palace-arms/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2'
    },
    {
      inx: 14,
      restaurant: 'Range',
      link: 'http://rangedowntown.com/'
    },
    {
      inx: 15,
      restaurant: 'Rioja',
      link: 'http://www.riojadenver.com/'
    },
    {
      inx: 16,
      restaurant: 'Shanahan’s Steakhouse',
      link: 'https://www.shanahanssteakhouse.com/'
    },
    {
      inx: 17,
      restaurant: 'STK Denver',
      link: 'https://stksteakhouse.com/venues/denver/'
    },
    {
      inx: 18,
      restaurant: 'Tavernetta',
      link: 'https://www.tavernettadenver.com/'
    },
    {
      inx: 19,
      restaurant: 'The Capital Grille Denver',
      link: 'https://www.thecapitalgrille.com/home'
    },
    {
      inx: 20,
      restaurant: 'Uchi Denver',
      link: 'https://uchidenver.com/'
    },
    {
      inx: 21,
      restaurant: 'Urban Farmer',
      link: 'https://www.urbanfarmersteakhouse.com/'
    },
  ]

  return (
      <div className="w-full bg-[#161616] ">
        <section className="tablet:py-[56px] py-10 w-full max-w-[1140px] mx-auto">
          <Image src={car_inside} alt="car_inside" className="tablet:rounded-[10px]"/>
          <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] leading-[44px] tablet:leading-[60px] font-[900] text-center mt-8 mb-10'>
            Private Black Car Service
          </h2>
          <div className='px-6 tablet:px-0 flex tablet:flex-row flex-col justify-between text-[#A4A4A4] text-[16px] leading-[22px]'>
            <div className='flex flex-col gap-y-6'>
              <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] text-center'>
                Fits 1-3 passengers
              </h4>
              <div className='w-full max-w-[773px] flex flex-col gap-y-6 text-center'>
                <p>
                  Enjoy your ride in our top-of-the-class vehicle. Always clean and comfortable, it will make your journey smooth and easy-going. Need something unique? Feel free to contact us with any needs that you have and we will arrange it for you. 
                </p>
                <p>
                  We offer statewide black car services to customers looking for luxury and comfort. There are many reasons you should consider using our black car service, instead of normal ride-sharing services. 
                </p>
                <strong>
                  The following are the benefits you get when you use our black car service:
                </strong>
                <ul className='flex flex-col gap-y-6 list-disc text-start'>
                  <li className='ml-10'>Our service guarantees you personal safety because our drivers undergo an extensive background check to ensure they are professional and do not pose any danger to the customers.</li>
                  <li className='ml-10'>Our chauffeurs always arrive on time and know the best routes to your destination. Our company has limousines equipped with the best navigation systems to give chauffeurs updated information on traffic and weather conditions that empower them to offer the most reliable service. </li>
                  <li className='ml-10'>Our limo services provide luxury to clients who want to show up in fashion. Our chauffeurs are professional and offer courteous gestures such as opening doors upon arrival at destinations. Our service thus eliminates the hustles of waiting for a ride, which is common for ride-sharing companies or traditional taxis. </li>
                  <li className='ml-10'>Our town cars offer you the best value for your money because they have entertainment systems that ensure your comfort and memorable experience. </li>
                </ul>
                <p>
                  If you are looking for a black car service around Denver International Airport, Northern Colorado, or any place within the state of Colorado, kindly contact us for an unforgettable transport experience. 
                </p>
              </div>
            </div>
            <div className='flex flex-col gap-y-6 tablet:mt-0 mt-6 text-center'>
              <h4 className='text-[#F7F7F7] text-[22px] leading-[28px]'>
                Safe and affordable service
              </h4>
              <p>
                Check our great <a href={PAGE_LINKS.PRICES} className='text-[#EEB975] underline'>rates</a> and book your ride today. 
              </p>
              <Link 
                href={PAGE_LINKS.BOOK_NOW}
                className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full mobile:w-fit mx-auto
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
          <div className='px-6 tablet:px-0 w-full max-w-[1140px] mx-auto flex tablet:flex-row flex-col justify-center items-center text-[16px] leading-[22px] text-[#919191] text-center'>
            <div className="flex flex-col gap-y-6 tablet:px-6">
              <Image src={hotel} alt="hotels"  className="rounded-[10px]"/>
              <h4 className="text-[22px] leading-[28px] text-[#E2E2E2]">
                Hotels
              </h4>
              <p>
                The Mile High City is an excellent place to visit. It has a wide range of activities and attractions available to its guests. No matter what you like to do the most - you can find it here. Shopping, dining, hiking, biking, cultural and art tours, brewery tours and outdoor adventures are only a few things available here. Still the first step to those activities while visiting Denver would be finding a nice hotel to stay. The list below has top hotels available for you in Denver. Already made a selection? We can help you with the next step - transportation.
              </p>
              <p>
                Book our black car service to pick you up from the airport when you arrive and then drop you off when you leave. You will be surprised with the low flat prices and discounts that we offer. Our chauffeurs are courteous and professional, and our vehicles are comfortable and well-maintained to meet and exceed your expectations. Add the hourly chauffeur service to your activities and have the car ready-to-go giving you the time to rest.
              </p>
              <strong className="tracking-[0.2px]">
                Order our 24/7 black car service on your next visit to enrich your Mile-High experience.
              </strong>
              <div className="text-[16px] leading-[22px] text-[#EEB957] flex flex-col gap-y-6 font-[700] underline tracking-[0.4px]">
                {hotels.map((item, inx) => (
                  <p key={inx}>
                    <a href={item.link}>{item.hotel}</a>
                  </p>
                ))}
              </div>
              <Link 
                href={PAGE_LINKS.BOOK_NOW}
                className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full mobile:w-fit mx-auto
                leading-[24px] tracking-[1px] font-bold rounded-xl mt-6 hover:bg-[#ffdea0] text-center mb-8 tablet:mb-0'
              >
                BOOK NOW RIDE
              </Link>
            </div>

            <div className="flex flex-col gap-y-6 tablet:px-6">
              <Image src={restaurant} alt="restaurants" className="rounded-[10px]"/>
              <h4 className="text-[22px] leading-[28px] text-[#E2E2E2]">
                Restaurants
              </h4>
              <p>
                Denver is a great city for going out. It offers the variety of restaurants that can fulfill any taste. From some of the best European kitchens to famous American and extravagant Asian cuisines, you can always find the perfect spot for the night out. The list below shows some of the best restaurants in the Mile-High city. All restaurants are offering reservations to eliminate the wait-time and make your experience better. Still sometimes those reservations overlap and there are times, especially now, when you must wait for your table to get ready. 
              </p>
              <p>
                By booking the hourly chauffeur service you will get a safe and reliable transportation for your night on the town. On top of this you can wait in the comport of your own limo in case your table is not ready yet. Our experienced chauffeurs will drive you anywhere you need to go while you are relaxing. Forget about the worries on how to get home late night or driving on your own; leave the driving to professionals and enjoy your time.
              </p>
              <strong className="tracking-[0.2px]">
                Order our 24/7 limo service to experience what the Mile-High City offers. 
              </strong>
              <div className="text-[16px] leading-[22px] text-[#EEB957] flex flex-col gap-y-6 font-[700] underline tracking-[0.4px]">
                {restaurants.map((item, inx) => (
                  <p key={inx}>
                    <a href={item.link}>{item.restaurant}</a>
                  </p>
                ))}
              </div>
              <Link 
                href={PAGE_LINKS.BOOK_NOW}
                className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full mobile:w-fit mx-auto
                leading-[24px] tracking-[1px] font-bold rounded-xl mt-6 hover:bg-[#ffdea0] text-center'
              >
                BOOK NOW RIDE
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full bg-[#161616] py-10 tablet:py-[64px]">
          <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] leading-[44px] tablet:leading-[60px] font-[900] text-center mb-10'>
            Corporate Transportation
          </h2>
          <div className="px-6 tablet:px-0 w-full max-w-[1140px] mx-auto flex tablet:flex-row flex-col-reverse justify-between">
            <div>
              <p className="text-[#A4A4A4] text-[16px] leading-[28px] tracking-[0.4px] w-full max-w-[720px]">
                Business traveling can be exhausting. While many people think it's a fun and pleasant experience all the time, those who actually do it know how hard it gets. By offering the executive transportation services - we can help to make your business travel a pleasant experience. We are authorized to work in all Denver Metro airports, so no matter if you are flying commercial or private - we can meet you. <br />
                Choose between one-way airport trip to get you to the meeting, round-trip to get you back to the airport or the hourly chauffeur service if you have multiple destinations on your list. Our vehicles are well-maintained and equipped for your safety and comfort, and our drivers will be there on time to pick you up.
              </p>
            </div>
            <Image src={hands} alt="hands" className="rounded-[10px] h-[250px] w-fit tablet:mb-0 mb-8"/>
          </div>
        </section>
      </div>
  )
}