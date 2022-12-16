import React from 'react'
import Image from 'next/image'
import ButtonUI from '../Modules/ButtonUI'
import HeroImageLg from "../../public/assets/heroImage.svg";
import HeroImageSm from "../../public/assets/HeroImageSm.svg";
import {FaDiscord} from "react-icons/fa"

const DiscordIcon = <FaDiscord width="24.95px" height="24.95px" />


const Hero = () => {
  return (
    <section className="relative text-center w-full pt-[120px] md:pt-[150px] px-12 -z-[50] bg-white">
        <h2 className="text-exxDark font-gros font-[900] leading-[120%] text-[40px] md:text-[48px]">
        Start building apps with <span className="text-exxBlue">useful cases</span>
        </h2>

        <p className="text-sans text-base md:text-[18px] opacity-[0.6] my-5 md:px-[36%]">
        Welcome to the EXX Developer’s Guide. Now you can begin building your first DApp on EXX.
            </p>

            <div className="hero__buttons hidden md:flex flex-row justify-center gap-7">
                 <ButtonUI variant="contained" ClassName="bg-exxBlue  text-[14px] font-[700] text-white rounded-[10px] py-4 px-20"> 
                     Get Started
                 </ButtonUI>

                 <ButtonUI variant="outlined" ClassName=" text-exxBlue text-[14px] font-[700] rounded-[10px] py-4  px-20"> 
                   Faucet ↗
                 </ButtonUI>
              </div>

{/*             
            Mobile here button */}

              <ButtonUI variant="contained" ClassName="bg-exxBlue w-full text-[14px] font-[700] text-white rounded-[10px] py-4 md:hidden"> 
                  {DiscordIcon}   <span className="ml-2">Join the community</span>
                 </ButtonUI>


              <div className="hero__image hidden md:flex md:justify-center mt-6 -z-[50]">
                 <Image src={HeroImageLg} alt="Exx Network dashboard" />
                </div>

                <div className="hero__image md:hidden mt-6">
                 <Image src={HeroImageSm} alt="Exx Network dashboard" />
                </div>

    </section>
  )
}



export default Hero
