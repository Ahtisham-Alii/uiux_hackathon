import React from 'react'

const Footer = () => {
  return (
   <footer className='w-[1440px] h-[506px] pt-[80px] border-t-2'>
    <div className='flex justify-between w-[1133.01px] h-[312px]'>
       <div className='w-[285px] h-[72px]'>
        <h2 className='font-bold text-[24px] leading-[36px] pb-6'>Funiro.</h2>
        <p className='font-normal text-[16px] leading-[24px] '>400 University Drive Suite 200 Coral Gables,<br />
        FL 33134 USA</p>

       </div>
       <div className='w-[68px] h-[312px]'>
        <ul className='font-medium text-[16px]  leading-[65px]'>
            <li className='text-[#9F9F9F]'>Links</li>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

       </div>

       <div className='w-[168px] h-[312px]'>
        <ul className='font-medium text-[16px]  leading-[65px]'>
            <li className='text-[#9F9F9F]'>Help</li>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
        </ul>

       </div>


       <div className='w-[68px] h-[312px]'>
        <ul className='font-medium text-[16px]  leading-[65px]'>
            <li className='text-[#9F9F9F]'>Newsletter</li>
        </ul>
        <div className='w-[400px] h-[82px] '>
                <input type="text" placeholder='Enter Your Email Address' className='text-black gap-[8px] bg-transparent font-normal text-[16px] leading-[24px] rounded-[5px] underline underline-offset-2 ' />
                <button className='rounded-[5px] mt-[1.5%] font-normal text-[16px] h-[48px]  leading-[24px] underline  underline-offset-4 '>Subscribe</button><br />
           
            </div>

       </div>


    </div>


        <div className='flex justify-start border-t-2 items-center w-[1240.01px] h-[59px] '>
          <p className='font-normal text-[16px] leading-[24px]'>2023 furino. All rights reverved</p>
          

          

        </div>

   

   </footer>
  )
}

export default Footer