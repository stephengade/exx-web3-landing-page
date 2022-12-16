import React from 'react'
import Image from 'next/image'
import ButtonUI from '../Modules/ButtonUI'
import BlogOne from "../../public/assets/blog-1.png"
import BlogTwo from "../../public/assets/blog-2.png"
import BlogThree from "../../public/assets/blog-3.png"


interface Itext {
    label: string
    date: string
    title: string
    Photo: any
}

const UpdateItem =({label, date, title, Photo}: Itext) => {
    return (

        <div className="bg-exxGrey rounded-[20px] max-w-[400px] pt-5">


   <p className="text-[12px] font-sans flex flex-row justify-between px-5">
             <span className="text-exxBlack ">{label}</span>
            <span className="text-[#141830] opacity-[0.6]"> {date}</span> 
            </p>

            
            <h2 className="text-exxBlack font-gros my-5 font-[700] leading-[120%] text-[20px] px-5">
               {title}
        </h2>

        <Image src={Photo} alt={title} />

            </div>
        
    )
}

const Update = () => {
    return (
        
<section className="bg-white mx-12 mt-[100px] md:mt-[200px] md:mx-[10%]">

  <h2 className="text-exxDark font-gros font-[700] leading-[120%] text-[32px] md:text-[44px]">
  Exx Updates
        </h2>

        <p className="text-[12px] md:text-base text-[#626262] my-2 font-[400] font-sans  md:max-w-[30%]">
        Catch up with news, blog posts, events and other happenings within the EXX ecosystem.
        </p>


        <div className="my-10 flex flex-col md:flex-row md:justify-start gap-12">
        <UpdateItem label="Blockchain tips" date="March 27, 2022" title="The design language of the Cross Chain- pekele pekele" Photo={BlogOne} />
        <UpdateItem label="Blockchain tips" date="March 27, 2022" title="The design language of the Cross Chain- pekele pekele" Photo={BlogTwo}/>
        <UpdateItem label="Blockchain tips" date="March 27, 2022" title="The design language of the Cross Chain- pekele pekele" Photo={BlogThree}/>
      

        </div>




  
 
    

</section>

    )
}


export default Update;