import React, { useState } from "react";
import "./Signup.css";
import { Link, NavLink } from "react-router-dom";
import "./Login.js";
import Navbar from "./navbar";
import Footer from "./Footer";
import app from "./firebase";
import 'firebase/compat/auth'

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    app.auth().createUserWithEmailAndPassword(email, password)
  }


  //   const [user, setUser] = useState({
  //     fname:"",
  //     lname:"",
  //     email:"",
  //     eid:"",
  //     dept:"",
  //     mno:"",
  //     psw:"",
  //     pswconfirm:""
  //   });

  //   let name, value;
  // const getUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;

  //   setUser({...user, [name]: value})
  // }

  // const postData = async(e) => {
  //   e.preventDefault();

  //   const {fname, lname, email, eid, dept, mno, psw, pswconfirm} = user;

  //   const res = await fetch("https://company-event-management-default-rtdb.firebaseio.com/companyeventmanagement.json",
  //   {
  //     method:'POST',
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       fname,
  //       lname,
  //       email,
  //       eid,
  //       dept,
  //       mno,
  //       psw,
  //       pswconfirm
  //     }),
  //   }
  //   );
  // };

  return (
    <>
      <div className="bg">
        <Navbar />
        <form method="POST" onSubmit={handleSubmit}>
          <div className="container1">
            <h1 className="h1Style">Sign up</h1>
            <div className="horizontal rule">
              <label>
                <b>First Name</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter First Name"
                // value={user.fname}
                // onChange={getUserData}
                name="fname"
                id="fname"
                required
              />

              <label>
                <b>Last Name</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter Last Name"
                // value={user.lname}
                // onChange={getUserData}
                name="lname"
                id="lname"
                required
              />

              <label>
                <b>Email</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter Email"
                // value={user.email}
                // onChange={getUserData}
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label>
                <b>Employee Id</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter Employee Id"
                // value={user.eid}
                // onChange={getUserData}
                name="eid"
                id="eid"
                required
              />

              <label>
                <b>Department</b>
              </label>
              <input
                className="input1"
                type="text"
                placeholder="Enter Department"
                // value={user.dept}
                // onChange={getUserData}
                name="dept"
                id="dept"
                required
              />

              <label>
                <b>Mobile Number</b>
              </label>
              <input
                className="input1"
                type="tel"
                placeholder="Enter Mobile no."
                // value={user.mno}
                // onChange={getUserData}
                name="mno"
                id="mno"
                required
              />

              <label>
                <b>Password</b>
              </label>
              <input
                className="input1"
                type="password"
                placeholder="Enter Password"
                // value={user.psw}
                // onChange={getUserData}
                name="psw"
                id="psw"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <label>
                <b>Confirm Password</b>
              </label>
              <input
                className="input1"
                type="password"
                placeholder="Confirm Password"
                // value={user.pswconfirm}
                // onChange={getUserData}
                name="pswconfirm"
                id="pswconfirm"
                required
              />
            </div>
            <button type="submit" className="registerbtn">
              Submit
            </button>
            <div className="signin">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
