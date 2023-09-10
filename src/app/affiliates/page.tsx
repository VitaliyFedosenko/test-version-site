import Image from "next/image"

import cars from '../../../public/images/affiliates/cars.webp'

export default function Affiliates() {
  return (
    <div className="w-full bg-[#161616]">
      <section className="tablet:py-[56px] py-10 w-full max-w-[1140px] mx-auto text-[#A4A4A4] text-[18px] leading-[28px]">
        <Image src={cars} alt="cars" className="tablet:rounded-[10px] w-full h-fit mb-6 tablet:mb-0"/>
        <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] px-6 tablet:px-0
          leading-[44px] tablet:leading-[60px] font-[900] text-center my-10'
        >
          Affiliates
        </h2>
        <div className="flex tablet:flex-row flex-col tablet:gap-x-[48px] gap-y-6 px-6 tablet:px-0">
          <div className="flex flex-col w-full max-w-[773px] gap-y-6">
            <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] text-center'>
              Join the team
            </h4>
            <strong>
              We are looking for professionals in Colorado to expand our reach in today's growing market. 
            </strong>
            <p>
              If you are licensed limousine operator or company in Colorado interested in getting an additional rides - please fill out the form below and we'll get in touch with you. Please scroll down to see the requirements below to be considered.
            </p>
            <strong>
              You must be fully licensed limousine operator in Colorado and have the following: 
            </strong>
            <ul className='flex flex-col list-disc text-start gap-y-3'>
              <li className='ml-10'>Newer fleet (not older than 4 model years).</li>
              <li className='ml-10'>Minimum of $1m commercial insurance policy.</li>
              <li className='ml-10'>24-hour dispatch service.</li>
              <li className='ml-10'>Criminal background checks and drug screening records.</li>
              <li className='ml-10'>Great work attitude and enthusiasm.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-y-6 w-full max-w-[400px] mobile:mx-auto tablet:mx-0">
            <h4 className='text-[#F7F7F7] text-[22px] leading-[28px] text-center'>
              Does this all apply to you?
            </h4>
            <p>
              Fill out the form by following the link below to join our team of professionals and enjoy great rates and opportunities. 
            </p>
            <a 
              href='https://docs.google.com/forms/d/e/1FAIpQLSft8lpbZvNKCy67ReT8P8stquJE6T_y4wsL2BH6AEo1b5NUMQ/viewform?usp=sf_link'
              target="_blank"
              className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full tablet:w-fit mx-auto
              leading-[24px] tracking-[1px] font-bold rounded-xl hover:bg-[#ffdea0] text-center mt-6'
            >
              AFFILIATE FORM
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}