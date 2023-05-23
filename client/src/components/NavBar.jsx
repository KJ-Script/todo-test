import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar({ tab, setTab }) {
    const navigate = useNavigate()
  return (
    <div className="w-[25%] flex flex-col my-[5%] h-screen">
      <button
        className={
          tab == 1
            ? `px-[2%] py-[1%] mx-[2%] my-[1%] bg-white`
            : `px-[2%] py-[1%] mx-[2%] my-[1%] bg-slate-400`
        }
        onClick={() => {
          setTab(1)
          navigate('/tutorial')
        }}
      >
        Tutorial
      </button>
      <button
        className={
          tab == 2
            ? `px-[2%] py-[1%] mx-[2%] my-[1%] bg-white`
            : `px-[2%] py-[1%] mx-[2%] my-[1%] bg-slate-400`
        }
        onClick={() => {
          setTab(2)
          navigate('/')
        }}
      >
        Tasks
      </button>
      <button
        className={
          tab == 3
            ? `px-[2%] py-[1%] mx-[2%] my-[1%] bg-white`
            : `px-[2%] py-[1%] mx-[2%] my-[1%] bg-slate-400`
        }
        onClick={() => {
          setTab(3)
          navigate('/add')
        }}
      >
        Add Tasks
      </button>
    </div>
  );
}

export default NavBar;
