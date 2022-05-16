import React, { useContext, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { PAGES } from "../constants";
import {  useLocation } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";
import {Context} from '../context/usercontext';
import {logout as userLogout} from "../redux/userSlice"
import {useDispatch} from "react-redux"

const Container = styled.div`
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 269px;
    background-color:#d1aebe;
    padding: 10px 20px;
    .account-options-container{
      position:relative;
      .option{
        position: absolute;
        top:30px;
        width:100px;
        right:10px;
        background-color: #fff;
        box-shadow: 2px 5px #3c3c3c;
        transition: all 0.5s;
        ul{
          li{
            list-style: none;
            border-bottom:1px solid #3c3c3c;
            margin-bottom: 2px;
            cursor: pointer;
            button{
              border:none;
            }
          }
        }
      }
    }
    .p-name {
      h1 {
        font-size: 1.5rem;
        text-transform: uppercase;
        color: #000;
      }
    }
    .account {
      .notification-icon {
        margin: 0 15px 0 0;
      }
      .account-icon {
      }
      .menu-icons {
        color: #3c3c3c;
        font-size: 1.5rem;
        cursor: pointer;
        /* &:hover{
          background-color: rgba(0, 0, 0, 0.2);
          padding: 5px;
          border-radius: 5px;
        } */
      }
    }
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 250px;
    background-color: #F3F3F3;
    padding: 20px 0;
    border-right: 1px solid #3c3c3c57;
    .logo {
      display: flex;
      justify-content: center;
      margin: 0 0 15px 0;
      a {
        font-size: 2rem;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
        .aa {
          color: #0465d2;
        }
        .mit {
          color: #f7ba01;
        }
      }
    }
    .nav {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      ul {
        li {
          list-style: none;
          margin: 10px 0;
          a {
            display: flex;
            align-items: center;
            font-size: 1rem;
            color: #3c3c3c;
            text-decoration: none;
            text-transform: capitalize;
            padding: 10px 20px;
            transition: all 0.2s;

            &:hover {
              color: #f7ba01;
            }
            .nav-icons {
              font-size: 1.5rem;
              margin: 0 10px 0 0;
            }
          }
          .active {
            color: #f7ba01;
          }
        }
      }
    }
  }
`;

// Tippy(".notification-icon", {
//   content: "Notification",
// });
// Tippy(".account-icon", {
//   content: "Account",
// });
const Sidebar = () => {
  const a = useLocation();
  console.log(a.pathname.split('/'), 'check path');
  const paths = a.pathname.split('/');
  const length = paths.length;
  const currentPath = paths[length - 1];
  console.log(currentPath, 'check path');
  const [showAccountOptions,setShowAccountOptions]=useState(false);
  const navigate = useNavigate (); 
  const dispatch = useDispatch();
  const {logout} = useContext(Context);
   const handelLogout =() =>{
    setShowAccountOptions(!showAccountOptions);
   
  }
  const handelLogOut =() =>{
    dispatch(userLogout());
    navigate("/");
  }
  return (
    <Container>
      <div className="menu">
        <div className="p-name">
          <h1>{currentPath}</h1>
        </div>
        <div className="account">
          <MdNotificationsActive className="notification-icon menu-icons" />
          <div className="account-options-container">
          <BsPersonCircle className="account-icon menu-icons" onClick={handelLogout} />
         { showAccountOptions ? <div className="option">
          <div>
            <ul>
            <li><button>Profile</button></li>
            <li><button onClick={handelLogOut}>LogOut</button></li>
            </ul>
            </div>
          </div>: null}
          <div/>
        </div>
      </div>
      </div>
    
    </Container>
  );
};

export default Sidebar;
