import React from 'react'
import ButtonUI from '../Modules/ButtonUI'
import { ConnectProvider } from '../../web3Module/ConnectHandler'



interface Itext {
    label: string
    value: string
}

const TextItem =({label, value}: Itext) => {
    return (
        <p className="text-base md:text-[18px] mb-3">
             <span className="font-mono mb-3 opacity-[0.6]">{label}:</span>
            <span className="text-black font-sans"> {value}</span> </p>
    )
}

const Connected = () => {
    const {ConnectUser} = ConnectProvider();
   

    return (
        
<section className="bg-white md:bg-[#f6f6f6] flex flex-col md:flex-row md:justify-center gap-12 py-[29px] px-[27px] rounded-[20px] my-[70px] md:mx-[15%]">
  <div className="w-full md:w-1/2">
  <h2 className="text-exxDark font-gros font-[700] leading-[120%] text-[32px] md:text-[44px] md:pr-[20%]">
  Get connected to the EXX Network
        </h2>


        <div className="block md:hidden my-10">
        <TextItem label="PRC URL" value="https://ds2.exx.network" />
        <TextItem label="Network name" value="Exx Testnet" />
        <TextItem label="Symbol" value="EXX" />
        <TextItem label="Chain ID" value="47" />
        <TextItem label="Block Explorer" value="https://exxscan.com" />

        </div>


        <div className="connect__buttons md:mt-6 w-full flex flex-col md:flex-row gap-3 md:gap-7">
                <ButtonUI onClick={ConnectUser} variant="contained" ClassName="bg-exxBlue  text-[14px] font-[500] text-white rounded-[10px] py-2 "> 
                     Add to Metatask ↗
                 </ButtonUI> 

                 <ButtonUI variant="outlined" ClassName=" text-exxBlue text-[14px] font-[500] rounded-[10px] py-2"> 
                   Learn More ↗
                 </ButtonUI>
              </div>

    </div>

    {/* second column */}

    <div className="hidden md:block">
        <TextItem label="PRC URL" value="https://ds2.exx.network" />
        <TextItem label="Network name" value="Exx Testnet" />
        <TextItem label="Symbol" value="EXX" />
        <TextItem label="Chain ID" value="47" />
        <TextItem label="Block Explorer" value="https://exxscan.com" />

        </div>


       

</section>

    )
}


export default Connected;