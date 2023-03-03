import classes from "./accountOverviewNav.module.css";
import React from "react";
import { Box } from "@mui/material";
import Logo from "../../assets/svgs/logo.svg";
import bell from "../../assets/svgs/notification.svg";

const accountOverviewNav = () => {
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

          <Box
            sx={{
              marginRight: "10%",
              textAlign: "center",
              top: "39.09%",
              bottom: "39.09%",
            }}
          >
            <ul>
              <li className={classes.listitem}>
                <a className={classes.notify} href="/">
                  <img className={classes.notification} src={bell} alt="" />
                </a>
              </li>
              <li className={classes.listitem}>
                <a className={classes.userinitials} href="/">
                  <p className={classes.ifont}> A</p>
                </a>
              </li>
            </ul>
          </Box>
        </nav>
      </Box>
    </>
  );
};

export default accountOverviewNav;

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
