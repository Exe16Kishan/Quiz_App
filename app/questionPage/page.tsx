"use client";

import React, { useEffect, useState } from "react";

// we can give types
type questionFormat = {
  id: number;
  que: string;
  ans: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correct: string;
};

const que: questionFormat[] = [
  {
    id: 1,
    que: " what is ur name ?",
    ans: {
      a: "Kishan",
      b: "kamal",
      c: "abhisek",
      d: "bawa",
    },

    correct: "a",
  },
  {
    id: 2,
    que: " friend ?",
    ans: {
      a: "Kishan",
      b: "kamal",
      c: "abhisek",
      d: "bawa",
    },
    correct: "b",
  },
  {
    id: 3,
    que: " what is ur color ?",
    ans: {
      a: "Kishan",
      b: "kallu",
      c: "abhisek",
      d: "bawa",
    },
    correct: "b",
  },
  {
    id: 4,
    que: " what is ur alternative name ?",
    ans: {
      a: "Kishan",
      b: "kamal",
      c: "abhisek",
      d: "bawa",
    },
    correct: "d",
  },
];

function page() {
  const [current, setcurrent] = useState(0);
  // for total marks 
  const [total, settotal] = useState(0);

  // handler to sum the answer
  const AnswerHandler = (key: string) => {
    // for correct answer plus 1
    if (key === que[current].correct) {
      settotal((prev) => prev + 1);
    }
  };
  console.log("total :" + total);

  const nextClick = () => {
    if (current < que.length - 1) {
      setcurrent(current + 1);
    } else {
      setcurrent(0)
      alert(total)
      settotal(0)
    };
  };
  return (
    <div className=" flex justify-center items-center h-screen ">
      <div className=" bg-white h-[36rem] w-[36rem]">
        <h1 className=" text-black text-3xl">Quiz Application</h1>
        <hr className=" border-2 border-red-600" />

        <Question que={que[current]} answerClick={AnswerHandler} />

        {/* buttons to change the questions */}
        <button className=" bg-slate-400 p-2 rounded-md " onClick={nextClick}>
          next
        </button>
      </div>
      <h1 className=" text-black"> {`total marks are -: ${total}`}</h1>
    </div>
  );
}

export default page;

interface Question {
  que: questionFormat;
  answerClick: (key: string) => void;
}

function Question({ que, answerClick }: any) {
  const [answerSelected, setanswerSelected] = useState<string | null>(null);

  const AnswerHandler = (key: string) => {
    answerClick(key);
    setanswerSelected(key);
  };
  useEffect(() => {
    setanswerSelected(null);
  }, [que.id]);

  return (
    <div className=" text-black">
      {que.que}
      <br />

      {Object.entries(que.ans).map(([key, value]) => (
        <div
          key={key}
          onClick={() => AnswerHandler(key)}
          className={`${
            answerSelected === key ? "bg-slate-300" : ""
          } cursor-pointer mb-1 hover:bg-slate-300`}
        >{`${key} : ${value}`}</div>
      ))}
    </div>
  );
}


// comment down what else we can add 
// will add those functionality later ...