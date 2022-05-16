import React, { useState, useRef, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import logo4 from '../pic/logo5.jpg';
import {RiLockPasswordLine} from 'react-icons/ri';
import {FaRegUser} from 'react-icons/fa';
import {Context} from '../context/usercontext';
import {updateUser as updateUserAction} from "../redux/userSlice"
import {useDispatch} from "react-redux"
import { Link } from "react-router-dom";
import {BiRegistered} from "react-icons/bi"


const Container = styled.div`
 
   display:flex;
   justify-content: center;
   align-items: center;
   font-family: cursive;
   background-color: #ab5d6c1f;
  .input-item-wapper{
  background-color: #cea3acb8;
  width: 350px;
  padding: 30px;
  margin: 10px;
  align-items: center;
   }
   .input-login{
     display:flex;
     border: 5px solid #b26f7da3;
   }
   .login-wapper{
     padding-top: 90px;
   }
   input{
  width: 80%;
  padding: 6px 10px;
  margin: 8px 0;
}
.input-item .button {
  border: none;
  color: white;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.input-item h1{
  font-size: 40px;
  border-bottom: 3px solid #ab5d6c;
  margin-bottom: 50px;
  padding: 13px 0;
  text-align: center;
} 
.input-item {
  width: 100%;
  overflow: hidden;
  font-size: 20px;
  padding: 8px 0;
  margin:4px 0;
  border-bottom: 1px solid #ab5d6c;
}
.input-item input{
  border:none;
  outline:none;
  background: none;
  font-size: 18px;
  float: right;
  margin:0 10px;
  padding-bottom: 12px;;
}
button{
  border: none;
  color: black;
  padding: 12px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 20px; 
  background-color: #ab5d6c5e;
}
.button-wapper button{
  margin-left: 35%;
  margin-top: 5%;
}

.pic img{
  margin-top:40%;
}
.register span{
  size:90px;
}


`;
const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const usernameRef = useRef(null);
  const userpasswordRef = useRef(null);
  const {updateUser} = useContext(Context);

  const handelPressusername = (e) => {
    console.log(e);
    if (e.code === "Enter") {
      userpasswordRef?.current.focus();
    }
  };
  const handelPressuserPassword = (e) => {
    if (e.code === "Enter") {
      handleLogin();
      usernameRef?.current.focus();
    }
  };
  // const handelsigin = (e) => {
  //   console.log('ok');
  //   axios({
  //     method: "POST",
  //     url: "http://167.71.226.245:3005/api/auth/login",
  //     data: {
  //       password: userPassword,
  //       userName,
  //       userRole: "ADMIN",
  //     },
  //   })
  //     .then((res) => 
  //     {
  //       // const { data: { name, token}} = res;
  //       console.log(res, 'response')
  //       // toast.success("Signed in as "+name);
  //       // localStorage.setItem("authToken",token);
  //   }
  //     )
  //     .catch((err) => {
  //       console.log(err, 'err');
  //       // toast.error("Signed in Failed!!");
  //     });
  // };
  
  // const handelsigin = async (e) => {
  //   try {
  //     const res = await axios({
  //           method: "POST",
  //           url: "http://167.71.226.245:3005/api/auth/login",
  //           data: {
  //             password: userPassword,
  //             userName,
  //             userRole: "ADMIN",
  //           },
  //         });
  //         navigate('/home');
  //   }catch(err) {
  //     console.log(err);
  //     toast.err(JSON.stringify(err));
  //   }
  // };

  const [vendors, setVendors] = useState([]);
  const navigate = useNavigate (); 
  const dispatch = useDispatch();

  const [userRole, setUserRole] = useState('ADMIN');

  const handleLogin =(e) =>{
    axios({
      method: "POST",
      url: "http://167.71.226.245:3005/api/auth/login",
      data: {
        password: userPassword,
        userName,
        userRole
      },
    })
      .then((res) => 
      {
        // const { data: { name, token}} = res;
        console.log(res, 'response')
        const { data } = res;
        updateUser(res.data);//user ko data leko
        dispatch(updateUserAction(res.data));//slice ko action dispatch garayko,redux ma store garayko
        setVendors(data);

        // navigate('/home');
        // toast.success("Signed in as "+userName);
        // localStorage.setItem("authToken",token);
    }
      )
      .catch((err) => {
        console.log(err, 'err');
        toast.error("Signed in Failed!!");
      });
  }

  const handleCheckRole = e => {
    console.log(e.target, e.target.checked);
    if(e.target.checked) {
      setUserRole('ADMIN')
    console.log(e.target, 'admin already');
  } else {
      setUserRole('VENDOR');
  }
  };

  return (
    <Container>

      <div className="login-wapper">
        <div className="register-wapper">
      <div className="register" title="Register">
      <Link to="/register1">
        <span><BiRegistered color="black" size={30}/></span>
      </Link>
      <Link to="/registerFormik">
        <span>register</span>
      </Link>

      </div>
      </div>
      <div className="input-login">
        <div className="pic">
        <img className="welcome-logo" src={logo4} alt="whaterver" />
        </div>
        <div className="input-item-wapper">
        <div className="input-item" title="User Name">
          <h1>Login</h1>
         <span> <FaRegUser color="black"/> </span>
          <input
            type="text"
            ref={usernameRef}
            onKeyPress={handelPressusername}
            value={userName}
            onChange={(a) => setUserName(a.target.value)}
            placeholder="User Name"
          />
        </div>
        <div className="input-item" title="Password">
        <span><RiLockPasswordLine color="black"/></span>
          <input
            type="password"
            ref={userpasswordRef}
            onKeyPress={handelPressuserPassword}
            value={userPassword}
            onChange={(a) => setUserPassword(a.target.value)}
            placeholder="password"
          />
        </div>
        <div className="input-item">
          <label htmlFor="role">

            <input id="role" type="checkbox" checked={userRole === 'ADMIN'} onChange={handleCheckRole}/>
            <span>as Admin</span>
          </label>
        </div>
        <div className="button-wapper">
          <button type="button" onClick={handleLogin}>
            {" "}
         Login{" "}
          </button>
          </div>
        </div>
        {vendors.map(v =>(
          <div key={v._id}>
            <span>{v.fullName}</span>
            <span>{v.email}</span>
            <span>{v.contact}</span>
            <span>{v.shopName}</span>
          </div>
        ))}
        <ToastContainer
          draggable
          pauseOnHover
          position="bottom-right"
          newestOnTop
          autoClose={9000}
        />
      </div>
      </div>
    </Container>
  );
};
export default LoginPage;
