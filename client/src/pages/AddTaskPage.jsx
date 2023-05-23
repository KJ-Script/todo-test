import React, { useState } from "react";
import axios from "axios";

function AddTaskPage() {
  const [isEmpty, setIsEmpty] = useState(false);
  const [taskAdded, setTaskAdded] = useState(false);
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("Incomplete");

  const taskData = {
    task,
    status,
  };

  const checkLength = () => {
    if (task.length > 0) {
      console.log(task.length);
      submitTask();
    } else {
      setIsEmpty(true)
      console.log(task.length);
    }
  };

  const submitTask = () => {
    axios
      .post("http://localhost:8080/addTask", taskData)
      .then((response) => {
        console.log(response.data);
        setTaskAdded(true);
        setIsEmpty(false)
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <div className="w-[75%] flex mx-[5%] my-[5%]">
      {taskAdded ? (
        <div className="w-full text-white">
          <h2 className="text-2xl"> Task successfully added!</h2>
          <button
            className="bg-blue-600 text-white px-5 py-2"
            onClick={() => {
              setTaskAdded(false);
            }}
          >
            Go Back
          </button>
        </div>
      ) : (
        <form className="w-full space-x-3">
          <input
            type="text"
            placeholder="task"
            className="w-[60%] p-2"
            onChange={(e) => {
              setTask(e.target.value);
            }}
            required
          />
          <button
            type="button"
            className="bg-blue-600 text-white px-5 py-2"
            onClick={() => {
              checkLength();
            }}
            >
            Add
          </button>
            {isEmpty ? (
              <p className="text-red-600">!This field cant be empty!</p>
            ) : (
              <></>
            )}
        </form>
      )}
    </div>
  );
}

export default AddTaskPage;
