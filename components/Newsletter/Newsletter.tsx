
import React from 'react'
import ButtonUI from '../Modules/ButtonUI';


const Newsletter = () => {
    return (
        <section className="bg-exxDark mt-[100px] w-full flex flex-col md:flex-row md:justify-center md:items-center gap-[30px] md:gap-[100px] py-[70px] px-12 md:px-[10%]">
           <div className="CTA__Text w-full md:w-1/2">
           <h2 className="text-white font-gros font-[700] leading-[120%] text-[32px] md:text-[44px] ">
Stay Updated
        </h2>

        <p className="text-[16px] md:text-[24px] text-white my-2 md:my-4 font-[400] font-sans">
        Subscribe to our newsletter. We only send important updates.
        </p>

            </div>


            <div className="CTA__button w-full md:w-1/2 ">
                           
             <form className="flex flex-col md:flex-row gap-5 md:gap-10 md:items-center">
                <input name="subscriber" type="email" placeholder="Your email address" className="text-white outline-none bg-black opacity-[0.6] px-10 py-4 rounded-[10px] border-solid border-[1px] border-[rgba(255,255,255,0.48)]  md:w-[300px]"/>
                <ButtonUI variant="contained" ClassName="bg-exxBlue text-[14px] font-[700] text-white rounded-[10px] py-4"> 
                     Subscribe Now ↗
                 </ButtonUI>
                 </form>


                </div>

 

        </section>
    )
}


export default Newsletter;