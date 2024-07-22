import React, { useState } from "react";
import "./NavBar.css";
import logosvg from "../../assets/svg/LogoFran.svg";
import dropicon from "../../assets/svg/dropicon.svg";
import divider from "../../assets/svg/dviderico.svg";
import searchicon from "../../assets/svg/searchicon.svg";
import EstateIcon from "../../assets/svg/EstateIcon";
import growth from "../../assets/svg/cowsvg.svg";
import room from "../../assets/svg/roomsvg.svg";
import room1 from "../../assets/svg/statsvg.svg";
import FacebookIcon from "../../assets/svg/FacebookIcon";
import InstagramIcon from "../../assets/svg/InstagramIcon";
import TwitterIcon from "../../assets/svg/TwitterIcon";
import FlameIcon from "../../assets/svg/FlameIcon";
import HamburgerIcon from "../../assets/svg/HamburgerIcon.svg";
import HamburgerIcon1 from "../../assets/svg/HamburgerIcon.svg";
import FranchiseIcon from "../../assets/svg/FranchiseIcons";
import LinkedInIcon from "../../assets/svg/LinkedInIcon";
import YoutubeIcon from "../../assets/svg/YoutubeIcon";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

const NavBar = () => {
  const [mobileview, setMobileView] = useState(false);
  const HandleIcon = () => {
    setMobileView(!mobileview);
  };
  console.log("mobileview", mobileview);
  return (
    <>
      <div className="MobileRes">
        <img src={logosvg} alt="" className="mobileView" />
        <div className="menubtnCar" onClick={HandleIcon}>
          {mobileview ? (
            <CloseOutlined className="mobile-IconCross" />
          ) : (
            <>
              <img src={HamburgerIcon1} alt="missing" className="mt-[6px]" />
              <h6 className="text-white text-center text-[12px] pt-[2px]">
                MENU
              </h6>
            </>
          )}
        </div>
      </div>
      <div>
        {mobileview ? (
          <div className="mobile-view">
            <div className="mainTrendinCard">
              <div className="containterFranchies">
                <div className="flex justify-center items-center gap-[4px] texttrans responsive">
                  <FlameIcon /> <strong>TRENDING</strong> Experienced Healthcare
                  Executive Brings Seniors Helping Seniors® to Gloucester
                  County, New Jersey
                </div>
              </div>
            </div>
            <div className="mainSocialCard">
              <div className="containterFranchies">
                <div className="flex justify-between items-center pt-[4px] NavResponsive">
                  <div className="mainsocialCardleft flex items-center gap-[20px]">
                    <div className="franchbg cursor-pointer">
                      <FranchiseIcon />
                    </div>
                    <div className="flex text-white text-[12px] gap-[6px] items-center cursor-pointer">
                      <img src={growth} alt="missing" />{" "}
                      <h6>1851 GROWTH CLUB</h6>
                    </div>
                    <div className="flex text-white text-[12px] gap-[6px] items-center cursor-pointer">
                      <EstateIcon /> <h6>ESTATE ENVY</h6>
                    </div>
                    <div className="flex text-white text-[12px] gap-[6px] items-center cursor-pointer">
                      <img src={room} alt="missing" /> <h6>ROOM 1903</h6>
                    </div>
                    <div className="flex text-white text-[12px] gap-[6px] items-center cursor-pointer">
                      <img src={room1} alt="missing" /> <h6>STATCHECOW</h6>
                    </div>
                  </div>
                  <div className="mainsocialCardright flex gap-[10px] justify-end">
                    <div className="cursor-pointer">
                      <FacebookIcon />
                    </div>
                    <div className="cursor-pointer">
                      <InstagramIcon />
                    </div>
                    <div className="cursor-pointer">
                      <TwitterIcon />
                    </div>
                    <div className="cursor-pointer">
                      <LinkedInIcon />
                    </div>
                    <div className="cursor-pointer">
                      <YoutubeIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="containterFranchies topBar">
              <div className="logoCard">
                <img src={logosvg} alt="" className="logodisplynone" />
              </div>
              <div className="navMenu flex gap-[18px]">
                <h6 className="text-[12px] text-white flex gap-[5px] items-center font-[300]">
                  SUPPLIER DATABASE <img src={dropicon} alt="missing" />
                </h6>
                <h6 className="text-[12px] text-white flex gap-[5px] items-center font-[300]">
                  SUPPLIER DATABASE <img src={dropicon} alt="missing" />
                </h6>
                <h6 className="text-[12px] text-white flex gap-[5px] items-center font-[300]">
                  SUPPLIER DATABASE <img src={dropicon} alt="missing" />
                </h6>
              </div>
              <div className="subscribeBtn flex gap-[16px] items-center justify-between">
                <img src={divider} alt="missing" className="dviderres" />
                <div className="lg:ml-[10px] flex h-[35px] sm:ml-[4px] serachRes">
                  <img
                    src={searchicon}
                    alt="missing"
                    className="absolute mt-[9px] ml-[12px] cursor-pointer"
                  />
                  <input
                    type="search"
                    placeholder="Search"
                    className="searchBar"
                  />
                </div>
                <button>subscribe</button>
                <div className="menubtnCard">
                  <img src={HamburgerIcon} alt="missing" className="mt-[6px]" />
                  <h6 className="text-white text-center text-[12px] pt-[2px]">
                    MENU
                  </h6>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="destopview">
            <div className="mainTrendinCard">
              <div className="containterFranchies">
                <div className="flex justify-center items-center gap-[4px] texttrans responsive">
                  <FlameIcon /> <strong>TRENDING</strong> Experienced Healthcare
                  Executive Brings Seniors Helping Seniors® to Gloucester
                  County, New Jersey
                </div>
              </div>
            </div>
            <div className="mainSocialCard">
              <div className="containterFranchies">
                <div className="flex justify-between items-center pt-[4px] NavResponsive">
                  <div className="mainsocialCardleft flex items-center gap-[20px]">
                    <div className="franchbg cursor-pointer">
                      <FranchiseIcon />
                    </div>
                    <div className="flex text-white text-[12px] gap-[6px] items-center cursor-pointer">
                      <img src={growth} alt="missing" />
                      <h6>1851 GROWTH CLUB</h6>
                    </div>
                    <div className="flex text-white text-[12px] gap-[6px] items-center cursor-pointer">
                      <EstateIcon /> <h6>ESTATE ENVY</h6>
                    </div>
                    <div className="flex text-white text-[12px] gap-[6px] items-center cursor-pointer">
                      <img src={room} alt="missing" /> <h6>ROOM 1903</h6>
                    </div>
                    <div className="flex text-white text-[12px] gap-[6px] items-center cursor-pointer">
                      <img src={room1} alt="missing" /> <h6>STATCHECOW</h6>
                    </div>
                  </div>
                  <div className="mainsocialCardright flex gap-[10px] justify-end">
                    <div className="cursor-pointer">
                      <FacebookIcon />
                    </div>
                    <div className="cursor-pointer">
                      <InstagramIcon />
                    </div>
                    <div className="cursor-pointer">
                      <TwitterIcon />
                    </div>
                    <div className="cursor-pointer">
                      <LinkedInIcon />
                    </div>
                    <div className="cursor-pointer">
                      <YoutubeIcon />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="containterFranchies topBar">
              <div className="logoCard">
                <img src={logosvg} alt="" className="logodisplynone" />
              </div>
              <div className="navMenu flex gap-[18px]">
                <h6 className="text-[12px] text-white flex gap-[5px] items-center font-[300]">
                  SUPPLIER DATABASE <img src={dropicon} alt="missing" />
                </h6>
                <h6 className="text-[12px] text-white flex gap-[5px] items-center font-[300]">
                  SUPPLIER DATABASE <img src={dropicon} alt="missing" />
                </h6>
                <h6 className="text-[12px] text-white flex gap-[5px] items-center font-[300]">
                  SUPPLIER DATABASE <img src={dropicon} alt="missing" />
                </h6>
              </div>
              <div className="subscribeBtn flex gap-[16px] items-center justify-between">
                <img src={divider} alt="missing" className="dviderres" />
                <div className="lg:ml-[10px] flex h-[35px] sm:ml-[4px] serachRes">
                  <img
                    src={searchicon}
                    alt="missing"
                    className="absolute mt-[9px] ml-[12px] cursor-pointer"
                  />
                  <input
                    type="search"
                    placeholder="Search"
                    className="searchBar"
                  />
                </div>
                <button>subscribe</button>
                <div className="menubtnCard">
                  <img src={HamburgerIcon} alt="missing" className="mt-[6px]" />
                  <h6 className="text-white text-center text-[12px] pt-[2px]">
                    MENU
                  </h6>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
