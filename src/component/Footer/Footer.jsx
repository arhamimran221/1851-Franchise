import React from "react";
import footerLogo from "../../assets/svg/LogoFran.svg";
import YoutubeRed from "../../assets/svg/youtubered.jsx";
import InstagramRed from "../../assets/svg/instagramred.jsx";
import TwitterRed from "../../assets/svg/twitterred.jsx";
import LinkedinRed from "../../assets/svg/linkedinred.jsx";
import FacebookRed from "../../assets/svg/facebookred.jsx";
import "./Footer.css";
import Line from "../../assets/svg/Line.jsx";
import Library from "../Library/Library";
import Cards from "../Cards/Cards";
const Footer = () => {
  return (
    <>
      <Cards/>
      <div className="footer-main">
        <div className="containterFranchies">
          <Library />
          <div className="">
            <div className="w-[80%] m-auto mt-10 bg-[#0b2541] p-5 rounded-lg input-res">
              <div className="font-[400] text-[29px] leading-[57.8px] text-center  email-heading ">
                ENTER YOUR EMAIL TO JOIN OUR NEWSLETTER
              </div>
              <div className="flex bg-[#fff]  rounded-lg h-[70px] maincard-input">
                <div className="w-[50%] px-9 py-1 grid res-lable">
                  <label htmlFor="" className="text-[11px] text-[#f15681]">
                    Name
                  </label>
                  <input
                    type="text"
                    className="border-none  p-2 outline-none"
                  />
                </div>
                <Line className="pt-10" />
                <div className=" w-[50%] px-8 py-1 rounded-lg grid res-lable bg-[#fff]">
                  <label
                    htmlFor=""
                    className="text-[11px] text-[#f15681]  w-[30%] "
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    className="border-none  p-2 outline-none"
                  />
                </div>
                <div className="res-submit-btn w-[20%] text-end bg-[#d2043d] submit-button cursor-pointer flex justify-center items-center">
                  <button className=" text-white ">Submit</button>
                </div>
              </div>
            </div>
          </div>
          <div className=" text-white mt-[73px]">
            <div className="lg:flex lg:justify-center w-[100%] p-4 md:flex md:col md:text-center">
              <div className="w-[30%] list-none lg:text-left lg:m-[0px] footer-links">
                <ul className="gap-y-8 leading-[47px]">
                  <li className=" text-[17px] font-[500]">
                    <a href="">FIND SUPPLIERS</a>
                  </li>
                  <li className=" text-[17px] font-[500]">
                    <a href="">SUPPLIERS POWERS RANKING</a>
                  </li>
                  <li className="text-[17px] font-[500]">
                    <a href="">REVIEWS</a>
                  </li>
                  <li className="text-[17px] font-[500]">
                    <a href="">CREATE A PROFILE</a>
                  </li>
                  <li className="text-[17px] font-[500]">
                    <a href="">PRICING</a>
                  </li>
                </ul>
              </div>
              <div className="w-[30%] justify-between m-auto">
                <div className="justify-between w-[100%] content-center">
                  <img src={footerLogo} alt="" className="w-[100px] m-auto" />
                </div>
                <div className="flex mt-5 gap-2 justify-center">
                  <div className="cursor-pointer">
                    <FacebookRed />
                  </div>
                  <div className="cursor-pointer">
                    <InstagramRed />
                  </div>
                  <div className="cursor-pointer">
                    <TwitterRed />
                  </div>
                  <div className="cursor-pointer">
                    <LinkedinRed />
                  </div>
                  <div className="cursor-pointer">
                    <YoutubeRed />
                  </div>
                </div>
              </div>
              <div className="w-[30%] list-none footer-links mt-5">
                <ul className="gap-y-8 leading-[47px] lg:text-end">
                  <li className="text-[17px] font-[500]">
                    <a>ABOUT 1851</a>
                  </li>
                  <li className="text-[17px] font-[500]">
                    <a>CONTACT</a>
                  </li>
                  <li className="text-[17px] font-[500]">
                    <a>SITE MAP</a>
                  </li>
                  <li className="text-[17px] font-[500]">
                    <a>TERMS OF USE</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="text-center font-[700] text-[12px] leading-[13.18px] lg:mt-16 lg:mb-10 footer-content">
              <span className="text-center pb-3">
                All content ©2023 1851 Franchise, LLC. All Rights Reserved. |
                Privacy Policy | Term & Conditions{" "}
              </span>
              <p className="mt-3">
                {" "}
                FRANCHISE OFFER This information is not intended as an offer to
                sell, or the solicitation of an offer to buy, a franchise. It is
                for information purposes only. Currently, the following states
                regulate the offer and sale of franchises: California, Hawaii,
                Illinois, Indiana, Maryland, Michigan, Minnesota, New York,
                North Dakota, Oregon, Rhode Island, South Dakota, Virginia,
                Washington, and Wisconsin. If you are a resident of one of these
                states, we will not offer you a franchise unless and until we
                have complied with applicable pre-sale registration and
                disclosure requirements in your jurisdiction. Franchise
                offerings are made by Franchise Disclosure Document only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
