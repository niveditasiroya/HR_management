import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import NowDate from "../Date";

const Chat = () => {
  return (
    <div className="w-4/12">
      <div className="p-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-14 h-14">
            <img
              src="/image/christopher.jpg"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="flex gap-3">
            <p>Olivia Allan Green</p>
            <p className="bg-green-600 w-[22px] h-[22px] p-[3px] rounded-full text-white">
              <FaWhatsapp />
            </p>
            <p>(541) 754-3010</p>
          </div>
        </div>
        <div className="bg-blue-50 p-2 w-[32px] h-[32px] rounded-full">
          <BsTelephone />
        </div>
      </div>
      <div className="p-5 bg-blue-50">
        <div className="text-center mb-6">
          <NowDate />
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10">
            <img
              src="/image/christopher.jpg"
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <p className="bg-white w-fit px-3 rounded-md">Hii !</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10">
            <img
              src="/image/christopher.jpg"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="bg-blue-300 w-fit px-3 rounded-md">Hey there, do you need any help ?</p>
            <p className="bg-blue-300 w-fit px-3 rounded-md">I've recently received your CV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
