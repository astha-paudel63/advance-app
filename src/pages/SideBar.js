import React from "react";
import { AiOutlineMenu, AiOutlineRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import { AiOutlineRightCircle } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import { RiDashboardLine } from "react-icons/ri";
import { MdOutlineSell } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BiArrowFromTop } from "react-icons/bi";
import { BiArrowToTop } from "react-icons/bi";
import NavBar from "./NavBar";
import { Context } from "../context/usercontext";
import { useState, useRef, useContext } from "react";
import { ADMIN_PAGES, PAGES, VENDOR_PAGES } from "../constants";
import { useSelector } from "react-redux";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: ${(props) => (props.expanded ? "20%" : "10%")};
  /* height: ${(props) => (props.stretch ? "20%" : "10%")}; */
  .link {
    text-decoration: none;
    margin: 10px 0;
    display: flex;
    padding: 5px;
    align-items: center;
    span {
      margin-left: 10px;
      color: #000000;
    }
    &:hover {
      background-color: #00000023;
    }
  }
  .active {
    color: #ffffff;
    &:hover {
      background-color: #008a9854;
    }
  }
  #side-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .sidebar {
    background-color: ${ props => props.isAdmin ? '#9f56777a': '#7a4e55a3'};
    height: 100vh;
  }
  .side-item {
    padding-top: 50px;
  }
  #side-header h3 {
    font-family: cursive;
    padding-right: 3px;
  }
  .side-item .link {
    padding-left: 50px;
  }
  .line-right {
    padding-left: 50px;
    padding-top: 25px;
  }
`;

const SideBar = ({ expanded, onClickBurgerMenu, stretch, onClickupDown }) => {
  const location = useLocation();
  console.log(location, expanded, "check location");
  const { user } = useSelector(state => state.auth);

  return (
    <Container expanded={expanded} isAdmin={user.isAdmin}>
      <NavBar />
      <div className="sidebar">
        <div id="side-header">
          {expanded && <h3>Anime Store</h3>}
          {expanded ? (
            <AiOutlineMenu
              size={25}
              color={"black"}
              onClick={(e) => onClickBurgerMenu(!expanded)}
            />
          ) : (
            <div className="line-right">
              <AiOutlineRightCircle
                size={30}
                color={"black"}
                onClick={(e) => onClickBurgerMenu(!expanded)}
              />
            </div>
          )}
        </div>
        <div className="side-item">
          {/* <NavLink className="link" to="/home" title="Back Home">
           <FaHome color={"black"} size={expanded ? 20: 30} /> {expanded && <span>Home</span>}
        </NavLink> */}

          {/* <div id="side-down">
            {expanded && <h3>Products Verification</h3>}
            {stretch ? (
              <BiArrowFromTop
                size={25}
                color={"black"}
                onClick={(e) => onClickupDown(!stretch)}
              />
            ) : (
              <div className="line-right">
                <BiArrowToTop
                  size={30}
                  color={"black"}
                  onClick={(e) => onClickupDown(!stretch)}
                />
              </div>
            )}
            <NavLink className="link" to="vendor" title="Vendor">
              <MdOutlineSell color={"black"} size={stretch ? 20 : 30} />
              {expanded&& <span>Vendor</span>}
            </NavLink>
            <NavLink
              className="link"
              to="products"
              title="Products"
            >
              <MdOutlineProductionQuantityLimits
                color={"black"}
                size={stretch ? 20 : 30}
              />
              {expanded && <span>Products</span>}
            </NavLink>
          </div> */}
          {(user.isAdmin ? ADMIN_PAGES : VENDOR_PAGES).map(a => (
            <NavLink className="link" to={a.path} title={a.title}>
              {a.icons({ size: expanded ? 20 : 30, color: 'black' })}
            {/* <RiDashboardLine color={"black"} size={expanded ? 20 : 30} /> */}
            {expanded && <span>{a.title}</span>}
          </NavLink>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SideBar;
