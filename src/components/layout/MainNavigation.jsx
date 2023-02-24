// import Link from "next/link";
import classes from "./MainNavigation.module.css";
import React from "react";
import { Box } from "@mui/material";
import Logo from "../../assets/svgs/logo.svg";

const MainNavigation = () => {
  return (
    <>
      <Box
        sx={{
          pt: 1,
          pb: 1,
          pr: 5,
          pl: 5,
          boxShadow: "0px 0px 10px rgba(128, 128, 128, 0.25)",
          backgroundColor: "#FFFFFF",
        }}
      >
        <nav className={classes.header}>
          <Box sx={{ width: "30%", marginRight: "10%" }}>
            <img src={Logo} alt="My logo" />
          </Box>

          <Box
            sx={{
              marginRight: "10%",
              textAlign: "center",
              top: "39.09%",
              bottom: "39.09%",
            }}
          >
            <ul>
              <li style={listStyle}>
                <a href="/" style={{ color: "#262626" }}>
                  Home
                </a>
              </li>
              <li style={listStyle}>
                <a href="/" style={{ color: "#262626" }}>
                  About
                </a>
              </li>
              <li style={listStyle}>
                <a href="/" style={{ color: "#262626" }}>
                  Transcos
                </a>
              </li>
              <li style={listStyle}>
                <a href="/" style={{ color: "#262626" }}>
                  FAQ
                </a>
              </li>
              <li style={listStyle}>
                <a href="/" style={{ color: "#262626" }}>
                  Contact
                </a>
              </li>
            </ul>
          </Box>

          <Box sx={{ width: "50%", float: "right" }}>
            <ul style={{ width: "100%", marginLeft: "auto", float: "right" }}>
              <li className={classes.listitem} style={buttonStyle}>
                <a
                  style={{
                    color: "#FFFFFF"
                  }}
                  href="/"
                >
                  Register
                </a>
              </li>
              <li
                className={classes.listitem}
                style={{
                  border: "1px solid #037743",
                  borderRadius: "3px",
                  marginLeft: "10%",
                  top: "39.09%",
                  bottom: "39.09%",
                  left: "88.4%",
                  right: "1.94%",
                  padding: "8px",
                }}
              >
                <a
                  href="/"
                  style={{ color: "#037743", top: "39.09%", bottom: "39.09%" }}
                >
                  Log in
                </a>
              </li>
            </ul>
          </Box>
        </nav>
      </Box>
    </>
  );
};

export default MainNavigation;

const listStyle = {
  left: "27.64%",
  right: "68.19%",
  top: "39.09%",
  bottom: "39.09%",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 300,
  fontSize: "20px",
  lineHeight: "24px",
};
const buttonStyle = {
  left: " 76.67%",
  right: "13.68%",
  top: "27.27%",
  bottom: "27.27%",
  background: "#037743",
  borderRadius: "3px",
  padding: "8px",
  fontFamily: "PoppinsLight",
};
