import React, { useEffect, useState } from "react";
import SingleTask from "../components/SingleTask";
import axios from "axios";

function TodoPage() {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/getdata').then((response) => {
      setTasks(response.data)
    }).catch((err)=>{
      console.log(err)
    })
  }, [])
  

  return (
    <div className="h-screen w-[75%] my-[5%] space-y-5">
      {
        tasks.map((item, index) => {
          return (
            <SingleTask data={item} key={index}/>

          )
        } )
      }
    </div>
  );
}

export default TodoPage;
