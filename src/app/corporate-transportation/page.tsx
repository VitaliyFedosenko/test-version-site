import Image from "next/image"
import { PAGE_LINKS } from "@/page-links"
import Link from "next/link"

import fly_n_car from '../../../public/images/corporate-transportation/corporate.webp'

export default function CorporateTransportation() {
  return (
    <div className="w-full bg-[#161616]">
      <section className="tablet:py-[56px] py-10 w-full max-w-[1140px] mx-auto">
        <Image src={fly_n_car} alt="fly_n_car" className="tablet:rounded-[10px]"/>
        <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] leading-[44px] tablet:leading-[60px] font-[900] text-center mt-8 mb-10'>
          Corporate Transportation
        </h2>
        <div className='px-6 tablet:px-0 flex w-full justify-between tablet:flex-row flex-col text-[#A4A4A4] text-[16px] leading-[22px]'>
          <div className='flex flex-col gap-y-6 text-center'>
            <div className='w-full max-w-[773px] flex flex-col gap-y-6'>
              <p className="text-center">
                We understand the needs of business executives and design our services to meet them. Our corporate transportation service anticipates the dynamics of corporate executives and addresses them adequately. We know business meetings require reliable transportation to allow executives to arrive on time. We have professional chauffeurs who pay attention to your punctuality needs.
              </p>
              <strong className="text-center tracking-[0.4px]">
                The corporate transportation package offers you specific benefits that address your needs as listed below:
              </strong>
              <ul className='flex flex-col gap-y-6 list-disc text-start'>
                <li className='ml-10'>Our corporate transportation offers you VIP treatment immediately after arriving at the airport. The treatment thus reduces the stress of hailing a taxi.</li>
                <li className='ml-10'>The design of our luxurious vehicles ensures you have a smooth ride. We understand that flying may be stressful sometimes. Our corporate transportation service thus focuses on eliminating bumpy rides so that you can recover from jetlag.</li>
                <li className='ml-10'>We understand that you may need to have private conversations for business reasons. We can partition a vehicle per request to offer you privacy to make sensitive phone calls and hold conversations with other executives or customers.</li>
                <li className='ml-10'>Our corporate transportation offers flexible customer care to address changes in executives’ plans. We know that meetings and other business aspects change from time to time and can affect the rides you have requested. We accommodate such changes by allowing you to change the pickup times.</li>
              </ul>
            </div>
          </div>
          <div className="tablet:mt-0 mt-6 tablet:max-w-[338px] w-full flex justify-center h-fit">
            <Link 
              href={PAGE_LINKS.BOOK_NOW}
              className='bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full mobile:w-fit 
              leading-[24px] tracking-[1px] font-bold rounded-xl hover:bg-[#ffdea0] text-center'
            >
              BOOK NOW
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}




