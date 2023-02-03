import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import classes from "./Footer.module.css";
import Logo from "../../assets/svgs/logo.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <Box className={classes.footerBackground}>
        <Box sx={{ display: "flex" }}>
          <Box sx={{ width: "80%" }}>
            <div style={{ width: "50%", marginBottom: "3%" }}>
              <img src={Logo} alt="" />
            </div>
            <Typography sx={{ fontFamily: "Poppins", marginBottom: "10%" }}>
              Inter-state transportation agency for booking bus rides
            </Typography>
            <Box sx={{ display: "flex", color: "white", marginBottom: "10%" }}>
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <FacebookIcon />
            </Box>
            <p sx={{ fontFamily: "Poppins", marginBottom: "2%", color:'white' }}>
              hello@shuttle9ja.com
            </p>
            <p sx={{ fontFamily: "Poppins", marginBottom: "5%", color:'white' }}>
              +234 903 7362 896
            </p>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography sx={heading}>Company</Typography>
            <Typography sx={typographyStyle}>About us</Typography>
            <Typography sx={typographyStyle}>Careers</Typography>
            <Typography sx={typographyStyle}>Partners</Typography>
            <Typography sx={typographyStyle}>Transport Companies</Typography>
          </Box>
          <Box sx={{ width: "50%" }}>
            <Typography sx={heading}>Legal</Typography>
            <Typography sx={typographyStyle}>Terms & Conditions</Typography>
            <Typography sx={typographyStyle}>Privacy & Policy</Typography>
          </Box>
          <Box sx={{ width: "40%" }}>
            <Typography sx={heading}>Support</Typography>
            <Typography sx={typographyStyle}>FAQ</Typography>
            <Typography sx={typographyStyle}>Contacts</Typography>
          </Box>
          <Box sx={{width:'75%'}}>
            <Typography sx={heading}>
              Do you enjoy bus ride offers?
            </Typography>
            <Typography sx={typographyStyle}>
              Sign up to receive enjoyable deals
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Box className={classes.subscribe}>
                <TextField
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": textFieldInputStyle,
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                  placeholder="User@email.com"
                  id="destination"
                  size="small"
                  variant="outlined"
                />

                <Button
                  className={classes.subscribebutton}
                  sx={{
                    backgroundColor: "#049F5A",
                    textTransform: "none",
                    p: 2,
                    width: "50%",
                    borderRadius: "3px",
                    color:'white',
                    fontFamily:'Poppins'
                  }}
                >
                  Sign up
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: "flex", marginTop: "3%" }}>
          <Typography sx={{ fontFamily: "Poppins" }}>
            Copyright © Shuttle9ja. All rights reserved.
          </Typography>

          <Typography sx={{ fontFamily: "Poppins", textAlign: "right" }}>
            Designed by Alpha-tribe.
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;

const textFieldInputStyle = {
  backgroundColor: "white",
  fontFamily: "Poppins",
  fontStyle: "italic",
  borderTopRightRadius: "3px",
  borderBottomRightRadius: "3px",
  p: 1,
};
const typographyStyle = {
  marginBottom: "5%",
  fontFamily: "Poppins",
  fontWeight: "100px",
};

const heading = {
  fontFamily: "Poppins",
  marginBottom: "10%",
  fontWeight: "600",
  fontSize: "20px",
};
