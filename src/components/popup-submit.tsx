import Image from "next/image"

import greenmark from "../../public/images/popup/success-greenmark-icon.svg"

interface PopupSubmitProps {
  show: boolean
}

export const PopupSubmit: React.FC<PopupSubmitProps> = ({ show }) => {
  if (!show) {
    return null
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[#161616] z-[1000]">
      <div className="bg-black rounded-2xl py-10 mobile:py-[80px] border-[0.5px] border-[#2f2f2f]">
        <Image src={greenmark} alt='greenmark' className="mx-auto mb-10"/>
        <p className="text-[22px] text-center text-[#EEB957] ">
          Thank you for your inquiry! We will get back to you within 48 hours.
        </p>
      </div>
    </div>
  )
}