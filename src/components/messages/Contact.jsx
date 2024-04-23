import React from "react";
import NowDate from "../Date";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { PiTelegramLogoLight } from "react-icons/pi";
import EmpStatus from "../employees/EmpStatus";

const Contact = () => {
  const text = [
    {
      img: "/image/christopher.jpg",
      Icon: FaWhatsapp,
      name: "jouni Hakli",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bages: "12",
      availability: "active",
    },
    {
      img: "/image/christopher.jpg",
      Icon: FaWhatsapp,
      name: "jouni Hakli",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bages: "5",
      availability: "inactive",
    },
    {
      img: "/image/christopher.jpg",
      Icon: MdOutlineEmail,
      name: "jouni Hakli",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availability: "active",
    },
    {
      img: "/image/christopher.jpg",
      Icon: PiTelegramLogoLight,
      name: "jouni Hakli",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availability: "active",
    },
    {
      img: "/image/christopher.jpg",
      Icon: PiTelegramLogoLight,
      name: "jouni Hakli",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availability: "unverified",
    },
    {
      img: "/image/christopher.jpg",
      Icon: MdOutlineEmail,
      name: "jouni Hakli",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      bages: "7",
      availability: "inactive",
    },
    {
      img: "/image/christopher.jpg",
      Icon: FaWhatsapp,
      name: "jouni Hakli",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availability: "inactive",
    },
    {
      img: "/image/christopher.jpg",
      Icon: PiTelegramLogoLight,
      name: "jouni Hakli",
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      availability: "unverified",
    },
  ];
  return (
    <div className="p-5 w-4/12 border-r shadow-md">
      <div className="">
        {text?.map((detail) => {
          const Icon = detail.Icon;

          return (
            <div className="flex justify-between border-b p-3 border-r shadow-md">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 mb-4">
                  <img
                    className="w-full h-full rounded-full"
                    src={detail.img}
                  />
                </div>
                <div>
                  <p className="font-bold flex gap-3 items-center">
                    {detail.name} <Icon />
                  </p>
                  <p className="text-gray-600">{detail.msg}</p>
                  {/* <button className="px-3 rounded-xl bg-yellow-200">
                  Status
                </button> */}
                  <EmpStatus availability={detail.availability} />
                </div>
              </div>
              <div>
                <NowDate />

                <div>
                  {detail.bages && (
                    <span className="w-6 h-6 flex justify-center p-0.5 rounded-full bg-red-300">
                      {detail.bages}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
