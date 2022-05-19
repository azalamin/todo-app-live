import React from "react";
import { toast } from "react-toastify";

const Task = ({ task, setFetchData }) => {
  const handleCompleted = () => {
    fetch(`https://todo-app360.herokuapp.com/task/${task?._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFetchData(data);
        toast.success("Task Completed");
      });
  };

  const handleDelete = () => {
    fetch(`https://todo-app360.herokuapp.com/task/${task?._id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFetchData(data);
        toast.success("Task Deleted Successfully");
      });
  };
  return (
    <div className="card mb-4">
      <div className="card-body text-center">
        <h4 className={task?.isCompleted ? "text-decoration-line-through" : ""}>
          {task?.taskName}
        </h4>
        <p className={task?.isCompleted ? "text-decoration-line-through" : ""}>
          {task?.description}
        </p>
        <div className="text-center">
          <button onClick={handleCompleted} className="btn btn-success me-3">
            Completed
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
