import Image from "next/image"

import app_img from '../../../public/images/mobile-app/app-img.webp'
import appstore from '../../../public/images/mobile-app/appstore.webp'
import google_play from '../../../public/images/mobile-app/google-play.webp'

export default function MobileApp() {
  return (
    <div className="w-full bg-[#161616]">
      <section className="tablet:py-[56px] py-10 w-full max-w-[1140px] mx-auto text-[#A4A4A4] text-[18px] leading-[28px] px-6 tablet:px-0">
      <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] 
          leading-[44px] tablet:leading-[60px] font-[900] text-center mb-10'
        >
          Get-A-Ride Mobile App
      </h2>
        <div className="flex tablet:flex-row flex-col gap-x-[48px]">
          <Image src={app_img} alt="first" className="rounded-[10px] w-full h-fit tablet:max-w-[338px] max-w-[500px] mb-6 tablet:mb-0 mobile:mx-auto"/>
          <div>
            <div className="flex tablet:flex-col flex-row justify-around tablet:gap-y-6 mb-6">
              <div className="relative w-[165px] h-[67px]">
                <Image 
                  src={appstore} 
                  alt="appstore" 
                  className="w-[165px] h-fit border-[1px] border-[#b7b7b7] rounded-[10px]"/>
                <a 
                  href="https://apps.apple.com/us/app/driven-anywhere/id1330142510" 
                  target="_blank" 
                  className="absolute top-0 left-0 h-full w-full">
                </a>
              </div>
              <div className="relative w-[165px] h-[67px]">
                <Image src={google_play} alt="google_play" className="w-[165px] h-fit border-[1px] border-[#b7b7b7] rounded-[10px]"/>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.limoanywhere.driven&hl=en_US&gl=US" 
                  target="_blank" 
                  className="absolute top-0 left-0 h-full w-full">
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-y-6">
              <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] mobile:text-center'>
                Download Driven Anywhere app to easily book and manage your rides.
              </h4>
              <strong>
                Use code C6EC0D on your first login and create your account.
              </strong>
              <p>
                With our mobile app you can:
              </p>
              <ul className='flex flex-col list-disc text-start tracking-[0.5px] gap-y-2 tablet:gap-y-3'>
                <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Check the rate for your future rides.</li>
                <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Book your upcoming rides anywhere in Colorado.</li>
                <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Select preferred vehicle type.</li>
                <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Save preferred locations and payment details for faster checkout.</li>
                <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Confirm and pay for your ride.</li>
                <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Cancel your upcoming rides.*</li>
                <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Receive live updates from the driver.</li>
                <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Track your car on the device.</li>
                <li className='tablet:ml-10 ml-4 mb-1 tablet:mb-0'>Contact the driver through the app.</li>
              </ul>
              <p>
                *Cancelations less that 72 hours prior to the ride start are subject to additional fees. <br />
                Please refer to the Terms and Conditions page to see out Cancelation policy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}