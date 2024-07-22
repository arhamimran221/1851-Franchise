import React from "react";
import "../NavBar/NavBar.css";
import NavBar from "../NavBar/NavBar";
import dropD from '../../assets/svg/dropwhite.svg'
import brandlogo from '../../assets/svg/BrandLogos.svg'
import MyCarousel from "../MyCarousel/MyCarousel";
import ServiceSec from "../ServiceSec/ServiceSec";
const HeroSec = () => {
  return (
    <>
      <NavBar />
      <div className="mainHeroCard">
        <div className="containterFranchies">
          <div className="flex justify-between items-center">
            <div className="w-[50%] responseLeft">
              <h2 className="text-[#050E3C] text-[34px] pl-[8%] pr-[14%] uppercase pt-[30%] font-[oswald]">
                {" "}
                an Easy-to-use database designed to help franchises{" "}
                <span className="text-[#EB0444]">find the right supplier</span>
              </h2>{" "}
              <h4 className="pl-[8%] font-[caveat] text-[#050E3C] text-[20px]">
                Reviews, news and contacts for the franchise industry
              </h4>{" "}
            <div className="flex mt-[4%] findsupplier">
            <div className="bg-[#050E3C] ml-[8%] pl-[4%] py-[8px] w-[200px] rounded-tl-[10px] rounded-bl-[10px] browseres">
                <h6 className="text-[#EB0444] text-[10px]">Browse by Type</h6>
                <button className="text-white flex justify-between items-center gap-[80px] font-[AktivGroteskLight] mt-[2px]">SELECT <img src={dropD} alt="" /> </button>
              </div>
              <div className="supplierbg flex justify-center items-center py-[8px] w-[200px] rounded-tr-[10px] rounded-br-[10px]">
                <button className="text-white  ">FIND A SUPPLIER  </button>
              </div>
            </div>
            </div>
            <div className="w-[50%] bg-animal"></div>
          </div>
          <div>
            <MyCarousel />
          </div>
        </div>
       <div className="mt-[]">
       <ServiceSec />
       </div>
      </div>
    </>
  );
};

export default HeroSec;
