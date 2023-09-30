"use client"

import Image from "next/image"
import Link from "next/link"
import * as yup from 'yup'
import { Formik, FormikHelpers } from 'formik'
import { ReviewSlider } from '@/components/slider'
import emailjs from 'emailjs-com'
import Head from "next/head"

import whatsapp from '../../../public/images/home-page-pic/whatsapp-logo.svg'
import wedding_limousine from '../../../public/images/home-page-pic/limo_widding.webp'
import five_stars from '../../../public/images/home-page-pic/rate-stars-yellow.svg'
import google_logo from '../../../public/images/home-page-pic/google-tile.svg'
import wedding_limousine_mobile from '../../../public/images/home-page-pic/limo_widding_mobile-_1_.webp'
import { PopupSubmit } from "@/components/popup-submit"
import React from "react"


interface FormValues {
  name: string;
  email: string;
  message: string;
}

export default function ContactUs() {

  const [showPopup, setShowPopup] = React.useState(false)

  const handleSubmit = (values: FormValues, onSubmitProps: FormikHelpers<FormValues>) => {
    const params = {
      from_name: values.name,
      email_id: values.email,
      message: values.message,
    }
    emailjs
      .send('service_pmkiyp8', 'template_db3smvk', params)
      .then(function (res) {
        if (res.status === 200) {
          // Show the popup
          setShowPopup(true);
          // Reset the form
          onSubmitProps.resetForm();
          // Hide the popup after 3 seconds
          setTimeout(() => {
            setShowPopup(false);
          }, 3000);
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })
}

  const validationsSchema = yup.object().shape({
    name: yup.string().matches(/^[A-zА-яЁё]+$/, 'must contain only letters').required('is required!'),
    email: yup.string().email('provide a valid email address').required('is required!'),
    message: yup.string()
})

  return (
    <>
      <Head>
        <script type="text/javascript" src="https://cdn.emailjs.com/dist/email.min.js"></script>
        <script type="text/javascript">
          {(() => {
            emailjs.init("JfAY8SVd8eKlaHj8_");
          })() as React.ReactNode}
        </script>
      </Head>
      <div className="w-full bg-[#161616] text-[#A4A4A4]">
        <section className="tablet:py-[56px] py-10 w-full max-w-[1140px] mx-auto">
          <h2 className='text-[#EEB957] font-noto tablet:text-[44px] text-[32px] leading-[44px] 
            tablet:leading-[60px] font-[900] text-center mt-8 mb-10'
          >
            Contact Us
          </h2>
          <p className="text-[22px] leading-[28px] text-[#F7F7F7] mb-6 text-center tablet:text-start">
            Submit your question:
          </p>
          <div className="flex tablet:flex-row flex-col gap-x-[48px]">
            <div className="relative">
            <Formik 
              initialValues = {{
                name: '',
                email: '',
                message: '',
              }}
              validateOnBlur
              onSubmit={(values, onSubmitProps) => handleSubmit(values, onSubmitProps)}
              validationSchema={validationsSchema}
            >
              {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
              <>
                <div className="mobile:mx-auto tablet:mx-0 relative px-6 mobile:px-0">
                  <div className="w-full mobile:w-[532px] flex flex-col gap-y-4">
                    <div className="flex flex-col">
                      <label 
                        className="text-white text-[14px] leading-[18px] flex mb-2" 
                        htmlFor={`name`}> Name {touched.name && errors.name && <p className="text-[#ff8181] ml-3"> { errors.name } </p> } 
                      </label> 
                      <input
                        className="rounded-[10px] p-4 bg-black border-[0.5px] border-[#2f2f2f] outline-none text-white focus-input"
                        type={`text`}
                        name={`name`}
                        placeholder={`Name`}
                        maxLength={20}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name} 
                        id={'fullName'}
                      />
                    </div>
                    <div className="flex flex-col">
                      <label 
                        className=" text-white text-[14px] leading-[18px] flex mb-2" 
                        htmlFor={`email`}> Email {touched.email && errors.email && <p className="text-[#ff8181] ml-3"> { errors.email } </p>}
                      </label> 
                      <input
                        className="rounded-[10px] p-4 bg-black border-[0.5px] border-[#2f2f2f] outline-none text-white focus-input"
                        type={`email`}
                        name={`email`}
                        placeholder={`Email`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        id={'email_id'}
                      />
                    </div>
                  </div>

                    <div className="flex flex-col mt-4">
                    <label 
                      className="text-white text-[14px] leading-[18px] flex mb-2" 
                      htmlFor={`message`}> 
                      Message 
                    </label> 
                    <textarea 
                      className="w-full max-w-[532px] min-h-[150px] resize-none outline-none
                        rounded-[10px] p-4 bg-black border-[0.5px] border-[#2f2f2f] text-white focus-input"
                      //@ts-ignore
                      type={'text'}
                      name={`message`}
                      placeholder={`Message`}
                      maxLength={500}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message}
                      id={'message'}
                    />
                  </div>

                  <button 
                    className="bg-[#EEB957] text-black py-4 px-8 text-[14px] w-full max-w-[532px] mt-6
                      leading-[24px] tracking-[1px] font-bold rounded-xl hover:bg-[#ffdea0] text-center cursor-pointer"
                    disabled={!isValid && !dirty} 
                    //@ts-ignore
                    onClick={handleSubmit} 
                    type={`submit`}
                    > 
                      SEND
                  </button> 
                </div>
              </>
              )}
            </Formik>
            <PopupSubmit show={showPopup}/>
            </div>
            <p className="text-[12px] leading-[18px] mt-8 text-center tablet:hidden block mb-10">
              This site is protected by reCAPTCHA and the Google 
                <a href="https://policies.google.com/privacy" className="text-[#EEB957]">
                {' '}Privacy Policy
                </a> and 
                <a href="https://policies.google.com/terms" className="text-[#EEB957]">
                  {' '}Terms of Service{' '}
                </a> 
              apply.
            </p>
            <div className="flex flex-col gap-y-6 text-center tablet:text-start">
              <p>
                Text, call or email us for a quote!
              </p>
              <Link 
                href="https://wa.me/19704382743"
                className='flex py-3 px-8 bg-[#FFFFFF] hover:bg-[#cacaca] text-black mobile:w-[532px] tablet:w-full mx-auto
                  font-bold justify-center items-center rounded-xl mt-6 google-btn-shadow'
                target='_blank'
              >
                <Image 
                  src={whatsapp} 
                  alt="whatsapp" 
                  className='w-[40px] mr-2'
                />
                Message us on WhatsApp
              </Link>
              <p className="text-[22px] leading-[28px] text-[#F7F7F7]">
                Get-A-Ride LLC
              </p>
              <p>
                Denver, Colorado, United States
              </p>
              <div className="flex flex-col gap-y-6">
                <a 
                  href="mailto:info@getaride.limo"
                  className='text-[#EEB957]'
                >
                  info@getaride.limo
                </a>
                <a 
                  href="tel:9704382743"
                  className='text-[#EEB957]'
                >
                  (970) 438-2743
                </a>
              </div>
            </div>
          </div>
          <p className="text-[12px] leading-[18px] mt-8 hidden tablet:block">
            This site is protected by reCAPTCHA and the Google 
              <a href="https://policies.google.com/privacy" className="text-[#EEB957]">
              {' '}Privacy Policy
              </a> and 
              <a href="https://policies.google.com/terms" className="text-[#EEB957]">
                {' '}Terms of Service{' '}
              </a> 
            apply.
          </p>
        </section>
        <section className='relative'>
          <Image
            src={wedding_limousine}
            alt="car_pic"
            className="w-full h-fit mobile:block hidden"
          />
          <Image
            src={wedding_limousine_mobile}
            alt="car_pic"
            className="w-full h-fit block mobile:hidden"
          />
          <div className='absolute top-0 left-0 w-full h-full bg-slider z-10'>
            <h3 className='font-noto text-[44px] leading-[64px] mobile:leading-[44px] tablet:leading-[64px] text-white mobile:my-8 
              tablet:my-[56px] my-4 text-center tracking-[0.1rem] font-bold'>
              Reviews
            </h3>
            <div className='text-white flex justify-center items-center'>
              <div className='flex justify-center items-center'>
                <Image
                  src={google_logo}
                  alt="google_logo"
                  className="tablet:w-[38px] mobile:w-8 w-[38px] h-fit mr-4"
                />
                <p className='text-[32px] font-noto leading-[32px] font-bold mr-8'>
                  5.0
                </p>
              </div>
              <div className='flex flex-col justify-center gap-y-1'>
                <p className='text-[22px] leading-[26px] tracking-[1px]'>Get-A-Ride</p>
                <Image
                  src={five_stars}
                  alt="five_stars"
                  className="w-full mobile:h-[19px] h-4"
                />
                <p className='tablet:block hidden'>4 Reviews</p>
              </div>
            </div>
            <ReviewSlider  />
          </div>
        </section>
      </div>
    </>
    
  )
}