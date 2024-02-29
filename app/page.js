'use client'

import { useEffect, useState } from "react";

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
          <div>🛜 zero cool is online</div>
          <div className="flex justify-between">
            <div>
              <div>LOGO</div>
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
          <div className="flex justify-evenly">
            <div className="w-[11rem] h-[6rem] rounded-lg bg-slate-100">
              LEFT
            </div>
            <div className="w-[11rem] h-[6rem] rounded-lg bg-slate-100">
              RIGHT
            </div>
          </div>
          <div className="bg-slate-100 my-4 mx-2">
            <div className="p-2">PAUSE WIFI ACCESS</div>
            <div className="p-2">ALL DEVICES</div>
            <div className="p-2">BOTTOM</div>
          </div>
          <div className="flex justify-evenly">
            <div className="w-[11rem] h-[6rem] rounded-lg bg-slate-100">
              GUESTS
            </div>
            <div className="w-[11rem] h-[6rem] rounded-lg bg-slate-100">
              WI-FI COVERAGE
            </div>
          </div>
          <div>4</div>
        </div>
      </div>
      
    </main>
  );
}
