import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGridDemo } from "./components/layout-grid-demo";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col max-w-screen-2xl w-full lg:flex">
        <div className="w-8/12 space-y-4">
          <Avatar>
            <AvatarImage src="https://lh3.googleusercontent.com/pw/AP1GczNC5sObUVEWU13t98KTFUd_xeZVANR3XRmyFuG3-vATAS7Pq22lUdoxDKqMWG_4afkUnmBeZ22E56jvM0K8lpvS765rjiFyG9FrNWA9uG-E6_bsLjGJymem9BZqrJFBGQt-1UC9teEmGmxww7JbaIST=w771-h1202-s-no-gm" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>

          <div className="flex flex-row text-lg md:text-xl pt-3">
            <div className="font-light dark:text-white">Johnny Luong</div>
            <div className="px-4 font-extralight italic text-slate-500 dark:text-white">
              @johnnyluong_
            </div>
          </div>

          <p className="text-2xl md:text-4xl font-extralight text-gray-900">
            Capturing reality through an optimistic lens. Probably coding,
            color grading, or eating snacks.
          </p>

          <div className="flex flex-row space-x-5 pt-6">
            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3bf2f5_0%,#393BB2_50%,#3bf2f5_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-light text-black backdrop-blur-3xl">
                Instagram
              </span>
            </button>
            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3bf2f5_0%,#393BB2_50%,#3bf2f5_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-light text-black backdrop-blur-3xl">
                Shop
              </span>
            </button>
            <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#3bf2f5_0%,#393BB2_50%,#3bf2f5_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-light text-black backdrop-blur-3xl">
                Prints & Merch
              </span>
            </button>
          </div>

          <div className="flex flex-row space-x-3">
            <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-6 py-2 bg-[#fff] text-sm text-black rounded-full font-light transition duration-200 ease-linear">
              #highlights
            </button>
            <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-6 py-2 bg-[#fff] text-sm text-black rounded-full font-light transition duration-200 ease-linear">
              #people
            </button>
            <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-6 py-2 bg-[#fff] text-sm text-black rounded-full font-light transition duration-200 ease-linear">
              #places
            </button>
            <button className="shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] px-6 py-2 bg-[#fff] text-sm text-black rounded-full font-light transition duration-200 ease-linear">
              #things
            </button>

          </div>
        </div>
      </div>

      <div className="z-10 max-w-screen-2xl w-full items-center justify-between font-mono text-sm lg:flex">
        <LayoutGridDemo />
      </div>
    </main>
  );
}
