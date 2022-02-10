import React, {useState} from 'react'
import './Login.css'
import Navbar from './navbar'
import Footer from './Footer'
import { useNavigate } from "react-router-dom";
import app from './firebase'
import 'firebase/compat/auth'


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) =>{
    event.preventDefault()
    app.auth().signInWithEmailAndPassword(email, password)
  }

    let navigate = useNavigate();
  // const [user, setUser] = useState({
  //   email:"",
  //   psw:"",
  // });

  // let name, value;
  // const getUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;
  
  //   setUser({...user, [name]: value})
  // }
  
  const adminlogin=()=>{
    if(email==='admin@admin.com' && password==='Admin'){
      
      navigate("/admin")
    }else{
      //firebase logic
    }
  }

    return (
        
            <>
            <div className='bg'>
            <Navbar/>
            <div className="login-page">
      <div className="form">
        <div className="login">
          <div className="login-header">
            <h3>LOGIN</h3>
            Please enter your credentials to log in
          </div>
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button onClick={adminlogin} className='btn btn-light'>login</button>
          {/* <p class="message">Not registered? <a href="#">Create an account</a></p> */}
          <p className="message"><a href='#'>Forgot Password?</a></p>
        </form>
      </div>
    </div>
    </div>
    <Footer/>
            </>
    
    )
}

export default Login
