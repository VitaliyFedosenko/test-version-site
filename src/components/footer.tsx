import Image from "next/image"

import facebook from '../../public/images/footer/facebook_icon_footer.svg'
import insta from '../../public/images/footer/instagram_icon_footer.svg'
import yelp from '../../public/images/footer/yelp_icon_footer.svg'
import { PAGE_LINKS } from "@/page-links"

const Footer = () => {  
  return (
    <footer className="bg-[rgb(22,22,22)] py-[72px] px-6 text-[14px] leading-[22px] text-[#A9A9A9]">
      <div className="flex mobile:flex-row flex-col-reverse px-6 tablet:px-0 justify-between items-center w-full max-w-[1140px] mx-auto">
        <div className="mb-6 mobile:mb-0 text-center tablet:text-start">
          <p className="tablet:mb-3 mb-2">
            Copyright © 2019 Get-A-Ride LLC - All Rights Reserved.
          </p>
            <a 
              href={PAGE_LINKS.TERMS}
              className="text-[#EEB957] tracking-[0.5px]"
            >
              Terms and Conditions
            </a>
        </div>
        
        <div className="flex items-center tablet:gap-x-2 gap-x-4 mb-6 mobile:mb-0">
          <div className="relative">
            <Image src={facebook} alt="facebook" className="w-10" />
            <a href="https://www.facebook.com/114892700265364" target="_blank" className="absolute top-0 left-0 w-full h-full"></a>
          </div>
          <div className="relative">
            <Image src={insta} alt="insta" className="w-[34px]"/>
            <a href="https://www.instagram.com/get_a_ride_denver" target="_blank" className="absolute top-0 left-0 w-full h-full"></a>
          </div>
          <div className="relative">
            <Image src={yelp} alt="yelp" className="w-[34px]"/>
            <a href="https://www.yelp.com/biz/gYvUj9v8_ayoBURgcGY6Gw" target="_blank" className="absolute top-0 left-0 w-full h-full"></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer