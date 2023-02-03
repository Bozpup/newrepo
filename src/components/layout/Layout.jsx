import React from "react";
import Box from "@mui/material/Box";
import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css';
import Footer from "./Footer";

export const Layout = (props) => {
  return (
    <Box sx={{boxSizing:'border-box'}}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </Box>
  );
};
