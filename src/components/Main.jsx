import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";

const Main = () => {
  return (
    <div className='flex justify-center items-center flex-col'>
        <div className='flex'>
            <FiPhoneCall size={30}/>+91-9152374140</div>
        <div className='flex'>
            <HiOutlineMail size={30}/>raveenar.kale@gmail.com
        </div>
    </div>
  )
}

export default Main

