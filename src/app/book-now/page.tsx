"use client"

import { PAGE_LINKS } from "@/page-links"
import Link from "next/link"




export default function BookNow() {
  return (
    <div className="w-full bg-[#161616] text-[#A4A4A4] px-6 tablet:px-0">
      <section className="tablet:py-[56px] py-10 w-full max-w-[773px] mx-auto text-center flex flex-col gap-y-6 tracking-[0.5px]">
        <h4 className="text-[32px] leading-[40px] text-[#F7F7F7]">
          Tips and fees are included in the price listed.
        </h4>
        <p>
          All bookings are subject to availability and cannot be considered complete until the customer receives the confirmation.
        </p>
        <p>
          Hourly ride is available in Denver Metro area only. Hourly ride in Boulder, Fort Collins, Colorado Springs and Foothills area is available for the extra charge with prior approval. Please see the <Link href={PAGE_LINKS.PRICES} className="text-[#EEB957] underline">pricing</Link> page for more details on hourly rides.
        </p>
        <p>
          Please use <strong>DEN code</strong> for Denver Airport and <strong>APA code</strong> for Centennial Airport for the correct rate.
        </p>
        <p>
          By scheduling the service the customer agrees to the{' '}
            <Link 
              href={PAGE_LINKS.TERMS}
              className="text-[#EEB957] underline"
            >
              terms and conditions
            </Link>.
        </p>
      </section>
      <section className="bg-black w-full">
        <div className="tablet:py-[56px] py-10 w-full max-w-[1140px] h-full mx-auto">
          <object 
            data="https://book.mylimobiz.com/v4/getaride" 
            width="100%" 
            height="1405" 
            type="text/html"
            className="h-[1405px] mobile:h-[1040px] tablet:h-[1000px]"
          >
            <script type="text/javascript" src="https://book.mylimobiz.com/v4/widgets/widget-loader.js"></script>
          </object>
        </div>
      </section>
    </div>
  )
}