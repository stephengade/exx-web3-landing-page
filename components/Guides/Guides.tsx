import React from 'react'
import Link from 'next/link'

interface IString {
    Title: string
    Text: string
    Nos: number
    URL: any
    URLText: string
}

const GuideItem = ({Title, Text, Nos, URL, URLText}: IString) => {
   return (
    <div className="mb-10 md:mb-0">
              <h2 className="font-[700] flex flex-row items-center md:items-start md:flex-col gap-2">
                <span className="font-mono text-[rgba(42,108,249,0.71)] text-[24px]">{Nos}</span> 
                <span className="font-gros text-sm md:text-[24px] text-[#2C3131] font-bold ">{Title}</span>
                </h2>
              <p className="text-[12px] md:text-base text-[#626262] my-2 font-[400] font-sans">{Text}</p>
              <p className="text-base md:text-[18px] text-[#174AFF] underline"><Link href={URL} >{URLText}</Link> </p>
        </div>
   )
};


const Guides = () => {
    return (
        <section className="bg-white md:my-[100px] flex flex-col md:flex-row md:justify-evenly mx-12">

            <GuideItem Nos={1} Title="Documentation" Text="Everything needed to build on Exx" URL={""} URLText={'View docs'} />

            <GuideItem Title="Watch & Learn" Text="Solidity made easy with recordings" Nos={2} URL={""} URLText={'Watch now'} />

            <GuideItem Title="Blockchain Explorer" Text="Explore transactions on Exx" Nos={3} URL={""} URLText={'Explore now'} />


        </section>
    )
}


export default Guides;