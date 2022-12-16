import React from 'react'
import ButtonUI from '../Modules/ButtonUI'
import {FaDiscord} from "react-icons/fa"

import Image from 'next/image'

import CommunityImage from "../../public/assets/community.svg"
import mobileImage from "../../public/assets/mobile-community.svg"

const DiscordIcon = <FaDiscord width="24.95px" height="24.95px" />

// py-[29px]

const Community = () => {
    return (
        
<section className="bg-exxDark flex flex-col md:flex-row md:justify-between items-center gap-12  md:pl-[32px]  pt-[29px] md:pt-0 rounded-[20px] my-[70px] mx-[10%] md:mx-[12%]">
  <div className="w-full md:w-1/2 px-[32px]  md:px-0">
  <h2 className="text-white font-gros font-[700] leading-[120%] text-[32px] md:text-[44px]">
  Join our developer community
        </h2>
        
        <p className="text-[12px] md:text-base text-white opacity-[0.6] my-2 md:my-4 font-[400] font-sans">
        Join our community of developers from diverse backgrounds where you can work collaboratively, develop projects, ask questions and grow your career.
        </p>

               <ButtonUI variant="contained" ClassName="bg-exxBlue text-[14px] font-[700] text-white rounded-[10px] py-4"> 
                  {DiscordIcon}   <span className="ml-2">Join the community</span>
                 </ButtonUI>
        
            

    </div>


  <div className='community_image'>
     <Image src={CommunityImage} alt="Join our community on discord" className="hidden md:block rounded-r-[20px]"/>
     <Image src={mobileImage} alt="Join our community on discord" className="md:hidden rounded-b-[20px]"/>
    </div>

   
    

</section>

    )
}


export default Community;