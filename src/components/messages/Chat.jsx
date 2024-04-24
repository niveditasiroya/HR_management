import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaLink, FaWhatsapp } from "react-icons/fa";
import NowDate from "../Date";
import { FiLink } from "react-icons/fi";
import { PiTelegramLogoLight } from "react-icons/pi";

const Chat = () => {

  return (
    <div className="w-6/12">
      <div className="p-5 flex justify-between items-center border-b shadow-xl">
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
      <div className="bg-blue-50">
        <div className="p-5 flex flex-col gap-4">
          <div className="text-center mb-6">
            <NowDate />
          </div>
          <div className="flex gap-3">
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
          <div className="flex flex-row-reverse gap-3">
            <div className="w-10 h-10">
              <img
                src="/image/christopher.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="bg-blue-300 w-fit px-3 rounded-md">
                Hey there, do you need any help ?
              </p>
              <p className="bg-blue-300 w-fit px-3 rounded-md">
                I've recently received your CV
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-10 h-10">
              <img
                src="/image/christopher.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div>
              <p className="bg-white w-fit px-3 rounded-md">
                Yess, i have somequestions about GD
              </p>
            </div>
          </div>
          <div className="text-center my-6">
            <NowDate />
          </div>
          <div className="flex flex-row-reverse gap-3">
            <div className="w-10 h-10">
              <img
                src="/image/christopher.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="bg-blue-300 w-fit px-3 rounded-md">
                Hi Laurell , How are you?
              </p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9keQ8wUQtJVdg7L0Ha31vBGit8I8FHC3NMlxTVV4Lvvu9qh3LapOMPzZmKbmOt3ipKY&usqp=CAU" />
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-10 h-10">
              <img
                src="/image/christopher.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div>
              <p className="bg-white w-fit px-3 py-1 rounded-md flex gap-3 items-center">
                <FiLink />
                <div>
                  <p className="underline">Social-media-icon-vector-aivb...</p>
                  <p className="text-[12px]">1.6MB Upload Completed</p>
                </div>
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-3">
            <div className="w-10 h-10">
              <img
                src="/image/christopher.jpg"
                className="w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="bg-blue-300 w-fit px-3 rounded-md flex gap-3 items-center">
                <FiLink />
                <div>
                  <p className="underline">Social-media-icon-vector-aivb...</p>
                  <p className="text-[12px]">1.6MB Upload Completed</p>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div className="p-5 flex justify-between">
          <div className="flex gap-1">
            <div className="border bg-white w-10 h-10 flex items-center justify-center rounded-md">
              <button>
                <FaWhatsapp />
              </button>
            </div>
            <div>
              <input
                className="border bg-white rounded-md px-3 w-[700px] h-10"
                placeholder="Send message"
              />
            </div>
          </div>
          <div className="border bg-blue-400 text-white w-10 h-10 flex items-center justify-center rounded-md">
            <button>
              <PiTelegramLogoLight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
