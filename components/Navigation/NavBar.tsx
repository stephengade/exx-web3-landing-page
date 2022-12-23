import React, { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import Logo from "../../public/assets/ExxLogo.svg"
import WhiteLogo from "../../public/assets/whiteLogo.svg"
import Globe from "../../public/assets/lang.svg"
import WhiteGlobe from "../../public/assets/lang-white.svg"
import ButtonUI from '../Modules/ButtonUI'
import { SelectMenu } from '../Modules/SelectUI'
import { Hamburger } from "./Hamburger"
import { ConnectWalletButton } from '../../web3Module/Button/WalletButton'



export const NavLinks = [
  {
    id: 0,
    link: "/",
    text: "About"
  },

  {
    id: 1,
    link: "/",
    text: "Developer"
  },

  {
    id: 2,
    link: "/",
    text: "Blogs"
  }
]

export const Languages = [
  {
    text: "EN",
    value: "EN"
  },

  {
    text: "FR",
    value: "FR"
  }
]


const NavBar = () => {

  const [openNav, setOpen] = useState(false);

  const handleMenuNav = () => setOpen(!openNav);


  return (
    <section className={openNav ? "bg-transparent fixed w-full z-[200] py-6" : "bg-white fixed w-full z-[200] py-6"}>
      <nav className="w-full flex flex-row justify-between items-center px-6 md:px-12">

        <div className="brand___logo z-50">
          <Image src={openNav ? WhiteLogo : Logo} alt="Exx Network Logo" />
        </div>


        <div className="nav__links hidden md:flex flex-row items-center gap-10">


          <ul className="nav_list flex gap-5">
            {NavLinks.map((n: any) => {
              return (
                <li key={n.id} className="text-exxDark text-[14px] font-sans font-[500]">
                  <Link href={n.link}>
                    {n.text}
                  </Link>

                </li>
              )
            })}
          </ul>



          {/* language and connect */}
          <div className="buttons__nav flex flex-row items-center gap-5">



            <div className="flex flex-row items-center gap-2 mr-5">
              <Image src={Globe} alt="choose a language" />
              <SelectMenu Data={Languages} defaultValue={"EN"} inputColor="black" inputWidth="60px" name="selected_language" />
            </div>





            <ConnectWalletButton CTA="Connect Wallet ↗" />



          </div>

        </div>


        {/* mobile hamburger */}

        <Hamburger openMenu={openNav} onClick={handleMenuNav} />

        <div className={openNav ? `bg-exxBlue fixed z-[20] left-0 top-0 h-[100vh] w-[100vw]` : "hidden"}>
          <div className="mt-[150px]">
            <ul className="nav_list flex flex-col justify-center items-center gap-5">
              {NavLinks.map((n: any) => {
                return (
                  <li key={n.id} className="text-white text-base font-sans font-[500]">
                    <Link href={n.link}>
                      {n.text}
                    </Link>

                  </li>
                )
              })}
            </ul>


            <div className="buttons__nav flex flex-col-reverse gap-10 mt-[100px]">



              <div className="flex flex-row justify-center items-center gap-2 mx-[50px]">
                <Image src={WhiteGlobe} alt="choose a language" />
                <SelectMenu Data={Languages} defaultValue={"EN"} inputColor="white" name="selected_language" />
              </div>




             <div className="flex flex-row justify-center">
              <ConnectWalletButton CTA="Connect Wallet ↗" />
              </div>


            </div>



          </div>

        </div>



      </nav>


    </section>
  )
}

export default NavBar
