'use client'

import { useEffect, useState } from "react";
import { HiWifi } from "react-icons/hi2";
import { PiDevicesLight } from "react-icons/pi";
import { GiWifiRouter } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";

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
    <main className="bg-[#32bcad] min-h-screen">

      {/* TOP */}
      <div className="text-center px-10 py-6">
          <div className="absolute flex justify-center items-center w-8 h-8 left-4 rounded-full bg-black text-white text-xl">&#129120;</div>
          <h1>{greeting}</h1>
          <h1 className="font-ioh1">Welcome to wi-fi</h1>
      </div>

      {/* MIDDLE */}
      <div className="px-10 py-4">
        <div className="grid justify-center gap-6 w-full h-full text-center px-10 py-2 rounded-xl border-white border bg-gradient-to-t from-transparent to-white/50">
          <div className="flex items-center gap-2"><HiWifi /> zero cool is online</div>
          <div className="flex justify-between">
            <div>
              <div><HiWifi /></div>
              <div>ONLINE</div>
              <div>STATUS</div>
            </div>
            <div>
              <div>LOGO</div>
              <div>3</div>
              <div>DEVICE</div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="py-8 px-2 my-4 rounded-t-3xl bg-slate-200 min-h-80">
        <div className="grid">

          <div className="flex justify-evenly gap-2 mx-4">
            <div className="grid items-center w-full h-[6rem] rounded-lg bg-slate-100">
              <div className="flex justify-evenly items-center">
                <div className="grid gap-1">
                  <h1 className="font-ioh1 text-slate-500 text-sm">WI-FI</h1>
                  <h1>zero cool</h1>
                </div>
                <div><HiWifi size={30} color="#32bcad"/></div>
              </div>
            </div>



            <div className="grid items-center w-full h-[6rem] rounded-lg bg-slate-100">
              <div className="flex justify-evenly items-center">
                <div className="grid gap-1">
                  <h1 className="font-ioh1 text-slate-500 text-sm">DEVICES</h1>
                  <h1>5 Connected</h1>
                </div>
                <div><PiDevicesLight size={30} color="#32bcad"/></div>
              </div>
            </div>
          </div>


          <div className="bg-slate-100 my-4 mx-4 py-2">
            <h1 className="font-ioh1 text-slate-500 text-sm">PAUSE WIFI ACCESS</h1>
            <div className="p-2">ALL DEVICES</div>
            <div className="p-2">BOTTOM</div>
          </div>
          
          


          {/* 3 */}
          <div className="flex justify-evenly gap-2 mx-4">
            <div className="grid items-center w-full h-[6rem] rounded-lg bg-slate-100">
              <div className="flex justify-evenly items-center">
                <div className="grid gap-1">
                  <h1 className="font-ioh1 text-slate-500 text-sm">WI-FI</h1>
                  <h1>zero cool</h1>
                </div>
                <div><FaUsers size={30} color="#32bcad"/></div>
              </div>
            </div>



            <div className="grid items-center w-full h-[6rem] rounded-lg bg-slate-100">
              <div className="flex justify-evenly items-center">
                <div className="grid gap-1">
                  <h1 className="font-ioh1 text-slate-500 text-sm">DEVICES</h1>
                  <h1>5 Connected</h1>
                </div>
                <div><PiDevicesLight size={30} color="#32bcad"/></div>
              </div>
            </div>
          </div>


          {/* 4 */}
          <div>4</div>
        </div>
      </div>
      
    </main>
  );
}
