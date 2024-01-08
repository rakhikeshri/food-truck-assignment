import React from 'react'

const SwiperCard = ({ img, title, desc }) => {
    return (
        <div className='p-[27px] rounded-[20px] text-center lg:text-left border border-[#93A2D361] max-w-[381px] mb-6 lg:mb-0'>
            <img src={img} alt={title} className='rounded-[20px] mb-[30px]' />
            <div className='px-[15px]'>
                <h3 className='text-[#0E2368] font-bold text-[19px] lg:text-[21px] mb-4'>{title}</h3>
                <p className='text-[15px] font-medium text-[#444957] mb-7'>{desc}</p>
                <button className='border border-[#424961] px-[26px] py-[8px] rounded-[21px] text-[16px] font-semibold'>Read More</button>
            </div>
        </div>
    );
};

export default SwiperCard