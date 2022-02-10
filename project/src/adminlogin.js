import React from 'react';

const Adminlogin = () => {
  return (<>
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
<form className="login-form">
<input type="text" placeholder="username"/>
<input type="password" placeholder="password"/>
<button>login</button>
{/* <p class="message">Not registered? <a href="#">Create an account</a></p> */}
<p className="message"><a href='#'>Forgot Password?</a></p>
</form>
</div>
</div>
</div>
<Footer/>
  </>
  );
};

export default Adminlogin;
