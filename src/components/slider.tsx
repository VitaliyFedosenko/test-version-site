import React from 'react'
import Image from 'next/image'

import face_1 from '../../public/images/google-reviews/face_1.png'
import face_2 from '../../public/images/google-reviews/face_2.png'
import face_3 from '../../public/images/google-reviews/face_3.png'
import face_4 from '../../public/images/google-reviews/face_4.png'
import face_5 from '../../public/images/google-reviews/face_5.png'
import face_6 from '../../public/images/google-reviews/face_6.png'
import google_logo from '../../public/images/home-page-pic/google-tile.svg'
import five_stars from '../../public/images/home-page-pic/rate-stars-yellow.svg'
import arrow_left from '../../public/images/home-page-pic/left-arrow.svg'
import arrow_right from '../../public/images/home-page-pic/right-arrow.svg'

const googleReviews = [
  {
    inx: 1,
    avatar: face_1,
    text: 'This Black car service is excellent. Only one I will use!',
    userName: 'Vicki Brown -',
    date: '7/26/2023',
  },
  {
    inx: 2,
    avatar: face_2,
    text: 'We had a fun birthday trip planned and Roman was so pr...',
    userName: 'Kim Charles -',
    date: '7/23/2023',
  },
  {
    inx: 3,
    avatar: face_3,
    text: 'We have used them several times to and from the airport....',
    userName: 'Niek Feyenoord4Ever -',
    date: '2/17/2023',
  },
  {
    inx: 4,
    avatar: face_4,
    text: 'Great and professional service. Will definitely use again. Reas...',
    userName: 'E K - ',
    date: '9/4/2022',
  },
  {
    inx: 5,
    avatar: face_5,
    text: 'We got a driver named Roman that was incredibly profession...',
    userName: 'Steven Wizzle -',
    date: '5/25/2021',
  },
  {
    inx: 6,
    avatar: face_6,
    text: 'Highly recommend this car service! Roman picked us up a...',
    userName: 'Claudia Aniol -',
    date: '5/21/2021',
  },
]

export const ReviewSlider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const cardsPerPage = 3
  const cardsPerPageTablet = 2
  const cardsPerPageMobile = 1

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % googleReviews.length);
  }

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + googleReviews.length) % googleReviews.length);
  }

  return (
    <div className="w-full max-w-[1140px] mx-auto">
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
                className='bg-white p-6 rounded-[10px] w-full max-w-[280px] mt-[64px]'
              >
                <div className='flex flex-col justify-center items-center gap-y-6'>
                  <Image src={review.avatar} alt="avatar_user" className='w-[100px] h-fit' />
                  <Image src={five_stars} alt="five_stars" className='h-5 w-full' /> 
                  <p className='text-center'>
                    {'"'}{review.text}{'"'}
                  </p>
                  <div className='relative flex justify-center items-center p-2 text-[14px]
                    bg-[#4285F4] hover:bg-[#2369d8] text-white rounded-lg google-btn-shadow'
                  >
                    <Image src={google_logo} alt="avatar_user" className='w-6 h-fit mr-2' />
                    <a 
                      href="https://www.google.com/maps?cid=15798912800038747547" 
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
                      {review.date}
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
                      bg-[#4285F4] hover:bg-[#2369d8] text-white rounded-lg google-btn-shadow'
                    >
                      <Image src={google_logo} alt="avatar_user" className='mobile:w-6 w-5 h-fit mobile:mr-2 mr-1' />
                      <a 
                        href="https://www.google.com/maps?cid=15798912800038747547" 
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
                      bg-[#4285F4] hover:bg-[#2369d8] text-white rounded-lg google-btn-shadow'
                    >
                      <Image src={google_logo} alt="avatar_user" className='mobile:w-6 w-5 h-fit mobile:mr-2 mr-1' />
                      <a 
                        href="https://www.google.com/maps?cid=15798912800038747547" 
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
