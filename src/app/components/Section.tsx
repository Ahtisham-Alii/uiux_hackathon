import React from 'react'

const Section = () => {
  return (
    <section className='flex justify-center place-items-center w-[1440px] h-[800px]'>
        <div className=' justify-center place-items-center w-[1183px] h-[665px] '>
            <div className=' w-fullh-[76.71px]'>
                <h2 className=' font-bold text-[32px] leading-[48px] text-center'>Browse The Range</h2>
                <p className='font-normal text-[22px] leading-[30px] text-[#666666] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className='flex justify-center items-centerw-[1183px] h-[610px] place-items-center gap-[18px] '>
                    <div>
                    <img src="/Mask.png" alt="item" className='w-[381px] h-[480px] pb-2' />
                    <p className=' font-semibold text-[24px] leading-[36px] text-center' >Dining</p>
                    </div>   
                    <div>
                    <img src="/Mask2.png" alt="item"  className='w-[381px] h-[480px] pb-2'/>
                    <p  className='font-semibold text-[24px] leading-[36px] text-center'>Living</p>
                    </div>           
                    <div>
                    <img src="/MaskkK.png" alt="item"  className='w-[381px] h-[480px] pb-2' />
                    <p  className='font-semibold text-[24px] leading-[36px] text-center '>Bedroom</p>
                    </div>                                             
                </div>
              
        </div>
    </section>
  )
}

export default Section