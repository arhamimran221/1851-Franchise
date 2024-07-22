import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./MyCarousel.css";
import brand1 from "../../assets/svg/branlogo1.svg";
import brand2 from "../../assets/svg/brandlogo2.svg";
import brand3 from "../../assets/svg/brandlogo3.svg";
import brand4 from "../../assets/svg/brandlogo4.svg";
import brand5 from "../../assets/svg/brandlogo5.svg";
import brand6 from "../../assets/svg/brandlogo6.svg";
import brand7 from "../../assets/svg/brandlogo7.svg";
import brand8 from "../../assets/svg/brandlogo8.svg";
import { ArrowDownOutlined } from "@ant-design/icons";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MyCarousel = () => {
  return (
    <div className="">
      <Carousel responsive={responsive} autoPlay autoPlaySpeed={3000} infinite>
        <div className=" MainCardCarousel ">
          <img src={brand1} alt="" />
        </div>
        <div className=" MainCardCarousel ">
          <img src={brand2} alt="" />
        </div>
        <div className=" MainCardCarousel ">
          <img src={brand3} alt="" />
        </div>
        <div className=" MainCardCarousel ">
          <img src={brand4} alt="" />
        </div>
        <div className=" MainCardCarousel ">
          <img src={brand5} alt="" />
        </div>
        <div className=" MainCardCarousel ">
          <img src={brand6} alt="" />
        </div>
        <div className=" MainCardCarousel ">
          <img src={brand7} alt="" />
        </div>
        <div className=" MainCardCarousel ">
          <img src={brand8} alt="" />
        </div>
      </Carousel>
      <div className="font-[caveat] text-[#050E3C] text-[20px] text-center font-light pb-[30px]">
      - trusted by hundreds of brands -
      </div>
<div className="text-center pb-[30px] cursor-pointer">
<ArrowDownOutlined style={{color:'#fff',background:'#AC0432' ,padding:'8px',borderRadius:'50px'}}/>
</div>
    </div>
  );
};

export default MyCarousel;
