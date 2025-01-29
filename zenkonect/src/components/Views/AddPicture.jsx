import React from "react";
import logo from "../assets/logo.png";
import mark from "../assets/vector (5).png";
import plus from "../assets/vector (6).png";
import imgag1 from "../assets/Rectangle 76.png";
import imgag2 from "../assets/Rectangle 77.png";
import imgag3 from "../assets/Rectangle 78.png";
import star from "../assets/image 44.png";

const AddPicture = () => {
  return (
    <div className="">
      <div className="w-[60%] mx-auto mt-2 bg-[#EDEDED] pr-6 pt-4 pb-4 rounded-md">
        <div className="flex items-center justify-between ">
          <div className="flex-1 flex justify-center ml-36 mb-1">
            <div>
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="flex items-center gap-2 bg-pink-400 cursor-pointer w-fit h-4 rounded-md pl-4 pt-5 pb-5 pr-4">
            <img src={mark} className="w-[20px]" />
            <p className="text-sm text-white">Verify Your Photo</p>
          </div>
        </div>
        <div className="text-center font-bold">
          <p>
            Upload at least 6 of your best pictures to make a great first <br />
            impression.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-9 mt-7 justify-items-center mx-auto w-fit">
          <div className="bg-[#F175BF42] w-[170px] h-[170px] flex justify-center rounded-md items-center">
            <img src={plus} alt="" />
          </div>
          <div className="bg-[#F175BF42] w-[170px] h-[170px] flex justify-center rounded-md items-center">
            <img src={plus} alt="" />
          </div>
          <div className="bg-[#F175BF42] w-[170px] h-[170px] flex justify-center rounded-md items-center">
            <img src={plus} alt="" />
          </div>
          <div className="bg-[#F175BF42] w-[170px] h-[170px] flex justify-center items-center rounded-md relative">
            <img src={imgag1} alt="" />
            <img
              src={star}
              alt=""
              className="absolute top-[-10px] right-[-10px] w-6 h-6"
            />
          </div>
          <div className="bg-[#F175BF42] w-[170px] h-[170px] flex justify-center items-center rounded-md relative">
            <img src={imgag2} alt="" />
            <img
              src={star}
              alt=""
              className="absolute top-[-10px] right-[-10px] w-6 h-6"
            />
          </div>
          <div className="bg-[#F175BF42] w-[170px] h-[170px] flex justify-center items-center rounded-md relative">
            <img src={imgag3} alt="" />
            <img
              src={star}
              alt=""
              className="absolute top-[-10px] right-[-10px] w-6 h-6"
            />
          </div>
        </div>
        <div className="flex items-center m-auto mt-6 gap-2 cursor-pointer bg-pink-400 w-fit h-4 rounded-md pl-4 pt-5 pb-5 pr-4">
          <img src={mark} className="w-[20px]" />
          <p className="text-sm text-white">Verify Your Photo</p>
        </div>
      </div>
    </div>
  );
};

export default AddPicture;
