import React from 'react'
import NavBar from "../NavBar/NavBar";
import service1 from '../../assets/svg/service1.svg'
import service2 from '../../assets/svg/service2.svg'
import service3 from '../../assets/svg/service3.svg'
import serviceline from '../../assets/svg/serviceline.svg'

const ServiceSec = () => {
  return (
   <div className="pb-12">
    <div className='containterFranchies bg-[#F1F3F3] rounded-[28px] flex res-flex '>
 <div className="w-[33%] text-center py-[2%] ser-res">
    <img src={service1} alt=""  style={{margin:'0px auto'}}/>
    <h3 className='font-[oswald] text-[27px] uppercase pt-[3%]'>Verified Profiles</h3>
    <p className='text-center text-[14px] px-[18%]'>1851’s research team has verified all information to ensure the most up-to-date information on each supplier</p>
 </div>
 <img src={serviceline} alt=""  className='serline-res'/>
 <div className="w-[33%] text-center py-[2%] ser-res">
    <img src={service2} alt=""  style={{margin:'0px auto'}}/>
    <h3 className='font-[oswald] text-[27px] uppercase pt-[3%]'>Research & Content Hub</h3>
    <p className='text-center text-[14px] px-[18%]'>
    A full-circle approach to performing due diligence to ensure your match is the right fit for your franchise.        </p>
 </div>
 <img src={serviceline} alt="" className='serline-res' />
 <div className="w-[33%] text-center py-[2%] ser-res">
    <img src={service3} alt=""  style={{margin:'0px auto'}}/>
    <h3 className='font-[oswald] text-[27px] uppercase pt-[3%]'>Customer Testimonials </h3>
    <p className='text-center text-[14px] px-[18%]'>
    Fellow franchisors, franchisees and business owners can submit reviews on behalf of the franchisor        </p>
 </div>
    </div>
    </div>
  )
}

export default ServiceSec