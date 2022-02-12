import React, { useState, useEffect , useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import ContextAPI from "../context/contextAPI";

function Login() {
  const {handleLogin ,email, password , setEmail,setPassword} = useContext(ContextAPI); 
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('inquera-user'); 
    if(auth){
      navigate('/')
    }
}, [])
  return (
    <div className="hero min-h-screen bg-[#0e1e2c]">
      <div className="flex-col justify-center hero-content lg:flex-row">
        <div className="text-center lg:text-left  md:px-20 mx-11">
          <h1 className="mb-5 text-5xl font-bold text-[#FFE400] text-center">Welcome to Inquera</h1>
          <p className="mb-5 text-center">
          bcoz every question has an answer...
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#061229]">
          <form>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  placeholder="email"
                  className="input input-warning input-bordered bg-[#0e1e2c]"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  placeholder="password"
                  className="input input-warning input-bordered bg-[#0e1e2c]"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                <label className="label text-sky-600 text-sm ">
                  <a href="/" className="hover:text-yellow-200">
                    Forgot password?
                  </a>
                  <p className="hover:text-yellow-200 ">
                    <Link to="/signup">Signup</Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  value="Login"
                  onClick={handleLogin}
                  className="btn btn glass bg-[#04293A] active:loading"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
