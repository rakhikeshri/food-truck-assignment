import React from 'react'
import aboutUsBanner from '../assets/about-us-banner.png'

const AboutUs = () => {
    return (
        <div className='bg-[#F6F6F9] grid place-content-center my-[64px] lg:my-[145px]'>
            <div className='lg:grid grid-cols-2 bg-[#F6F6F9] max-w-[1050px] '>
                <div className='hidden lg:block'>
                    <img src={aboutUsBanner} alt="Banner" className='w-full max-w-[384px]' />
                </div>
                <div className="lg:pl-[100px] text-center lg:text-left my-[140px] lg:my-0">
            
                    <h2 className='text-[#0E2368] text-[45px] font-semibold leading-[110%] max-w-[380px] lg:mt-[100px] mb-[25px]'>
                    About Us
                    </h2>

                    <p className='font-normal text-[15px] max-w-[295px] lg:max-w-[370px] text-[#444957] mb-[30px] lg:mb-[21px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>

                    <button className='ba bg-[#E23744] text-[16px] px-[26px] py-[10px] rounded-[21px] font-semibold text-white'>Read More</button>
                </div>

            </div>

        </div>
    )
}

export default AboutUs