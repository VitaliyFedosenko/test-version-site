'use client'

import Link from "next/link"
import Image from "next/image"
import { PAGE_LINKS } from "@/page-links"

import down from '../../public/images/header/down-arrow.svg'
import up from '../../public/images/header/arrow-up.svg'
import up_yellow from '../../public/images/header/arrow-up-yellow.svg'
import down_yellow from '../../public/images/header/down-arrow-yellow.svg'
import burger from '../../public/images/header/burger-menu.svg'
import React, { useRef } from "react"
import MobileNav from "./mobile-nav"

const Header = () => {  

  type LinkName = 
  "HOME" 
  | "BLACK_CAR_SERVICE" 
  | "MOUNTAIN_SUV_SERVICE" 
  | "ABOUT" 
  | "PRICES" 
  | "MOBILE_APP" 
  | "BOOK_NOW" 
  | "AFFILIATES" 
  | "CONTACT_US" 
  | "CORPORATE_TRANSPORTATION" 
  | "CONCERT_TRANSPORTATION" 
  | "DENVER_NIGHT_OUT" 
  | "EVENT_TRANSPORTATION" 
  | "WEDDING_TRANSPORTATION" 

  const [isMoreMenuOpen, setMoreMenuOpen] = React.useState(false)
  const [isHoveredDown, setIsHoveredDown] = React.useState(false)
  const [isHoveredUp, setIsHoveredUp] = React.useState(false)
  const [isMobileNavOpen, setMobileNavOpen] = React.useState(false)
  const [activeLink, setActiveLink] = React.useState<LinkName | null>(null)
  const [prevActiveLink, setPrevActiveLink] = React.useState<LinkName | null>(null)
  const [activeMoreLink, setActiveMoreLink] = React.useState<string | null>(null)

  const handleLinkClick = (linkName: LinkName) => {
    setActiveLink(linkName)
    setPrevActiveLink(activeLink)
    setActiveMoreLink(null)
  }

  const handleMoreLinkClick = (linkName: string) => {
    setActiveMoreLink(linkName);
  }

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen)
  }

  const closeMobileNav = () => {
    setMobileNavOpen(false)
  }

  const toggleMoreMenu = () => {
    setMoreMenuOpen(!isMoreMenuOpen)
  }

  const closeMoreMenu = () => {
    setMoreMenuOpen(false)
  }

  React.useEffect(() => {
    if (isMoreMenuOpen) {
      document.addEventListener("click", closeMoreMenu)
    } else {
      document.removeEventListener("click", closeMoreMenu)
    }

    return () => {
      document.removeEventListener("click", closeMoreMenu)
    }
  }, [isMoreMenuOpen])


  return (
    <header className="bg-black fixed top-0 left-0 w-full z-[100000] px-6 text-[#F7F7F7]">
      <div className="w-full max-w-[1140px] mx-auto tablet:py-4 py-6 flex justify-between items-center">
        <Link 
          href={PAGE_LINKS.MAIN}
          className="text-[22px] leading-[28px] font-noto font-bold"
        >
          Get-A-Ride
        </Link>
        <div className="tablet:hidden block" onClick={toggleMobileNav} 
        >
          <Image src={burger} alt="burger" className="w-7"/>
        </div>
        <div className="tablet:flex items-center gap-x-[32px] hidden">
          <Link href={PAGE_LINKS.MAIN} className={`hover:text-[#EEB957] ${
            activeLink === "HOME" ? "text-[#EEB957]" : ""
          } ${prevActiveLink === "HOME" ? "text-[#F7F7F7]" : ""}`} onClick={() => handleLinkClick("HOME")}>HOME</Link>
          <Link href={PAGE_LINKS.BLACK_CAR_SERVICE} className={`hover:text-[#EEB957] ${
            activeLink === "BLACK_CAR_SERVICE" ? "text-[#EEB957]" : ""
          } ${prevActiveLink === "BLACK_CAR_SERVICE" ? "text-[#F7F7F7]" : ""}`} onClick={() => handleLinkClick("BLACK_CAR_SERVICE")}>BLACK CAR SERVICE</Link>
          <Link href={PAGE_LINKS.MOUNTAIN_SUV_SERVICE} className={`hover:text-[#EEB957] ${
            activeLink === "MOUNTAIN_SUV_SERVICE" ? "text-[#EEB957]" : ""
          } ${prevActiveLink === "MOUNTAIN_SUV_SERVICE" ? "text-[#F7F7F7]" : ""}`} onClick={() => handleLinkClick("MOUNTAIN_SUV_SERVICE")}>MOUNTAIN SUV SERVICE</Link>
          <div 
            className="hover:text-[#EEB957] cursor-pointer" 
            onClick={toggleMoreMenu} 
          >
            { isMoreMenuOpen ? (
              <div className="flex justify-center items-center" 
                onMouseEnter={() => setIsHoveredUp(true)}
                onMouseLeave={() => setIsHoveredUp(false)}
              >
                <span>MORE</span>
                {isHoveredUp ? <Image src={up_yellow} alt="arrow_up_yellow" className="w-3 ml-2" /> : <Image src={up} alt="arrow_up" className="w-3 ml-2" /> }
              </div>
                ) : (
              <div className="flex justify-center items-center" 
                onMouseEnter={() => setIsHoveredDown(true)}
                onMouseLeave={() => setIsHoveredDown(false)}
              >
                <span>MORE</span>
                {isHoveredDown ? <Image src={down_yellow} alt="arrow_down_yellow" className="w-3 ml-2"/> : <Image src={down} alt="arrow_down" className="w-3 ml-2"/> }
              </div>
            )}
          </div>
        </div>
      </div>
      {isMoreMenuOpen && (
        <div className="absolute top-[60px] right-[70px] flex flex-col z-[1000000] bg-[#191919] 
          rounded-[6px] px-6 py-8 shadow-[rgba(0,0,0,0.7)_0px_3px_8px] gap-y-3"
        >
          <Link href={PAGE_LINKS.CORPORATE_TRANSPORTATION} 
            onClick={() => {
            handleLinkClick("CORPORATE_TRANSPORTATION") 
            handleMoreLinkClick("CORPORATE_TRANSPORTATION") 
            closeMoreMenu()}} 
            className={`hover:text-[#EEB957] ${
              activeMoreLink === "CORPORATE_TRANSPORTATION" ? "!text-[#EEB957]" : ""
            }`}
          >
            CORPORATE TRANSPORTATION
          </Link>
          <div className="flex flex-col">
            <span>OTHER SERVICES</span>
            <Link 
              href={PAGE_LINKS.CONCERT_TRANSPORTATION} 
              onClick={() => {
                handleLinkClick("CONCERT_TRANSPORTATION") 
                handleMoreLinkClick("CONCERT_TRANSPORTATION") 
                closeMoreMenu()}} 
              className={`hover:text-[#EEB957] ml-3 text-[#A4A4A4] mt-3 ${
                activeMoreLink === "CONCERT_TRANSPORTATION" ? "!text-[#EEB957]" : ""
              }`}
            >
              Concert Transportation
            </Link>
            <Link 
              href={PAGE_LINKS.DENVER_NIGHT_OUT} 
              onClick={() => {
                handleLinkClick("DENVER_NIGHT_OUT") 
                handleMoreLinkClick("DENVER_NIGHT_OUT") 
                closeMoreMenu()}} 
              className={`hover:text-[#EEB957] ml-3 text-[#A4A4A4] ${
                activeMoreLink === "DENVER_NIGHT_OUT" ? "!text-[#EEB957]" : ""
              }`}
            >
              Denver Night Out Service
            </Link>
            <Link 
              href={PAGE_LINKS.EVENT_TRANSPORTATION} 
              onClick={() => {
                handleLinkClick("EVENT_TRANSPORTATION") 
                handleMoreLinkClick("EVENT_TRANSPORTATION") 
                closeMoreMenu()}} 
              className={`hover:text-[#EEB957] ml-3 text-[#A4A4A4] ${
                activeMoreLink === "EVENT_TRANSPORTATION" ? "!text-[#EEB957]" : ""
              }`}
            >
              Event Transportation
            </Link>
            <Link 
              href={PAGE_LINKS.WEDDING_TRANSPORTATION} 
              onClick={() => {
                handleLinkClick("WEDDING_TRANSPORTATION") 
                handleMoreLinkClick("WEDDING_TRANSPORTATION") 
                closeMoreMenu()}} 
              className={`hover:text-[#EEB957] ml-3 text-[#A4A4A4] ${
                activeMoreLink === "WEDDING_TRANSPORTATION" ? "!text-[#EEB957]" : ""
              }`}
            >
              Wedding Transportation
            </Link>
          </div>
            <Link href={PAGE_LINKS.ABOUT} 
              onClick={() => {
              handleLinkClick("ABOUT") 
              handleMoreLinkClick("ABOUT") 
              closeMoreMenu() }}
              className={`hover:text-[#EEB957] ${
                activeMoreLink === "ABOUT" ? "!text-[#EEB957]" : ""
              }`}
            >
              ABOUT
            </Link>
            <Link href={PAGE_LINKS.PRICES} 
              onClick={() => {
              handleLinkClick("PRICES") 
              handleMoreLinkClick("PRICES") 
              closeMoreMenu() }}
              className={`hover:text-[#EEB957] ${
                activeMoreLink === "PRICES" ? "!text-[#EEB957]" : ""
              }`}
            >
              PRICES
            </Link>
            <Link href={PAGE_LINKS.MOBILE_APP} 
              onClick={() => {
              handleLinkClick("MOBILE_APP") 
              handleMoreLinkClick("MOBILE_APP") 
              closeMoreMenu() }}
              className={`hover:text-[#EEB957] ${
                activeMoreLink === "MOBILE_APP" ? "!text-[#EEB957]" : ""
              }`}
            >
              MOBILE APP
            </Link>
            <Link href={PAGE_LINKS.BOOK_NOW} 
              onClick={() => {
              handleLinkClick("BOOK_NOW") 
              handleMoreLinkClick("BOOK_NOW") 
              closeMoreMenu() }}
              className={`hover:text-[#EEB957] ${
                activeMoreLink === "BOOK_NOW" ? "!text-[#EEB957]" : ""
              }`}
            >
              BOOK NOW
            </Link>
            <Link href={PAGE_LINKS.AFFILIATES} 
              onClick={() => {
              handleLinkClick("AFFILIATES") 
              handleMoreLinkClick("AFFILIATES") 
              closeMoreMenu() }}
              className={`hover:text-[#EEB957] ${
                activeMoreLink === "AFFILIATES" ? "!text-[#EEB957]" : ""
              }`}
            >
              AFFILIATES
            </Link>
            <Link href={PAGE_LINKS.CONTACT_US} 
              onClick={() => {
              handleLinkClick("CONTACT_US") 
              handleMoreLinkClick("CONTACT_US") 
              closeMoreMenu() }}
              className={`hover:text-[#EEB957] ${
                activeMoreLink === "CONTACT_US" ? "!text-[#EEB957]" : ""
              }`}
            >
              CONTACT US
            </Link>
        </div>
      )}
      <MobileNav isOpen={isMobileNavOpen} onClose={closeMobileNav} />
    </header>
  )
}

export default Header