import Herosection from "../assets/svgs/Herosection.png";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { ReactComponent as Location } from "../assets/svgs/location.svg";
import { ReactComponent as Enroute } from "../assets/svgs/enroute.svg";
import { ReactComponent as DepartureDate } from "../assets/svgs/leaving.svg";
import { ReactComponent as ReturnDate } from "../assets/svgs/coming.svg";
import { ReactComponent as Filter } from "../assets/svgs/filter.svg";
import { ReactComponent as React } from "react";

const SearchFeature = () => {
  return (
    <>
      <Box sx={{
        position:'relative'
      }}>
        <Box sx={{
            padding:'3%',
            paddingBottom:0
        }}>
          <img src={Herosection} alt="" />
        </Box>
        <Box
          display="flex"
          sx={{
            width: "90%",
            border: "1px solid #2626264D",
            p: 4,
            mt: 3,
            position:'absolute',
            borderRadius: "3px",
            bottom:'-60px',
            left:'70px',
            backgroundColor: "white",
          }}
        >
          <TextField
            sx={{
              width: "100%",
              "& .MuiInputBase-root": textFieldInputStyle,
              mr: 2,
            }}
            id="source"
            size="small"
            // variant="outlined"
            placeholder="Where are you coming from?"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Location />:
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{
              width: "100%",
              "& .MuiInputBase-root": textFieldInputStyle,
              mr: 2,
            }}
            placeholder="Where are you going to?"
            id="destination"
            size="small"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Enroute /> &nbsp;:{" "}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{
              width: "100%",
              "& .MuiInputBase-root": textFieldInputStyle,
              mr: 2,
            }}
            placeholder="When are you leaving?"
            id="departureTime"
            size="small"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <DepartureDate /> &nbsp;:{" "}
                </InputAdornment>
              ),
            }}
          />
          <TextField
            sx={{
              width: "100%",
              "& .MuiInputBase-root": textFieldInputStyle,
              mr: 2,
            }}
            placeholder="When are you coming back?"
            id="source"
            size="small"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <ReturnDate /> &nbsp;:{" "}
                </InputAdornment>
              ),
            }}
          />
          <Box sx={{ mr: 1, width:'20%' }}>
            <Filter />
          </Box>

          <Button
            sx={{
              backgroundColor: "#037743",
              borderRadius: "3px",
              textDecoration: "none",
              fontFamily: "inherit",
              color: "#ffffff",
              textTransform: "capitalize",
              width: "50%",
            }}
          >
            Search
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SearchFeature;

const textFieldInputStyle = {
  fontSize: "12px",
  fontFamily: "inherit",
  fontStyle: "italic",
  color: "#808080",
  fontWeight: 800,
};
