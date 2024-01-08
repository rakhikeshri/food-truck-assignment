import React from 'react'
import logo from '../assets/logo.svg'
import banner from '../assets/banner.png'

const Banner = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row max-w-[1440px] mx-auto'>
            <div className="lg:pl-[90px] pt-6 lg:w-[50%] text-center lg:text-left">

                <img src={logo} alt="logo" className='lg:block hidden' />

                <h1 className='font-bold text-[#0E2368] text-[42px] lg:text-[58px] leading-[120%] lg:max-w-[360px] max-w-[290px] mx-auto lg:mx-0 mt-[60px] lg:mt-[104px] mb-[26px]'>
                    Discover the 
                    <span className='text-[#E23744]'> Best</span> Food and Drinks
                </h1>

                <p className='font-normal text-base max-w-[320px] mx-auto lg:mx-0 lg:max-w-[370px] text-[#444957] mb-[46px]'>
                    Naturally made Healthcare Products for the better care & support of your body.</p>

                <button className='bg-[#E23744] text-[18px] px-[34px] py-[14px] rounded-[34px] font-bold text-white'>Explore Now!</button>
            </div>
            <div className='relative lg:w-[50%]'>
                <button className='absolute border-white border right-[20px] lg:right-[40px] top-[32px] text-[11px] lg:text-[16px] px-[11px] lg:px-[30px] py-[8px] lg:py-[11px] rounded-[34px] font-semibold text-white'>Get In Touch</button>
                
                <img src={banner} alt="Banner" className='w-full' />
            </div>

        </div>
    )
}

export default Banner