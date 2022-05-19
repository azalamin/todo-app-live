import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { toast } from "react-toastify";
import Task from "./Task";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [fetchData, setFetchData] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/task")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, [fetchData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskName = event.target.name.value;
    const description = event.target.description.value;
    const task = { taskName, description, isCompleted: false };
    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          toast.success("Task added");
          setFetchData(data);
          event.target.reset();
        } else {
          toast.error("Failed to add task");
        }
      });
  };
  
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 p-3">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Task Name</Form.Label>
              <Form.Control
                required
                name="name"
                type="text"
                placeholder="Task Name"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Task Description</Form.Label>
              <Form.Control
                placeholder="Description"
                as="textarea"
                rows={3}
                name="description"
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Form>
        </div>
        <div className="col-md-6 p-3">
          {tasks.map((task) => (
            <Task
              setFetchData={setFetchData}
              key={task?._id}
              task={task}
            ></Task>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
