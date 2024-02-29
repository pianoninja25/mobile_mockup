'use client'

import { useEffect, useState } from "react";
import { HiWifi } from "react-icons/hi2";
import { PiDevicesLight } from "react-icons/pi";
import { FaUsers, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { IoSpeedometerOutline } from "react-icons/io5"
import { BsRouter } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";


export default function Home() {

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      setGreeting('Good Morning,');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);



  return (
    <main className="min-h-screen bg-gradient-to-br from-emerald-100 to-[#32bcad]">

      {/* TOP */}
      <div className="text-center px-10 py-6">
          <div className="absolute flex justify-center items-center w-8 h-8 left-4 rounded-full bg-black text-white text-xl"><FaArrowLeft /></div>
          <h1>{greeting}</h1>
          <h1 className="font-ioh1">Welcome to wi-fi</h1>
      </div>
      
      {/* MIDDLE */}
      <div className="px-10 py-4">
        <div className="grid justify-center gap-4 w-full h-full text-center px-10 py-2 rounded-xl border-white border bg-gradient-to-t from-white/5 to-white/50">
          <div className="flex justify-center items-center gap-2">
            <HiWifi /> 
            <h1>zero cool is online</h1>
          </div>
          <div className="flex justify-evenly w-full">
            <div className="grid justify-center min-w-36">
              <FaCheckCircle size={40} color="#32bcad" className="m-auto"/>
              <h1 className="font-ioh2 mt-4">ONLINE</h1>
              <h1 className="text-slate-600 text-sm">Status</h1>
            </div>
            <div className="grid justify-center min-w-36">
              <PiDevicesLight size={40} color="#32bcad" className="m-auto"/>
              <h1 className="font-ioh2 mt-4">3</h1>
              <h1 className="text-slate-600 text-sm">Device Connected</h1>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="min-h-80 py-8 px-2 my-4 rounded-t-3xl bg-slate-200">
        <div className="grid">

          <div className="flex justify-evenly gap-2 mx-4">
            <div className="grid items-center w-full h-[6rem] rounded-lg shadow-md bg-white">
              <div className="flex justify-evenly items-center">
                <div className="grid gap-1">
                  <h1 className="font-ioh1 text-slate-500 text-sm">WI-FI</h1>
                  <h1>zero cool</h1>
                </div>
                <div><HiWifi size={30} color="#32bcad"/></div>
              </div>
            </div>



            <div className="grid items-center w-full h-[6rem] rounded-lg shadow-md bg-white">
              <div className="flex justify-evenly items-center">
                <div className="grid gap-1">
                  <h1 className="font-ioh1 text-slate-500 text-sm">DEVICES</h1>
                  <h1>5 Connected</h1>
                </div>
                <div><PiDevicesLight size={30} color="#32bcad"/></div>
              </div>
            </div>
          </div>


          {/* 2 */}
          <div className="grid my-4 mx-4 py-2 px-4 rounded-lg shadow-md bg-white ">
            <h1 className="font-ioh1 text-slate-500 text-sm mb-4">PAUSE WIFI ACCESS</h1>
            <div className="flex justify-between p-2">
              <h1>All Devices </h1>
              <IoIosArrowForward />
            </div>
            <div className="flex justify-between p-2">
              <h1>Selected Devices</h1>
              <IoIosArrowForward />
            </div>
          </div>
          
          


          {/* 3 */}
          <div className="flex justify-evenly gap-2 mx-4">
            <div className="grid items-center w-full h-[6rem] rounded-lg shadow-md bg-white">
              <div className="flex justify-evenly items-center">
                <div className="grid gap-1">
                  <h1 className="font-ioh1 text-slate-500 text-sm">GUESTS</h1>
                  <h1>2 Users</h1>
                </div>
                <div><FaUsers size={30} color="#32bcad"/></div>
              </div>
            </div>



            <div className="grid items-center w-full h-[6rem] rounded-lg shadow-md bg-white">
              <div className="flex justify-evenly items-center">
                <div className="grid gap-1">
                  <h1 className="font-ioh1 text-slate-500 text-sm">SPEED</h1>
                  <h1>50 Mbps</h1>
                </div>
                <div><IoSpeedometerOutline size={30} color="#32bcad"/></div>
              </div>
            </div>
          </div>


          {/* 4 */}
          <div className="flex justify-evenly gap-2 m-4 ">
            <div className="grid items-center w-full h-[6rem] rounded-lg shadow-md bg-white">
              <div className="flex justify-around ">
                <h1 className="font-ioh1 text-slate-500 text-sm">WI-FI COVERAGE</h1>
                <BsRouter size={30} color="#32bcad"/>

              </div>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  );
}
