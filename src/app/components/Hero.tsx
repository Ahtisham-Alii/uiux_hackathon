import React from "react";
const Hero = () => {
  return (
    <main className="flex sm:col-span-1 justify-end items-center rounded-[10px] pr-14 w-[1440px] h-[716.83px] bg-[url(/bg.png)]">
        <div className="flex sm:row-span-1 justify-center items-center w-[643px] h-[443px] bg-[#FFF3E3]">
               <div className="w-[561px] h-[344px]">
                   <p className="font-semibold text-[16px] leading-[38px] ">
                      New Arrival
                      </p>
                 <h2 className="font-bold text-[72px] leading-[79px] text-[#B88E2F]">
                  Discover Our New Collection
                </h2>
            <p className="font-medium text-[21px] leading-[31px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
           </p>
           <div className="pt-6">
            <button className="w-[222px]  h-[74px]  font-bold text-[16px] leading-[24px] text-white bg-[#B88E2F]">
              BUY NOW
            </button>
            </div>
          
        </div>
      </div>
    </main>
  );
};

export default Hero; 