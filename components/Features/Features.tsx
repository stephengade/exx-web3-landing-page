import React from 'react'
import Image from "next/image"
import WebApp from "../../public/assets/web-apps.svg";
import Dapps from "../../public/assets/Dapps.svg";
import Contract from "../../public/assets/smart-contract.svg";

interface IString {
    Title: string
    Text: string
    Icon: any
}

const FeatureItem = ({Title, Text, Icon}: IString) => {
   return (
    <div className="text-left mb-10 md:mb-3">
               <Image src={Icon} alt={Title} />
              <h2 className="font-gros text-base my-4 md:text-[24px] font-[700] text-[#333333]">{Title}</h2>
              <p className="text-base md:text-[20px] text-[#000000] opacity-[0.6] font-[400] font-sans">{Text}</p>
        </div>
   )
};

const BoxShadow = {
    boxShadow: "0px 4px 42px rgba(0, 0, 0, 0.1)"
}


const Features = () => {
    return (
        <>
        <section className="bg-exxBlue w-full pt-[50px] pb-[100px] md:pb-[200px] mb-5 px-6 md:px-12">

<h2 className="text-white md:text-center text-left font-gros my-3 font-[900] leading-[120%] text-[32px] md:text-[44px]">
Your journey to developing your first dapp.
        </h2>
        </section>


        
<div style={BoxShadow} className="bg-white flex -mt-[80px] md:-mt-[200px] flex-col md:flex-row py-[29px] px-[27px] rounded-[20px] mx-[5%]">
<FeatureItem Icon={Contract} Title="Write Smart Contract" Text="Write instructions via code on the Exx network.
{solidity}" />

<FeatureItem Icon={WebApp} Title="Build Web Apps" Text="Build a frontend application for easier interaction
{next} {react} " />

<FeatureItem Icon={Dapps} Title="Integrate Dapp" Text="Connect your contract with your web app.
{web3.js} {ethers.js} " />


</div>

</>
    )
}


export default Features;