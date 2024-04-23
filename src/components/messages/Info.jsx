import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegFileAlt } from "react-icons/fa";
import { IoBagHandleOutline, IoCallOutline } from "react-icons/io5";
import { MdOutlineCake } from "react-icons/md";
import { SiIbmwatson } from "react-icons/si";

const Info = () => {
  const details = [
    {
      name: "San Francisco",
      Icon: CiLocationOn,
    },
    {
      name: "25 years old",
      Icon: MdOutlineCake,
    },
    {
      name: "(541) 754-3013",
      Icon: IoCallOutline,
    },
    {
      name: "Senior UI/UX Designer",
      Icon: IoBagHandleOutline,
    },
    {
      name: "IBM Corporation",
      Icon: SiIbmwatson,
    },
  ];

  return (
    <>
      <div className="p-5 w-4/12 border-l shadow-md">
        <div className="flex flex-col justify-center items-center mb-8">
          <div className="h-32 w-32 mb-4">
            <img
              className="w-full h-full rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
          <p className="text-xl">Haydon Paullia Kallio</p>
          <a className="text-blue-600 pb-4">View Profile</a>

          <select className="bg-gray-50 border rounded-lg block w-full p-2.5">
            <option selected>On-site interview round 1</option>
            <option>On-site interview round 2</option>
            <option>On-site interview round 3</option>
            <option>On-site interview round 4</option>
            <option>On-site interview round 5</option>
          </select>
        </div>
        <hr />
        <div className="py-8 flex flex-col gap-3">
          {details?.map((detail) => {
            const Icon = detail.Icon;
            return (
              <div className="flex gap-4 items-center">
                <Icon />
                {detail?.name}
              </div>
            );
          })}
          <div className="flex gap-4">
            <div>
              <FaRegFileAlt />
            </div>
            <p>
              A front-end developer builds the front-end portion of websites and
              web applications—the part users see and interact with. A front-end
              developer creates websites and applications using web languages
              such as HTML, CSS, and JavaScript that allow users to access and
              interact with the site or app.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
