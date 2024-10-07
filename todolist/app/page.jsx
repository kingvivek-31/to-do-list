"use client";

import React from "react";
import { useState } from "react";

const page = () => {
  const [task, settask] = useState("");
  const [des, setdes] = useState("");
  const [tlist, settlist] = useState([]);
  const subhandler = (e) => {
    e.preventDefault();
    settask("");
    setdes("");
    console.log("submited");
  };
  let rendertask = <h2>no task available.....</h2>;

  if (tlist.lenght > 0) {
    rendertask = tlist.map((u, i) => {
      return (
        <li>
          <div>
            <h3>{u.task}</h3>
            <h5>{u.des}</h5>
          </div>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-8 text-4xl text-center font-bold rounded">
        Vivek,s To Do List
      </h1>
      <form action="" onSubmit={subhandler}>
        <input
          type="text"
          className="text-2xl border-5 border-black py-4 px-8 m-6"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => {
            settask(e.target.value);
          }}
        />
        <input
          type="text"
          className="text-2xl border-5 border-black py-4 px-8 m-6"
          placeholder="Enter your Description"
          value={des}
          onChange={(e) => {
            setdes(e.target.value);
          }}
        />
        <button className="bg-slate-900 p-4 text-white m-5">Add Task</button>
      </form>
      <div className="bg-slate-600">{rendertask}</div>
    </>
  );
};

export default page;
