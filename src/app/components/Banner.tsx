import React from 'react'

const Banner = () => {
  return (
    <div className='flex items-center w-[1440px] h-[670px] bg-[#FCF8F3]'>

        <div className='flex justify-center items-center w-[750px] h-[250px]'>

        <div className=' w-[422px] h-[200px]'>
            <h2 className='font-bold text-[40px] leading-[48px]'>50+ Beautiful rooms 
            inspiration</h2>
            <p className='font-medium text-[16px] leading-[28px]'>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
            <div className='flex justify-center  w-[176px] h-[48px]  bg-[#B88E2F]'>
                <button className=' font-semibold text-[16px] leading-[24px]'>Explore More</button>
            </div>
        </div>
        </div>







        <div className='flex w-[1196px] h-[582px] gap-[30px]'>
            
            <div className='w-[404px] h-[582px]'>
            <img src="/image.png" alt="pic"  />     
            </div>



            <div className='w-[372px] h-[486px]' >
                <img src="/r.png" alt="pic" />
                <div className='py-8'>
                <img src="/indica.png" alt="pic" />
                </div>
            </div>




            <div className='' >
                <img src="/rr.png" alt="pic" />
                
            </div>

        </div>

    </div>
  )
}

export default Banner