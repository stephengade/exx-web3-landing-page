import React from 'react'

interface IString {
    Title: string
    Text: string
}

const ResourceItem = ({Title, Text}: IString) => {
   return (
    <div className="text-center md:text-left">
              <h2 className="font-gros text-base md:text-[18px] font-[700] text-white">{Title} ↗</h2>
              <p className="text-[12px] md:text-base text-white opacity-[0.6] mt-2 font-[400] font-sans">{Text}</p>
        </div>
   )
};


const Resources = () => {
    return (
        <section className="bg-exxDark -mt-[100px] md:-mt-[200px] w-full flex flex-row flex-wrap justify-center gap-[30px] md:gap-[150px] py-[50px]">

            <ResourceItem Title="Documentation" Text="EXX seamless swap portal" />

            <ResourceItem Title="Exx Incubator" Text="Launch with EXX platform" />

            <ResourceItem Title="Video Tutorial" Text="Earn seamlessly with EXX" />


        </section>
    )
}


export default Resources;