import React, { useEffect, useState } from "react";
import Line from "../../assets/svg/Line";
import "./Card.css";
import placeholderLogo from '../../assets/svg/logoPlaceholder.svg'
import rightArrow from '../../assets/svg/rightArrow.svg'
import { DownOutlined, RightOutlined } from "@ant-design/icons";
import stars from '../../assets/svg/5StarRating.svg';
import playIcon from '../../assets/svg/PlayButton.svg'
import ribbon from '../../assets/svg/GraphIcon.svg'
const data = [
  { id: 0, label: "Istanbul, TR (AHL)" },
  { id: 1, label: "Paris, FR (CDG)" },
];
const Cards = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <div>
      <div className="">
        <div className="w-[80%] m-auto mb-8">
          <div className="m-auto w-full text-center my-8 mt-24  supply-heading font-[400] text-[50px] leading-[49px] text-[#eb0c49]">Supplier Review Database</div>
          <div className="flex justify-around gap-8 card-dropdown">
            <div className="res-submit-btn w-[20%] text-end bg-[#d2043d] submit-button cursor-pointer flex justify-center items-center rounded-lg">
              <button className=" text-white ">SUBMIT A REVIEW</button>
            </div>
            <div className="bg-[#f1f3f3] rounded-lg">
              <div className="flex w-[100%] rounded-lg h-[80px] maincard-input">
                <div className="w-[50%] px-9 py-1 grid res-lable bg-[#f1f3f3]">
                  <label htmlFor="" className="text-[11px] text-[#f15681]">
                  Sort By Type
                  </label>
                  <div className="dropdown w-auto">
                    <div className="dropdown-header" onClick={toggleDropdown}>
                      {selectedItem
                        ? items.find((item) => item.id == selectedItem).label
                        : "Accounting"}
                      <DownOutlined
                        className={`fa fa-chevron-right icon ${
                          isOpen && "open"
                        }`}
                      />
                    </div>
                    <div className={`dropdown-body ${isOpen && "open"}`}>
                      {items.map((item) => (
                        <div
                          className="dropdown-item"
                          onClick={(e) => handleItemClick(e.target.id)}
                          id={item.id}
                        >
                          <span
                            className={`dropdown-item-dot ${
                              item.id == selectedItem && "selected"
                            }`}
                          >
                            •{" "}
                          </span>
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <Line className="pt-10" />
                <div className=" w-[50%] px-8 py-1 rounded-lg grid res-lable bg-[#f1f3f3]">
                  <label
                    htmlFor=""
                    className="text-[11px] text-[#f15681]  w-[40%] "
                  >
                   Filter Reviews By
                  </label>
                  <div className="dropdown w-auto">
                    <div className="dropdown-header" onClick={toggleDropdown}>
                      {selectedItem
                        ? items.find((item) => item.id == selectedItem).label
                        : "Select"}
                      <DownOutlined
                        className={`fa fa-chevron-right icon ${
                          isOpen && "open"
                        }`}
                      />
                    </div>
                    <div className={`dropdown-body ${isOpen && "open"}`}>
                      {items.map((item) => (
                        <div
                          className="dropdown-item"
                          onClick={(e) => handleItemClick(e.target.id)}
                          id={item.id}
                        >
                          <span
                            className={`dropdown-item-dot ${
                              item.id == selectedItem && "selected"
                            }`}
                          >
                            •{" "}
                          </span>
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="res-filter-btn w-[200px] text-end bg-[#d2043d] filter-button cursor-pointer flex justify-center items-center">
                  <button className=" text-white ">FILTER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:flex  gap-8 lg:w-[90%] m-auto flex-wrap justify-center mb-[80px] md:col md:w-[100%] gap-y-8 md:mt-8">
         <div className="lg:w-[45%] md:w-[100%]  bg-blue bg-[#f5f5f5] rounded-lg card-item">
            <div className=" p-3">
                <div className="bg-[#fff] p-2 rounded-lg">
                    <div className="flex w-[100%] gap-3">
                        <div className="w-[20%]"><img src={placeholderLogo} alt="" /></div>
                        <div className="w-[80%]">
                            <div className="font-[Oswald] text-[25px] leading-[58px]">SUPPLIER NAME</div>
                            <div className="flex font-[600] items-center text-[20px] leading-[24px] font-[Nunito]">4.9 <img src={stars} alt="" className="mx-3"/> <span className="text-[#eb0544] flex">10 REVIEWS <img src={rightArrow} alt="" className="mx-3"/></span></div>
                        </div>
                        <div className="ribbon"><img src={ribbon} alt="" className="m-auto mt-4"/><p className="mt-2">Franchise Sales</p></div>
                    </div>
                    <div className="flex w-[100%] border-t-2 border-gray-200 gap-8 mt-5">
                        <div className="w-[50%] border-r-2 border-gray-200">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Location:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">Houston, TX</div>
                        </div>
                        <div className="w-[50%]">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Founded:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">2013</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Description:</div>
                <div className="font-[Nunito] font-[400] text-[14px] leading-[22px]  mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</div>
            </div> 
            <div className="flex w-[100%] mt-5">
                <div className="w-[50%] brand-page font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8">VIEW BRAND PAGE</button></div>
                <div className="w-[50%] supply-btn font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8 flex items-center">MEET THE SUPPLIER <img src={playIcon} alt="" className="ml-3"/> </button></div>
            </div>
         </div>
         <div className="lg:w-[45%] md:w-[100%]  bg-blue bg-[#f5f5f5] rounded-lg card-item">
            <div className=" p-3">
                <div className="bg-[#fff] p-2 rounded-lg">
                    <div className="flex w-[100%] gap-3">
                        <div className="w-[20%]"><img src={placeholderLogo} alt="" /></div>
                        <div className="w-[80%]">
                            <div className="font-[Oswald] text-[25px] leading-[58px]">SUPPLIER NAME</div>
                            <div className="flex font-[600] items-center text-[20px] leading-[24px] font-[Nunito]">4.9 <img src={stars} alt="" className="mx-3"/> <span className="text-[#eb0544] flex">10 REVIEWS <img src={rightArrow} alt="" className="mx-3"/></span></div>
                        </div>
                        <div className="ribbon"><img src={ribbon} alt="" className="m-auto mt-4"/><p className="mt-2">Franchise Sales</p></div>
                    </div>
                    <div className="flex w-[100%] border-t-2 border-gray-200 gap-8 mt-5">
                        <div className="w-[50%] border-r-2 border-gray-200">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Location:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">Houston, TX</div>
                        </div>
                        <div className="w-[50%]">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Founded:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">2013</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Description:</div>
                <div className="font-[Nunito] font-[400] text-[14px] leading-[22px]  mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</div>
            </div> 
            <div className="flex w-[100%] mt-5">
                <div className="w-[50%] brand-page font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8">VIEW BRAND PAGE</button></div>
                <div className="w-[50%] supply-btn font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8 flex items-center">MEET THE SUPPLIER <img src={playIcon} alt="" className="ml-3"/> </button></div>
            </div>
         </div>
         <div className="lg:w-[45%] md:w-[100%]  bg-blue bg-[#f5f5f5] rounded-lg card-item">
            <div className=" p-3">
                <div className="bg-[#fff] p-2 rounded-lg">
                    <div className="flex w-[100%] gap-3">
                        <div className="w-[20%]"><img src={placeholderLogo} alt="" /></div>
                        <div className="w-[80%]">
                            <div className="font-[Oswald] text-[25px] leading-[58px]">SUPPLIER NAME</div>
                            <div className="flex font-[600] items-center text-[20px] leading-[24px] font-[Nunito]">4.9 <img src={stars} alt="" className="mx-3"/> <span className="text-[#eb0544] flex">10 REVIEWS <img src={rightArrow} alt="" className="mx-3"/></span></div>
                        </div>
                        <div className="ribbon"><img src={ribbon} alt="" className="m-auto mt-4"/><p className="mt-2">Franchise Sales</p></div>
                    </div>
                    <div className="flex w-[100%] border-t-2 border-gray-200 gap-8 mt-5">
                        <div className="w-[50%] border-r-2 border-gray-200">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Location:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">Houston, TX</div>
                        </div>
                        <div className="w-[50%]">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Founded:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">2013</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Description:</div>
                <div className="font-[Nunito] font-[400] text-[14px] leading-[22px]  mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</div>
            </div> 
            <div className="flex w-[100%] mt-5">
                <div className="w-[50%] brand-page font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8">VIEW BRAND PAGE</button></div>
                <div className="w-[50%] supply-btn font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8 flex items-center">MEET THE SUPPLIER <img src={playIcon} alt="" className="ml-3"/> </button></div>
            </div>
         </div>
         <div className="lg:w-[45%] md:w-[100%]  bg-blue bg-[#f5f5f5] rounded-lg card-item">
            <div className=" p-3">
                <div className="bg-[#fff] p-2 rounded-lg">
                    <div className="flex w-[100%] gap-3">
                        <div className="w-[20%]"><img src={placeholderLogo} alt="" /></div>
                        <div className="w-[80%]">
                            <div className="font-[Oswald] text-[25px] leading-[58px]">SUPPLIER NAME</div>
                            <div className="flex font-[600] items-center text-[20px] leading-[24px] font-[Nunito]">4.9 <img src={stars} alt="" className="mx-3"/> <span className="text-[#eb0544] flex">10 REVIEWS <img src={rightArrow} alt="" className="mx-3"/></span></div>
                        </div>
                        <div className="ribbon"><img src={ribbon} alt="" className="m-auto mt-4"/><p className="mt-2">Franchise Sales</p></div>
                    </div>
                    <div className="flex w-[100%] border-t-2 border-gray-200 gap-8 mt-5">
                        <div className="w-[50%] border-r-2 border-gray-200">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Location:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">Houston, TX</div>
                        </div>
                        <div className="w-[50%]">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Founded:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">2013</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Description:</div>
                <div className="font-[Nunito] font-[400] text-[14px] leading-[22px]  mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</div>
            </div> 
            <div className="flex w-[100%] mt-5">
                <div className="w-[50%] brand-page font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8">VIEW BRAND PAGE</button></div>
                <div className="w-[50%] supply-btn font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8 flex items-center">MEET THE SUPPLIER <img src={playIcon} alt="" className="ml-3"/> </button></div>
            </div>
         </div>
         <div className="lg:w-[45%] md:w-[100%]  bg-blue bg-[#f5f5f5] rounded-lg card-item">
            <div className=" p-3">
                <div className="bg-[#fff] p-2 rounded-lg">
                    <div className="flex w-[100%] gap-3">
                        <div className="w-[20%]"><img src={placeholderLogo} alt="" /></div>
                        <div className="w-[80%]">
                            <div className="font-[Oswald] text-[25px] leading-[58px]">SUPPLIER NAME</div>
                            <div className="flex font-[600] items-center text-[20px] leading-[24px] font-[Nunito]">4.9 <img src={stars} alt="" className="mx-3"/> <span className="text-[#eb0544] flex">10 REVIEWS <img src={rightArrow} alt="" className="mx-3"/></span></div>
                        </div>
                        <div className="ribbon"><img src={ribbon} alt="" className="m-auto mt-4"/><p className="mt-2">Franchise Sales</p></div>
                    </div>
                    <div className="flex w-[100%] border-t-2 border-gray-200 gap-8 mt-5">
                        <div className="w-[50%] border-r-2 border-gray-200">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Location:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">Houston, TX</div>
                        </div>
                        <div className="w-[50%]">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Founded:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">2013</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Description:</div>
                <div className="font-[Nunito] font-[400] text-[14px] leading-[22px]  mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</div>
            </div> 
            <div className="flex w-[100%] mt-5">
                <div className="w-[50%] brand-page font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8">VIEW BRAND PAGE</button></div>
                <div className="w-[50%] supply-btn font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8 flex items-center">MEET THE SUPPLIER <img src={playIcon} alt="" className="ml-3"/> </button></div>
            </div>
         </div>
         <div className="lg:w-[45%] md:w-[100%]  bg-blue bg-[#f5f5f5] rounded-lg card-item">
            <div className=" p-3">
                <div className="bg-[#fff] p-2 rounded-lg">
                    <div className="flex w-[100%] gap-3">
                        <div className="w-[20%]"><img src={placeholderLogo} alt="" /></div>
                        <div className="w-[80%]">
                            <div className="font-[Oswald] text-[25px] leading-[58px]">SUPPLIER NAME</div>
                            <div className="flex font-[600] items-center text-[20px] leading-[24px] font-[Nunito]">4.9 <img src={stars} alt="" className="mx-3"/> <span className="text-[#eb0544] flex">10 REVIEWS <img src={rightArrow} alt="" className="mx-3"/></span></div>
                        </div>
                        <div className="ribbon"><img src={ribbon} alt="" className="m-auto mt-4"/><p className="mt-2">Franchise Sales</p></div>
                    </div>
                    <div className="flex w-[100%] border-t-2 border-gray-200 gap-8 mt-5">
                        <div className="w-[50%] border-r-2 border-gray-200">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Location:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">Houston, TX</div>
                        </div>
                        <div className="w-[50%]">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Founded:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">2013</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Description:</div>
                <div className="font-[Nunito] font-[400] text-[14px] leading-[22px]  mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</div>
            </div> 
            <div className="flex w-[100%] mt-5">
                <div className="w-[50%] brand-page font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8">VIEW BRAND PAGE</button></div>
                <div className="w-[50%] supply-btn font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8 flex items-center">MEET THE SUPPLIER <img src={playIcon} alt="" className="ml-3"/> </button></div>
            </div>
         </div>
         <div className="lg:w-[45%] md:w-[100%]  bg-blue bg-[#f5f5f5] rounded-lg card-item">
            <div className=" p-3">
                <div className="bg-[#fff] p-2 rounded-lg">
                    <div className="flex w-[100%] gap-3">
                        <div className="w-[20%]"><img src={placeholderLogo} alt="" /></div>
                        <div className="w-[80%]">
                            <div className="font-[Oswald] text-[25px] leading-[58px]">SUPPLIER NAME</div>
                            <div className="flex font-[600] items-center text-[20px] leading-[24px] font-[Nunito]">4.9 <img src={stars} alt="" className="mx-3"/> <span className="text-[#eb0544] flex">10 REVIEWS <img src={rightArrow} alt="" className="mx-3"/></span></div>
                        </div>
                        <div className="ribbon"><img src={ribbon} alt="" className="m-auto mt-4"/><p className="mt-2">Franchise Sales</p></div>
                    </div>
                    <div className="flex w-[100%] border-t-2 border-gray-200 gap-8 mt-5">
                        <div className="w-[50%] border-r-2 border-gray-200">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Location:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">Houston, TX</div>
                        </div>
                        <div className="w-[50%]">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Founded:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">2013</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Description:</div>
                <div className="font-[Nunito] font-[400] text-[14px] leading-[22px]  mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</div>
            </div> 
            <div className="flex w-[100%] mt-5">
                <div className="w-[50%] brand-page font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8">VIEW BRAND PAGE</button></div>
                <div className="w-[50%] supply-btn font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8 flex items-center">MEET THE SUPPLIER <img src={playIcon} alt="" className="ml-3"/> </button></div>
            </div>
         </div>
         <div className="lg:w-[45%] md:w-[100%]  bg-blue bg-[#f5f5f5] rounded-lg card-item">
            <div className=" p-3">
                <div className="bg-[#fff] p-2 rounded-lg">
                    <div className="flex w-[100%] gap-3">
                        <div className="w-[20%]"><img src={placeholderLogo} alt="" /></div>
                        <div className="w-[80%]">
                            <div className="font-[Oswald] text-[25px] leading-[58px]">SUPPLIER NAME</div>
                            <div className="flex font-[600] items-center text-[20px] leading-[24px] font-[Nunito]">4.9 <img src={stars} alt="" className="mx-3"/> <span className="text-[#eb0544] flex">10 REVIEWS <img src={rightArrow} alt="" className="mx-3"/></span></div>
                        </div>
                        <div className="ribbon"><img src={ribbon} alt="" className="m-auto mt-4"/><p className="mt-2">Franchise Sales</p></div>
                    </div>
                    <div className="flex w-[100%] border-t-2 border-gray-200 gap-8 mt-5">
                        <div className="w-[50%] border-r-2 border-gray-200">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Location:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">Houston, TX</div>
                        </div>
                        <div className="w-[50%]">
                            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Founded:</div>
                            <div className="font-[Oswald] font-[400] text-[27px] leading-[58px]">2013</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
            <div className="font-[Nunito] font-[500] text-[14px] leading-[2px] text-[#eb0544] mt-6">Description:</div>
                <div className="font-[Nunito] font-[400] text-[14px] leading-[22px]  mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</div>
            </div> 
            <div className="flex w-[100%] mt-5">
                <div className="w-[50%] brand-page font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8">VIEW BRAND PAGE</button></div>
                <div className="w-[50%] supply-btn font-[Oswald] font-[400] text-[25px] leading-[37px] cursor-pointer"><button className="p-8 flex items-center">MEET THE SUPPLIER <img src={playIcon} alt="" className="ml-3"/> </button></div>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
