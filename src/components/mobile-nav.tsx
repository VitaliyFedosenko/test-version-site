import { PAGE_LINKS } from "@/page-links"
import Link from "next/link"
import Image from "next/image"
import React from "react"

import cross from '../../public/images/header/cross.svg'
import down from '../../public/images/header/down-arrow.svg'
import up from '../../public/images/header/arrow-up.svg'

const otherServices = [
  {
    text: 'Concert Transportation',
    link: PAGE_LINKS.CONCERT_TRANSPORTATION,
  },
  {
    text: 'Denver Night Out Service',
    link: PAGE_LINKS.DENVER_NIGHT_OUT,
  },
  {
    text: 'Event Transportation',
    link: PAGE_LINKS.EVENT_TRANSPORTATION,
  },
  {
    text: 'Wedding Transportation',
    link: PAGE_LINKS.WEDDING_TRANSPORTATION,
  },
]

const mobileLinksSecondery = [
  {
    text: 'About',
    link: PAGE_LINKS.ABOUT,
  },
  {
    text: 'Prices',
    link: PAGE_LINKS.PRICES,
  },
  {
    text: 'Mobile App',
    link: PAGE_LINKS.MOBILE_APP,
  },
  {
    text: 'Book Now',
    link: PAGE_LINKS.BOOK_NOW,
  },
  {
    text: 'Affiliates',
    link: PAGE_LINKS.AFFILIATES,
  },
  {
    text: 'Contact Us',
    link: PAGE_LINKS.CONTACT_US,
  }
]

const mobileLinksPrimary = [
  {
    text: (<><span className="font-bold">Home</span></>),
    link: PAGE_LINKS.MAIN,
  },
  {
    text: (<><span>Black Car Service</span></>),
    link: PAGE_LINKS.BLACK_CAR_SERVICE,
  },
   {
    text: (<><span>Mountain SUV Service</span></>),
    link: PAGE_LINKS.MOUNTAIN_SUV_SERVICE,
  },
   {
    text: (<><span>Corporate Transportation</span></>),
    link: PAGE_LINKS.CORPORATE_TRANSPORTATION,
  },
]

//@ts-ignore
const MobileNav = ({ isOpen, onClose }) => { 

  const [isOtherServicesOpen, setOtherServicesOpen] = React.useState(false)

  const toggleOtherServices = () => {
    setOtherServicesOpen(!isOtherServicesOpen)
  }

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  return (
    <>
      <div className={`absolute top-0 left-0 flex flex-col z-[10000000] bg-[#191919] overflow-y-auto h-[100vh]
        px-6 py-6 w-full text-[16px] leading-[20px] ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="w-full flex justify-end fixed top-0 left-0 bg-[#191919] pt-6 px-6">
          <Image src={cross} alt="cross" className="w-7" onClick={onClose} />
        </div>
        <div className="flex flex-col mt-[30px] tracking-[0.5px]">
          { mobileLinksPrimary.map((item) => (
              <Link 
                key={item.link}
                href={item.link}
                onClick={onClose}
                className="focus:text-[#EEB957] px-6 py-4 border-b-[0.5px] border-[#737373]"
              >
                {item.text}
              </Link>
            ) 
          )}
        </div>
        <div 
          className="flex flex-col px-6 py-2 border-b-[0.5px] border-[#737373] focus:text-[#EEB957]" 
          onClick={toggleOtherServices}
        >
          <p className="flex justify-between items-center py-2">
            <span>Other Services</span>
            { isOtherServicesOpen ? <Image src={up} alt="up" className="w-4" /> : <Image src={down} alt="down" className="w-4" /> }
          </p>
          { isOtherServicesOpen && (
            <div className="flex flex-col text-[16px] my-6 tracking-[0.5px]">
              { otherServices.map((item) => (
                  <Link 
                  key={item.link}
                    href={item.link}
                    onClick={onClose}
                    className="focus:text-[#EEB957] px-4 py-1 text-[#A4A4A4]"
                  >
                    {item.text}
                  </Link>
                )
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col tracking-[0.5px]">
          { mobileLinksSecondery.map((item) => (
              <Link 
                key={item.link}
                href={item.link}
                onClick={onClose}
                className="focus:text-[#EEB957] px-6 py-4 border-b-[0.5px] border-[#737373] last:border-b-0"
              >
                {item.text}
              </Link>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default MobileNav