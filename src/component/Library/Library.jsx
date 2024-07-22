import React from "react";
import "./Library.css";
import playerimg from "../../assets/svg/playerimg.png";
import playIcon from "../../assets/svg/playIcons";
const Library = () => {
  return (
    <div className="">
    <div className="containterFranchies text-white">
      <div className="player-main flex w-[100%] p-4 gap-4">
        <div className="w-[65%] left-player">
          <div className="font-[400] text-white lg:text-[29px] md:text-[15px] leading-[48px]">
            MEET THE SUPPLIERS LIBRARY
          </div>
          <div className="player-theme p-3 ">
            <div className="">
              <div className="bg-[#ffff]">
                <img src={playerimg} alt="" />
                {/* <img src={playIcon} alt="" className="absolute"/> */}
              </div>
            </div>
            <div className="flex W-[100%] gap-2 thumbnail">
              <div className="lg:w-[50%] mt-3 md:w-[100%] md:text-[15px]">
                <div className="player-time">August 23, 2023 10:00 a.m.</div>
                <div className="font-[400] lg:text-[27px] lg:leading-[34px] md:leading-[15px] mt-2 md:text-[15px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae ut a tristique
                  suspendisse.
                </div>
              </div>
              <div className="lg:w-[50%] player-desc mt-4 md:[100%]">
                Lorem ipsum dolor sit amet consectetur. Praesent enim ultrices
                et consectetur euismod. Tristique vitae morbi in dictum pulvinar
                suscipit lacus. Dolor sem ante tincidunt enim tellus facilisis.
                Convallis volutpat augue hendrerit risus egestas cum. At tellus
                auctor enim neque convallis odio. Enim convallis fusce ac sed
                massa viverra amet. Elit magna lorem scelerisque aliquet vitae
                erat facilisi. Facilisis turpis est a.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[35%] mt-12 right-player">
          <div className="">Watch Next</div>
          <div className="flex w-[100%] gap-[18px] mt-3 items-start">
            <div className="w-[45%]">
              <div className="bg-[#ffff]">
                <img src={playerimg} alt="" />
                <playIcon />
              </div>
            </div>
            <div className="w-[55%]">
              <div className="player-time watch-thumbnail-heading">August 23, 2023 10:00 a.m.</div>
              <div className="text-[14px] uppercase watch-thumbnail">
                Lorem ipsum dolor sit amet consectetur. Et sed in ac et egestas
                quam volutpat.
              </div>
            </div>
          </div>
          <div className="flex w-[100%] gap-[18px] mt-3 items-start">
            <div className="w-[45%]">
              <div className="bg-[#ffff]">
                <img src={playerimg} alt="" />
                <playIcon />
              </div>
            </div>
            <div className="w-[55%]">
              <div className="player-time watch-thumbnail-heading">August 23, 2023 10:00 a.m.</div>
              <div className="text-[14px] uppercase watch-thumbnail">
                Lorem ipsum dolor sit amet consectetur. Et sed in ac et egestas
                quam volutpat.
              </div>
            </div>
          </div>
          <div className="flex w-[100%] gap-[18px] mt-3 items-start">
            <div className="w-[45%]">
              <div className="bg-[#ffff]">
                <img src={playerimg} alt="" />
                <playIcon />
              </div>
            </div>
            <div className="w-[55%]">
              <div className="player-time watch-thumbnail-heading">August 23, 2023 10:00 a.m.</div>
              <div className="text-[14px] uppercase watch-thumbnail">
                Lorem ipsum dolor sit amet consectetur. Et sed in ac et egestas
                quam volutpat.
              </div>
            </div>
          </div>
          <div className="flex w-[100%] gap-[18px] mt-3 items-start">
            <div className="w-[45%]">
              <div className="bg-[#ffff]">
                <img src={playerimg} alt="" />
                <playIcon />
              </div>
            </div>
            <div className="w-[55%]">
              <div className="player-time watch-thumbnail-heading">August 23, 2023 10:00 a.m.</div>
              <div className="text-[14px] uppercase watch-thumbnail">
                Lorem ipsum dolor sit amet consectetur. Et sed in ac et egestas
                quam volutpat.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Library;
