import React, { useState, useRef, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: cursive;
  background-color: #ab5d6c1f;
  input {
    width: 80%;
    padding: 6px 10px;
    margin: 8px 0;
  }
  .input-item {
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    padding: 8px 0;
    margin: 4px 0;
    border-bottom: 1px solid #ab5d6c;
  }
  .input-item input {
    border: none;
    outline: none;
    background: none;
    font-size: 18px;
    float: right;
    margin: 0 10px;
    padding-bottom: 12px;
  }
  .input-item h1 {
    font-size: 40px;
    border-bottom: 3px solid #ab5d6c;
    margin-bottom: 50px;
    padding: 13px 0;
    text-align: center;
  }
  button {
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
  .button-wapper button {
    margin-left: 35%;
    margin-top: 5%;
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
`;

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopContactNo, setShopContactNo] = useState("");
  const [shopEmail, setShopEmail] = useState("");
  const [shopVatNo, setShopVatNo] = useState("");
  const fullNameRef = useRef(null);
  const contactNoRef = useRef(null);
  const emailRef = useRef(null);
  const shopNameRef = useRef(null);
  const shopContactNoRef = useRef(null);
  const shopEmailRef = useRef(null);
  const shopVatNoRef = useRef(null);
  const handleFullName = (e) => {
    if (e.code === "Enter") {
      contactNoRef?.current.focus();
    }
  };
  const handleContactNo = (e) => {
    if (e.code === "Enter") {
      emailRef?.current.focus();
    }
  };
  const handleEmail = (e) => {
    if (e.code === "Enter") {
      shopNameRef?.current.focus();
    }
  };
  const handleShopName = (e) => {
    if (e.code === "Enter") {
      shopContactNoRef?.current.focus();
    }
  };
  const  handleShopContactNo = (e) => {
    if (e.code === "Enter") {
      shopEmailRef?.current.focus();
    }
  };
  const handleShopEmail= (e) => {
    if (e.code === "Enter") {
      shopVatNoRef?.current.focus();
    }
  };
  const handleShopVatNo = (e) => {
    if (e.code === "Enter") {
      handleRegister();
      fullNameRef?.current.focus();
    }
  };
  const handleRegister = (e) => {
    toast.success('Register completed')
  };

  return (
    <Container>
      <div className="form">
        <div className="input-item">
          <h1>Register</h1>
        </div>
        <div className="input-item">
          <input
            id="fullName"
            type="text"
            ref={fullNameRef}
            onKeyPress={handleFullName}
            placeholder="Full Name"
            value={fullName}
            onChange={(a) => setFullName(a.target.value)}
          />
        </div>
        <div className="input-item">
          <input
            id="contactNo"
            type="text"
            ref={contactNoRef}
            onKeyPress={ handleContactNo}
            placeholder="Contact"
            value={contactNo}
            onChange={(a) => setContactNo(a.target.value)}
          />
        </div>
        <div className="input-item">
          <input
            id="email"
            type="email"
            ref={emailRef}
            onKeyPress={ handleEmail}
            placeholder="Email"
            value={email}
            onChange={(a) => setEmail(a.target.value)}
          />
        </div>
        <div className="input-item">
          <input
            id="shopName"
            type="text"
            ref={shopNameRef}
            onKeyPress={ handleShopName}
            placeholder="Shop name"
            value={shopName}
            onChange={(a) => setShopName(a.target.value)}
          />
        </div>
        <div className="input-item">
          <input
            id="shopContactNo"
            type="text"
            ref={shopContactNoRef}
            onKeyPress={ handleShopContactNo}
            placeholder="Shop Contact Number"
            value={shopContactNo}
            onChange={(a) => setShopContactNo(a.target.value)}
          />
        </div>
        <div className="input-item">
          <input
            id="shopEmail"
            type="email"
            ref={shopEmailRef}
            onKeyPress={ handleShopEmail}
            placeholder="Shop Email"
            value={shopEmail}
            onChange={(a) => setShopEmail(a.target.value)}
          />
        </div>
        <div className="input-item">
          <input
            id="shopVatNo"
            type="text"
            ref={shopVatNoRef}
            onKeyPress={ handleShopVatNo}
            placeholder="Shop VAT ID"
            value={shopVatNo}
            onChange={(a) => setShopVatNo(a.target.value)}
          />
        </div>
        <div className="button-wapper">
          <button type="button" onClick={handleRegister}>Register</button>
        </div>
        <ToastContainer
          draggable
          pauseOnHover
          position="bottom-right"
          newestOnTop
          autoClose={9000}
        />
      </div>
    </Container>
  );
};

export default Register;
