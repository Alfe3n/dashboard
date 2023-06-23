import { useState, useEffect } from "react";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlinePieChart,
  AiOutlineLike,
} from "react-icons/ai";
import { BsTags } from "react-icons/bs";
import { GrSchedulePlay } from "react-icons/gr";
import { PiUsersBold } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import userimg from "../assets/alfeen.jpg";
import revenue from "../assets/revenue.svg";
import schedule from "../assets/schedule_icon.svg";
function dashboard() {
  const [searchtext, setsearchtext] = useState("");
  return (
    <div className="page-container flex h-screen bg-ash">
      <div className="left-menu bg-black text-white flex flex-col h-5/6 m-12 py-12 px-16 font-mont rounded-3xl mr-0">
        <div className="font-bold text-4xl mb-12 ">
          <h1>Board.</h1>
        </div>
        <div className="menu-container flex flex-col text-lg font-bold gap-y-8">
          <div className="flex gap-x-4 items-center">
            <AiOutlinePieChart className="text-2xl" />
            <h2>Dashboard</h2>
          </div>
          <div className="flex gap-x-4 items-center">
            <BsTags className="text-2xl" />
            <h2>Transactions</h2>
          </div>
          <div className="flex gap-x-4 items-center">
            <img src={schedule}></img>
            <h2>Schedules</h2>
          </div>
          <div className="flex gap-x-4 items-center">
            <BiUserCircle className="text-2xl" />
            <h2>Users</h2>
          </div>
          <div className="flex gap-x-4 items-center">
            <FiSettings className="text-2xl h-" />
            <h2>Settings</h2>
          </div>
        </div>
        <div className="mt-auto flex flex-col gap-y-6">
          <h3>Help</h3>
          <h3>Contact Us</h3>
        </div>
      </div>
      <div className="right-container mx-14 mt-14 w-full">
        <div className="header-row flex justify-between items-center mb-8">
          <h2 className="text-4xl font-extrabold font-mont">Dashboard</h2>
          <div className="flex items-center gap-x-8">
            <div className="flex items-center bg-white rounded-2xl p-2 text-grey2">
              <input
                type="text"
                value={searchtext}
                className="focus:outline-none"
                placeholder="Search.."
                onChange={(e) => setsearchtext(e.target.value)}
              ></input>
              <AiOutlineSearch className="text-xl" />
            </div>
            <AiOutlineBell className="text-3xl" />
            <img
              src={userimg}
              alt="user image"
              className="h-12 rounded-full"
            ></img>
          </div>
        </div>
        <div className="stats-container flex gap-x-14 flex-wrap gap-y-4 items-center">
          <div className="bg-lightgreen w-64 p-8 rounded-xl">
            <div className="flex justify-end w-full">
              <img src={revenue} className="hidden"></img>
              <img src={revenue}></img>
            </div>
            <div>
              <p className="font-lato font-semibold mb-2">Total Revenue</p>
              <p className="font-sans text-2xl ">$2,129,430</p>
            </div>
          </div>
          <div className="bg-lightorange w-64 p-8 rounded-xl">
            <div className="flex justify-end w-full">
              <img src={revenue} className="hidden"></img>
              <BsTags className="text-2xl " />
            </div>
            <div>
              <p className="font-lato font-semibold mb-2">Total Transactions</p>
              <p className="font-sans text-2xl ">1520</p>
            </div>
          </div>
          <div className="bg-lightred w-64 p-8 rounded-xl">
            <div className="flex justify-end w-full">
              <img src={revenue} className="hidden"></img>
              <AiOutlineLike className="text-2xl " />
            </div>
            <div>
              <p className="font-lato font-semibold mb-2">Total Likes</p>
              <p className="font-sans text-2xl ">9,721</p>
            </div>
          </div>{" "}
          <div className="bg-lightviolet w-64 p-8 rounded-xl">
            <div className="flex justify-end w-full">
              <img src={revenue} className="hidden"></img>
              <PiUsersBold className="text-2xl " />
            </div>
            <div>
              <p className="font-lato font-semibold mb-2">Total Users</p>
              <p className="font-sans text-2xl ">892</p>
            </div>
          </div>
        </div>
        <div className="third-row-container flex flex-wrap mt-10">
          <div className="schedule-container flex flex-col bg-white p-8 rounded-xl">
            <div className="flex justify-between font-mont mb-4">
              <h3 className="text-xl font-bold">Today's schedule</h3>
              <h5 className="text-grey2">See All &gt;</h5>
            </div>

            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-4 font-lato">
                <div className="w-2 bg-green"></div>
                <div className="flex flex-col gap-y-1">
                  <h3 className="font-bold text-grey1 font-lato">
                    Meeting with suppliers from Kuta Bali
                  </h3>
                  <p className="text-grey2">14:00-15:00</p>
                  <p className="text-grey2">at Sunset Road,Kuta ,Bali</p>
                </div>
              </div>

              <div className="flex gap-x-4 font-lato">
                <div className="w-2 bg-violet"></div>
                <div className="flex flex-col gap-y-1">
                  <h3 className="font-bold text-grey1 font-lato">
                    Check operation at Giga Factory 1
                  </h3>
                  <p className="text-grey2">18.00-20.00</p>
                  <p className="text-grey2">at Central Jakarta </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
