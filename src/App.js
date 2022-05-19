import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import RequireAuth from "./RequireAuth";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home></Home>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
