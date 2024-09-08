"use client";

import React, { useEffect, useState } from "react";

const que = [
  {
    id: 1,
    que: " what is ur name ?",
    ans: {
        a :"Kishan",
        b :"kamal",
        c : "abhisek",
        d : "bawa" 
    },
    correct : "kishan"
  },
  {
    id: 2,
    que: " friend ?",
    ans: {
        a :"Kishan",
        b :"kamal",
        c : "abhisek",
        d : "bawa" 
    },
    correct : "kamal"

  },
  {
    id: 3,
    que: " what is ur color ?",
    ans: {
        a :"Kishan",
        b :"kamal",
        c : "abhisek",
        d : "bawa" 
    },
    correct : "kallu"

  },
  {
    id: 4,
    que: " what is ur alternative name ?",
    ans: {
        a :"Kishan",
        b :"kamal",
        c : "abhisek",
        d : "bawa" 
    },
    correct : "bawa"

  },
];

function page() {
  const [current, setcurrent] = useState(0);
  const nextClick = () => {
    if (current != que.length - 1) {
      setcurrent(current + 1);
    } else setcurrent(0);
  };
  console.log(que.length);
  return (
    <div className=" flex justify-center items-center h-screen ">
      <div className=" bg-white h-[36rem] w-[36rem]">
        <h1 className=" text-black text-3xl">Quiz Application</h1>
        <hr className=" border-2 border-red-600" />

        <Question que={que} current={current} />

        {/* buttons to change the questions */}
        <button className=" bg-slate-600 p-2 rounded-md " onClick={nextClick}>
          next
        </button>
      </div>
    </div>
  );
}

export default page;

function Question({ que, current }: any) {
  return (
    <div className=" text-black">
      {que[current].que}
      <br />
      a: {que[current].ans.a}
      <br />
      b: {que[current].ans.b}
      <br />
      c: {que[current].ans.c}
      <br />
      d: {que[current].ans.d}
      {/* {
        que[current].ans.map((i)=><div>{console.log(i)}</div>)
      } */}
    </div>
  );
}
