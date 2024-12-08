import React from 'react'

const Items = () => {
  return (
    <div className='w-[1440px] h-[800px] pt-9'>
        <div className='w-[1799px] h-[780px]'>
            <div className='w-[1440px]  h-[86px] text-center '>
                <p className='font-semibold text-[20px]  flex justify-center leading-[30px] text-[#616161]'>Share your setup with</p>
                <h2 className='font-bold text-[40px] leading-[48px]'>#FuniroFurniture</h2>

            </div>








            <div className='flex flex-row  w-[1440px] h-[721px] gap-[35px]'>
                <div className='grid grid-rows-12 w-[284px] h-[308px] bg-green-300'>
                    <img src="/tt.png" alt="tt" />
                    

                </div>
                <div className='flex justify-end items-end  w-[332px] h-[308px]'>
                    <img src="/ru.png" alt="ru" />

                </div>
                <div className='flex justify-center items-center w-[235px] h-[582px]'>
                    <img src="/oo.png" alt="oo" className=' w-[303px] h-[282px]'/>

                </div>
                <div className='flex justify-end  items-end w-[230px] h-[350px]'>
                    <img src="/pp.png" alt="pp" />

                </div>
                <div className='flex  items-end w-[270px] h-[350px] bg-green-600'>
                    <img src="/nn.png" alt="pp" className='w-[270px] h-[350px]' />

                </div>





            </div>
            



            <div className='flex w-[1440px] mt-[-390px] h-[600px] gap-[20px]'>
                <div className='h-[323px] w-[371px] '>
                    <img src="/kursi.png" alt="kursi" className='w-[381px] h-[323px]' />

                </div>
                <div className='w-[254px] h-[322px]'>
                    <img src="/rrc.png" alt="rrc"  className='h-[222px]'/>

                </div>

                <div className='w-[178px] h-[378px] ml-[260px] '>
                    <img src="/rc.png" alt="rc" className='mt-10' />

                </div>
                <div className='w-[260px] h-[199px] '>
                    <img src="/cr.png" alt="cr" className='pt-[40px] pl-[20px]'/>

                </div>

            </div>





            

        </div>

    </div>
  )
}

export default Items