"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House in the woods</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A serene and tranquil retreat, this house in the woods offers a peaceful
        escape from the hustle and bustle of city life.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">House above the clouds</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Greens all over</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Rivers are serene</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-3",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AP1GczNNHxOd_PZW0MuK50y1kt3Em2pklHkMp5a0U0dLmjpO1-XBDmg9sg3p25dmvd6ivjq26o47NuB30u0R95piRemZPFFn0ZODEXOYkbwMdW_tvg6zwTa4qkGa-S8cNPEAcWJcrGCuarIf6NXD9bPJdkFH=w1410-h2115-s-no-gm?authuser=0",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-2",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AP1GczPcV2cyJeDTTe_eGSPSudLci0H9zbYixA1OFy1UqN3gOqQmzCRk42GvhJJ3q3QwlbARyq1fq0Uz95kq0gEkrsuegoUDn9whQVVM7o9vo6VmWqdnZXR6ssNUk90a2GG16s2KArwN8wFX9wBJ6HtpfUbG=w1279-h2115-s-no-gm?authuser=0",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-2",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AP1GczPBD1_p8BJCK4G9uMyiCyk0yt3GmXRGIQnSjQEJBjXLAa_COlUs4Mnbg4byiu1LBNfxIB4pBLYSxeYVktfiIGONsgEho4RjMB1KeKnZc5lnEtVmq_zt58snWQiJcgCz2iBwrcNLyTQ86zLtoLWQn2PC=w1415-h2083-s-no-gm?authuser=0",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-3",
    thumbnail:
      "https://lh3.googleusercontent.com/pw/AP1GczMARZJ9wMDpMnkWl2iMv5d47nDSfLFeojtTnImMcPCQR2ParZNXesHhR4pfbFhHSsmc1K-H_UNcXzCuU2YdACEW-QFI-nM22GZhrzemH9AlhuoKMGKjPpbm0ABWwENpK_InCguyRfALM-ZvPExijp5H=w1374-h2115-s-no-gm?authuser=0",
  },
];
