import React from "react"
import Link from 'next/link'

import {FaHeart} from 'react-icons/fa'
import { GeneralData, ExploreData, ApplyData, FollowData } from "./FooterData"


const FooterItem = ({Title, Data}: any) => {
   return (
       <>
      <h2 className="font-gros text-[20px] md:text-[24px] font-[700] mb-5 text-exxBlack">{Title} </h2>
      {Data.map((n: any) => {
        return (
          <p key={n.id} className="text-base md:text-[18px] font-sans mb-5 text-[#596780] leading-[150%]"> 
          <Link href={n.link}> {n.text} </Link>
           </p>
        ) 
      })}
      </>
   )
      
   
}


const Footer = () => {
    return (
      <section className="mt-[70px] mx-12 md:mx-[10%]">
        <footer className="flex flex-col md:flex-row justify-between gap-12">
             <div className="footer_brand md:w-4/12"> 
             <h2 className="text-[#1D2A65] font-gros font-[700] leading-[120%] text-[24px]">
             EXX Blockchain
        </h2>

        <p className="text-base md:text-[18px] text-[#596780] mt-2 font-[400] font-sans md:pr-12">
        EXX builds on the efficacy of Ethereum, it is faster, powerful and more secured
        </p>
             </div>
               

               <div className="hidden md:block">
               <FooterItem Title="General" Data={GeneralData} />
                </div>
               
                <div className="hidden md:block">
               <FooterItem Title="Explore" Data={ExploreData} />
                </div>

                <div className="hidden md:block">
               <FooterItem Title="Apply" Data={ApplyData} />
                </div>

                   <div className="hidden md:block">
               <FooterItem Title="Follow us" Data={FollowData} />
                </div>

                {/* // mobile row 1 */}

          <div className="md:hidden flex flex-row justify-between">
          <div className="">
               <FooterItem Title="General"  Data={GeneralData}  />
                </div>
  
                <div className="">
                <FooterItem Title="Explore" Data={ExploreData} />
                </div>

            </div>


              {/* // mobile row 2 */}

          <div className="md:hidden flex flex-row justify-between">
          <div className="">
          <FooterItem Title="Apply" Data={ApplyData} />
                </div>
  
                <div className="">
                <FooterItem Title="Follow us" Data={FollowData} />
                </div>

            </div>


           



            </footer>

            <hr />

             {/* // last footer section */}

             <div className="flex flex-col md:flex-row justify-center items-center md:items-start text-center md:text-start md:justify-between mt-5 mb-10">
            
             <div className="credit__links flex flex-row md:items-center justify-between gap-4 md:justify-start md:gap-10">
             <p className="text-[12px] md:text-[18px] text-[#596780] mt-2 font-[400] font-sans"> Privacy Policy </p> 
             <p className="text-[12px] md:text-[18px] text-[#596780] mt-2 font-[400] font-sans">Terms & Condition</p> 
             <p className="text-[12px] md:text-[18px] text-[#596780] mt-2 font-[400] font-sans"> Disclaimer </p>

              </div>



              <div className="">
              <p className="text-base md:text-[18px] text-[#596780] text-center md:text-start mt-2 font-[400] font-sans flex flex-row gap-1 items-center">Made with <span className="inline">{<FaHeart color="#174AFF"/>}</span> from Exxample inc.</p>
                </div>

            </div>
</section>
    )
}

export default Footer;