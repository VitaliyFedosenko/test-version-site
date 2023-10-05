import React from 'react'
import Image from 'next/image'

import face_1 from '../../public/images/google-reviews/face_1.png'
import face_2 from '../../public/images/google-reviews/face_2.png'
import face_3 from '../../public/images/google-reviews/face_3.png'
import face_4 from '../../public/images/google-reviews/face_4.png'
import face_5 from '../../public/images/google-reviews/face_5.png'
import face_6 from '../../public/images/google-reviews/face_6.png'
import face_7 from '../../public/images/google-reviews/face_7.png'
import face_8 from '../../public/images/google-reviews/face_8.png'
import face_9 from '../../public/images/google-reviews/face_9.png'
import face_10 from '../../public/images/google-reviews/face_10.png'
import face_13 from '../../public/images/google-reviews/face_13.png'
import face_14 from '../../public/images/google-reviews/face_14.png'
import face_15 from '../../public/images/google-reviews/face_15.png'
import face_16 from '../../public/images/google-reviews/face_16.png'
import face_12 from '../../public/images/google-reviews/face_12.png'
import face_11 from '../../public/images/google-reviews/face_11.png'
import google_logo from '../../public/images/home-page-pic/google-tile.svg'
import thumbtrack_logo from '../../public/images/home-page-pic/thumbtrack_logo.webp'
import five_stars from '../../public/images/home-page-pic/rate-stars-yellow.svg'
import arrow_left from '../../public/images/home-page-pic/left-arrow.svg'
import arrow_right from '../../public/images/home-page-pic/right-arrow.svg'

const googleReviews = [
  {
    inx: 1,
    avatar: face_1,
    text: 'This Black car service is excellent. Only one I will use!',
    userName: 'Vicki Brown -',
    logo: google_logo,
    date: '7/26/2023',
    link: 'https://www.google.com/maps?cid=15798912800038747547'
  },
  {
    inx: 2,
    avatar: face_2,
    text: 'We had a fun birthday trip planned and Roman was so pr...',
    userName: 'Kim Charles -',
    logo: google_logo,
    date: '7/23/2023',
    link: 'https://www.google.com/maps?cid=15798912800038747547'
  },
  {
    inx: 3,
    avatar: face_3,
    text: 'We have used them several times to and from the airport....',
    userName: 'Niek Feyenoord4Ever -',
    logo: google_logo,
    date: '2/17/2023',
    link: 'https://www.google.com/maps?cid=15798912800038747547'
  },
  {
    inx: 4,
    avatar: face_4,
    text: 'Great and professional service. Will definitely use again. Reas...',
    userName: 'E K - ',
    logo: google_logo,
    date: '9/4/2022',
    link: 'https://www.google.com/maps?cid=15798912800038747547'
  },
  {
    inx: 5,
    avatar: face_5,
    text: 'We got a driver named Roman that was incredibly profession...',
    userName: 'Steven Wizzle -',
    logo: google_logo,
    date: '5/25/2021',
    link: 'https://www.google.com/maps?cid=15798912800038747547'
  },
  {
    inx: 6,
    avatar: face_6,
    text: 'Highly recommend this car service! Roman picked us up a...',
    userName: 'Claudia Aniol -',
    logo: google_logo,
    date: '5/21/2021',
    link: 'https://www.google.com/maps?cid=15798912800038747547'
  },
  {
    inx: 7,
    avatar: face_7,
    text: 'Very excellent in all aspects of your profession. Atten...',
    userName: 'James L. -',
    logo: thumbtrack_logo,
    date: '1/07/2023',
    link: 'https://www.thumbtack.com/co/denver/limousines/get-ride-executive-transportation/service/393807679983132677'
  },
  {
    inx: 8,
    avatar: face_8,
    text: 'Top service, very professional & very nice lux SUV and ...',
    userName: 'Ricardo G. -',
    logo: thumbtrack_logo,
    date: '3/07/2023',
    link: 'https://www.thumbtack.com/co/denver/limousines/get-ride-executive-transportation/service/393807679983132677'
  },
  {
    inx: 9,
    avatar: face_9,
    text: 'Did after wedding transport. Driver was on time car wa...',
    userName: 'Mike a. -',
    logo: thumbtrack_logo,
    date: '5/31/2022',
    link: 'https://www.thumbtack.com/co/denver/limousines/get-ride-executive-transportation/service/393807679983132677'
  },
  {
    inx: 10,
    avatar: face_12,
    text: 'I used Get-A-Ride for Prom night for my son and his ...',
    userName: 'Kenia A. -',
    logo: thumbtrack_logo,
    date: '2/05/2022',
    link: 'https://www.thumbtack.com/co/denver/limousines/get-ride-executive-transportation/service/393807679983132677'
  },
  {
    inx: 11,
    avatar: face_10,
    text: 'Roman was awesome! Although there was a terrible ...',
    userName: 'Teena T. -',
    logo: thumbtrack_logo,
    date: '1/22/2022',
    link: 'https://www.thumbtack.com/co/denver/limousines/get-ride-executive-transportation/service/393807679983132677'
  },
  {
    inx: 12,
    avatar: face_11,
    text: 'Great and reliable service, used it on my way from the ...',
    userName: 'Anthony M. -',
    logo: thumbtrack_logo,
    date: '27/07/2020',
    link: 'https://www.thumbtack.com/co/denver/limousines/get-ride-executive-transportation/service/393807679983132677'
  },
  {
    inx: 13,
    avatar: face_13,
    text: 'Worth every penny! Easy to work with. On time and very ...',
    userName: 'Tim F. -',
    logo: thumbtrack_logo,
    date: '7/28/2021',
    link: 'https://www.thumbtack.com/co/denver/limousines/get-ride-executive-transportation/service/393807679983132677'
  },
  {
    inx: 14,
    avatar: face_14,
    text: 'They are awesome. Will definitely use again.',
    userName: 'Brian H. -',
    logo: thumbtrack_logo,
    date: '9/27/2021',
    link: 'https://www.thumbtack.com/co/denver/limousines/get-ride-executive-transportation/service/393807679983132677'
  },
  {
    inx: 15,
    avatar: face_15,
    text: 'Incredible service, one of the most professional, clean...',
    userName: 'Kyle T. -',
    logo: thumbtrack_logo,
    date: '4/12/2022',
    link: 'https://www.thumbtack.com/co/denver/limousines/get-ride-executive-transportation/service/393807679983132677'
  },
  {
    inx: 16,
    avatar: face_16,
    text: 'We used Get-A-Ride Denver for transportation after our ...',
    userName: 'Sarahanne T. -',
    logo: thumbtrack_logo,
    date: '2/2/2022',
    link: 'https://www.thumbtack.com/co/denver/limousines/get-ride-executive-transportation/service/393807679983132677'
  },
]

export const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const cardsPerPage = 4
  const cardsPerPageTablet = 2
  const cardsPerPageMobile = 1

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % googleReviews.length);
  }

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + googleReviews.length) % googleReviews.length);
  }

  return (
    <div className="w-full max-w-[1190px] mx-auto">
      <div className='hidden tablet:block'>
        <div className="flex justify-between items-center">
          <button onClick={handleClickPrev} disabled={currentIndex === 0}>
          <Image 
              src={arrow_left} 
              alt="arrow_left" 
              className='w-[30px] cursor-pointer'
            />
          </button>
          {googleReviews.slice(currentIndex, currentIndex + cardsPerPage).map((review, inx) => (
              <div 
                key={inx}
                className='bg-white py-6 px-3 rounded-[10px] w-full max-w-[262px] mt-[64px]'
              >
                <div className='flex flex-col justify-center items-center gap-y-6'>
                  <Image src={review.avatar} alt="avatar_user" className='w-[100px] h-fit' />
                  <Image src={five_stars} alt="five_stars" className='h-5 w-full' /> 
                  <p className='text-center'>
                    {'"'}{review.text}{'"'}
                  </p>
                  <div className='relative flex justify-center items-center p-2 text-[14px]
                    btn-gradient text-white rounded-lg google-btn-shadow'
                  >
                    <Image src={review.logo} alt="link_logo" className='w-6 h-fit mr-2' />
                    <a 
                      href={review.link} 
                      target='_blank'
                      className='absolute top-0 left-0 w-full h-full'
                    >                 
                    </a>
                    Read full review
                  </div>
                  <p className='text-[14px] leading-[21px] text-[#3A3B3C]'
                  >
                    <strong>{review.userName}</strong> 
                    <span>
                      {' '}{review.date}
                    </span>
                  </p>
                </div>
              </div>
          ))}
          <button onClick={handleClickNext} disabled={currentIndex + cardsPerPage >= googleReviews.length}>
          <Image 
            src={arrow_right} 
            alt="arrow_right" 
            className='w-[30px] cursor-pointer'
          />
          </button>
        </div>
      </div>

      <div className='block mobile:hidden tablet:hidden'>
        <div className="flex justify-between items-center px-6">
          <button onClick={handleClickPrev} >
          <Image 
              src={arrow_left} 
              alt="arrow_left" 
              className='w-[20px] cursor-pointer'
            />
          </button>
             {googleReviews.slice(currentIndex, currentIndex + cardsPerPageMobile).map((review, inx) => (
                <div 
                  key={inx}
                  className='bg-white mobile:p-6 p-[16px] rounded-[10px] w-full max-w-[260px] mt-[12px]'
                >
                  <div className='flex flex-col justify-center items-center gap-y-4'>
                    <Image src={review.avatar} alt="avatar_user" className='mobile:w-[100px] w-[50px] h-fit' />
                    <Image src={five_stars} alt="five_stars" className='mobile:h-5 h-4 w-full' /> 
                    <p className='text-center text-[16px]'>
                      {'"'}{review.text}{'"'}
                    </p>
                    <div className='relative flex justify-center items-center p-2 text-[14px]
                      btn-gradient text-white rounded-lg google-btn-shadow'
                    >
                      <Image src={review.logo} alt="link_logo" className='mobile:w-6 w-5 h-fit mobile:mr-2 mr-1' />
                      <a 
                        href={review.link} 
                        target='_blank'
                        className='absolute top-0 left-0 w-full h-full'
                      >                 
                      </a>
                      Read full review
                    </div>
                    <p className='text-[14px] leading-[21px] text-[#3A3B3C]'
                    >
                      <strong>{review.userName}</strong>{' '}{review.date}
                    </p>
                  </div>
                </div>
            ))}
            <button onClick={handleClickNext}>
            <Image 
              src={arrow_right} 
              alt="arrow_right" 
              className='w-[20px] cursor-pointer'
            />
            </button>
        </div>
      </div>

      <div className='hidden mobile:block tablet:hidden'>
        <div className="flex justify-between items-center px-6">
          <button onClick={handleClickPrev} >
          <Image 
              src={arrow_left} 
              alt="arrow_left" 
              className='w-[20px] cursor-pointer'
            />
          </button>
             {googleReviews.slice(currentIndex, currentIndex + cardsPerPageTablet).map((review, inx) => (
                <div 
                  key={inx}
                  className='bg-white mobile:p-6 p-[16px] rounded-[10px] w-full max-w-[260px] mt-[12px] mobile:h-[315px]'
                >
                  <div className='flex flex-col justify-center items-center gap-y-4'>
                    <Image src={review.avatar} alt="avatar_user" className='tablet:w-[100px] w-[50px] h-fit' />
                    <Image src={five_stars} alt="five_stars" className='mobile:h-5 h-4 w-full' /> 
                    <p className='text-center text-[16px]'>
                      {'"'}{review.text}{'"'}
                    </p>
                    <div className='relative flex justify-center items-center p-2 text-[14px]
                      btn-gradient text-white rounded-lg google-btn-shadow'
                    >
                      <Image src={review.logo} alt="link_logo" className='mobile:w-6 w-5 h-fit mobile:mr-2 mr-1' />
                      <a 
                        href={review.link} 
                        target='_blank'
                        className='absolute top-0 left-0 w-full h-full'
                      >                 
                      </a>
                      Read full review
                    </div>
                    <p className='text-[14px] leading-[21px] text-[#3A3B3C]'
                    >
                      <strong>{review.userName}</strong>{review.date}
                    </p>
                  </div>
                </div>
            ))}
            <button onClick={handleClickNext}>
            <Image 
              src={arrow_right} 
              alt="arrow_right" 
              className='w-[20px] cursor-pointer'
            />
            </button>
        </div>
      </div>
    </div>
  )
}
