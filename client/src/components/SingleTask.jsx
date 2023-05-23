import React, { useState } from "react";
import axios from 'axios'

function SingleTask({data}) {
  const deleteTask = () => {
      axios.post('http://localhost:8080/deletedata', {
        id: data.id
      }).then((response) => {
        console.log(response)
        if(response.status == 200) {
          alert('Task Deleted')
          location.reload()
        }
      }).catch((err)=>{
        console.log(err)
      })
  }

  const taskCompleted = () => {
    axios.post('http://localhost:8080/updatestatus', {
      id: data.id
    }).then((response) => {
      console.log(response)
      if(response.status == 200) {
        location.reload()
      }
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="w-[75%] flex mx-[5%] space-x-2">
      <div className="w-[90%] h-[5%] bg-white shadow-sm px-5 py-4 flex space-x-11">
        <p>{data.task}</p>
        {data.status === 'completed' ? (
          <p className="bg-green-600 text-white px-5">Completed</p>
        ) : (
          <p className="bg-red-600 text-white px-5">Incomplete</p>
        )}
      </div>
      
      {/* <button className="p-4 bg-blue-400 h-[5%] shadow-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
          />
        </svg>
      </button> */}

      <button className="p-4 bg-red-600 h-[5%] shadow-sm" onClick={() => {deleteTask()}}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
          />
        </svg>
      </button>

      <button
        className="p-4 bg-green-600 h-[5%] shadow-sm"
        onClick={() => {
          taskCompleted()
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="white"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}

export default SingleTask;
