import React from 'react'
import img from '../assets/footer-logo.svg'
import fb from '../assets/facebook.svg'
import twit from '../assets/twitter.svg'
import insta from '../assets/instagram.svg'

const Footer = () => {
    return (
        <div className='bg-[#F8F8F8] px-[40px] lg:px-[100px] py-[80px] '>
            <div className='flex flex-col lg:flex-row justify-between lg:max-w-[1440px] mx-auto'>
                <img src={img} alt="logo" className='w-28 lg:w-auto mx-auto lg:mx-0 mb-[40px] lg:mb-0' />
                <div className='text-[14px] text-[#646874] font-normal flex flex-col gap-4 lg:max-w-[217px] mb-14 lg:mb-0'>
                    <p className='text-[#0E2368] font-semibold text-[18px]'>Contact Us</p>
                    <p>Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434</p>
                    <p>example2020@gmail.com</p>
                    <p>(904) 443-0343</p>
                </div>
                <ul className='text-[14px] text-[#646874] font-normal flex flex-col gap-4 max-w-[217px] mb-14 lg:mb-0'>
                    <p className='text-[#0E2368] font-semibold text-[18px]'>More</p>
                    <li>About Us</li>
                    <li>Products</li>
                    <li>Career</li>
                    <li>Contact Us</li>
                </ul>
                <div className='flex flex-col-reverse lg:flex-col justify-between gap-6 text-center lg:text-left'>
                    <div>
                        <p className='text-[#0E2368] font-semibold text-[18px] mb-3 hidden lg:block'>Social Links</p>
                        
                        <div className='flex gap-8 justify-center lg:justify-start'>        
                            <img src={insta} alt="" />
                            <img src={twit} alt="" />
                            <img src={fb} alt="" />
                        </div>

                    </div>
                    <p className='text-[14px] text-[#646874] font-normal'>© 2022 Food Truck Example</p>
                </div>

            </div>
        </div>
    )
}

export default Footer