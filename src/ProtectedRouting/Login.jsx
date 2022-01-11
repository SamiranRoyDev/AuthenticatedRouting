import React,{useState} from 'react'
import './Login.css';
import pic from '../image/picone.jpg';
import { useNavigate } from "react-router-dom";


const Login = (props) => {
  let navigate = useNavigate();
 const [name,setName] = useState("");
 const [password,setPassword] = useState("")

 const handleSubmit = (e)=>{
  props.parentCallback(true);
   e.preventDefault()
  

 }
    return (
        <>
            <section className="login py-5 bg-light">
        <div className="container">
          <div className="row g-0">
            <div className="col-5 col-md-5 col-sm-12 col-12">
              <img src={pic} className="img-fluid" alt="img not found"/>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 col-12 text-center py-5">
              <h2>Login</h2>
              <form action="">
                <div className="form-row py-4 pt-5">
                  <div className="offset-1 col-lg-10">
                    <input
                      className="inp"
                      type="text"
                      placeholder="Username"
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <input
                      className="inp"
                      type="password"
                      placeholder="Enter Password"
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form-row py-3">
                  <div className="offset-1 col-lg-10">
                    <button className="btn1" onClick={handleSubmit}>Submit</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default Login
