'use client'
import posthog from "posthog-js"
import React from "react"


const CookieBanner = () => {  
  const [showBanner, setShowBanner] = React.useState(true)

  const acceptCookies = () => {
    posthog.opt_in_capturing()
    setShowBanner(false)
    localStorage.setItem('cookieConsent', 'accepted')
  }

  const declineCookies = () => {
    posthog.opt_out_capturing()
    setShowBanner(false)
    localStorage.setItem('cookieConsent', 'declined')
  }

  React.useEffect(() => {
    const consentStatus = localStorage.getItem('cookieConsent');
    if (consentStatus === 'accepted' || consentStatus === 'declined') {
      setShowBanner(false)
    }
  }, [])

  return (
    <>
      {showBanner && (
        <div className="fixed bottom-0 right-0 mobile:bottom-5 mobile:right-5 w-full mobile:max-w-[400px]
          bg-[#eeb957d9] mobile:bg-[#EEB957] z-[10000000] p-6 mobile:rounded-xl"
        >
          <h4 className="text-[22px] leading-[22px] mb-4 font-medium">This website uses cookies.</h4>
          <p>
            We use cookies to analyze website traffic and optimize your website experience. 
            By accepting our use of cookies, your data will be aggregated with all other user data.
          </p>
          <div className="flex items-center justify-between text-white mt-4">
            <button 
              className="text-[14px] bg-black hover:bg-[#2a2a2a] py-[14px] px-[46px] rounded-xl font-bold"
              onClick={declineCookies}
            >
                DECLINE
            </button>
            <button 
              className="text-[14px] bg-black hover:bg-[#2a2a2a] py-[14px] px-[46px] rounded-xl font-bold"
              onClick={acceptCookies}
            >
              ACCEPT
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieBanner