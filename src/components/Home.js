import React from "react";
import { Button, Form } from "react-bootstrap";

const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const taskName = event.target.name.value;
    const description = event.target.description.value;
    const task = { taskName, description };
    fetch("http://localhost:5000/task", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
          <div className="card">
            <div className="card-body">
              <h4>Task Name: Hello</h4>
              <p>Description: </p>
              <div className="text-center">
                <button className="btn btn-success me-3">Completed</button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
