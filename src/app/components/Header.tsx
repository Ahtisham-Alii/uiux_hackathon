import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-center place-items-center sm:w-[1440px] h-[100px] bg-[#FFFFFF]'>
        <div className='flex justify-between place-items-center w-[1286px] h-[41px] '>
            <div className='flex justify-center items-center gap-[5px] w-[185px] h-[41px] '>
                <img src="/figmalogo.png" alt="logo" />
                <h2 className='font-bold text-[34px] leading-[41.45px]'>Furniro</h2>

            </div>
            

            <nav className=' w-[430px]     h-[24px] ' >
                <ul className='flex justify-between font-medium text-[16px] leading-[24px]'>
                    <li>
                        <a href="Home">Home</a>
                    </li>
                    <li>
                        <a href="">Shop</a>
                    </li>
                    <li>
                        <a href="">Blog</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </nav>


            <div className='flex gap-10'>
                <img src="/accounr.png" alt="acc" />
                <img src="/search.png" alt="search" />
                <img src="/heart.png" alt="heart" />
                <img src="/cart.png" alt="cart" />
            </div>

        </div>

    </header>
  )
}

export default Header