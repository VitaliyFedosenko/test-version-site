import Image from "next/image"

import night_denver from '../../../public/images/denver-night-out-service/night_denver.webp'
import cholon from '../../../public/images/denver-night-out-service/cholon.webp'
import eddie from '../../../public/images/denver-night-out-service/eddie-vs.webp'
import matsuhisa from '../../../public/images/denver-night-out-service/matsuhisa.webp'
import mile_high from '../../../public/images/denver-night-out-service/mile-high.webp'

export default function DenverNightOutService() {

  const carOptions = [
    {
      title: 'Sedan (1-3 passengers):',
      bullets: [
        {
          text: 'Up to 3 hours...........$200'
        },
        {
          text: 'Up to 6 hours...........$350'
        },
        {
          text: 'Up to 9 hours*.........$550'
        },
      ]
    },
    {
      title: 'SUV (1-6 passengers):',
      bullets: [
        {
          text: 'Up to 3 hours...........$250'
        },
        {
          text: 'Up to 6 hours...........$400'
        },
        {
          text: 'Up to 9 hours*.........$675'
        },
      ]
    },
  ]

  return (
    <div className="w-full bg-[#161616]">
      <section className="tablet:py-[56px] py-10 w-full max-w-[1140px] mx-auto text-[#A4A4A4]">
        <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] 
          leading-[44px] tablet:leading-[60px] font-[900] text-center mb-10 px-6 tablet:px-0'
        >
          Denver Night Out Limo Service
        </h2>
        <div className="flex tablet:flex-row flex-col gap-x-[48px]">
          <div className="tablet:hidden mb-6">
            <Image src={night_denver} alt="night_denver"/>
          </div>
          <div className="w-full max-w-[725px] flex flex-col gap-y-6 px-6 tablet:px-0">
            <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] text-center'>
              Classy and responsible way to get around
            </h4>
            <p>
            No matter if you are taking your loved one on the date or celebrating a special event with the family or group of friends - professional car service will make your experience safe and more enjoyable. We provide newer vehicles driven by experienced chauffeurs to serve your needs.
            </p>
            <p>
              Book our car service for your next night on the town and enjoy the peace of mind knowing that the car is ready anytime you need it. Forget about overcrowded parking or rideshare wait time and unreliability - let us be your designated driver. Arrive to your venue in style, hop a bar or two after and get home safe. Your friends or loved ones will appreciate your thoughtfulness and care.
            </p>
            <div className="flex flex-col gap-y-6">
              {carOptions.map((item) => (
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
            <p>
              *Limited time offer.
            </p>
          </div>
          <div>
            <Image src={night_denver} alt="night_denver" className="rounded-[10px] tablet:w-[386px] hidden tablet:block"/>
          </div>
        </div>
      </section>
      <section className='tablet:py-[56px] py-10 w-full bg-black px-6 tablet:px-0'>
        <div className="w-full max-w-[1140px] mx-auto">
          <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] 
            leading-[44px] tablet:leading-[60px] font-[900] text-center mb-10'
          >
            Consider Visiting
          </h2>  
          <div className="flex tablet:justify-between justify-center flex-wrap items-center gap-y-6 gap-x-5 mobile:gap-x-0">
            <div className="relative">
              <Image src={eddie} alt="eddie" className=""/>
              <a href="https://www.eddiev.com/home" target="_blank" className="absolute top-0 left-0 w-full h-full"></a>
            </div>
            <div className="relative">
              <Image src={matsuhisa} alt="matsuhisa" className=""/>
              <a href="https://www.matsuhisarestaurants.com/denver/" target="_blank" className="absolute top-0 left-0 w-full h-full"></a>
            </div>
            <div className="relative">
              <Image src={cholon} alt="cholon" className=""/>
              <a href="https://www.cholon.com/" target="_blank" className="absolute top-0 left-0 w-full h-full"></a>
            </div>
            <div>
              <Image src={mile_high} alt="mile_high" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}