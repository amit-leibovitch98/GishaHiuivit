import bluePrint from "../../../UI/images/bluePrint.jpg";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const TextRating = (props) => {
  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Rating
        name="text-feedback"
        value={props.value}
        readOnly
        precision={0.5}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
        <p> דירוג לפי {props.numOfComments} תגובות </p>
        <Box sx={{ ml: 2 }}>{labels[props.value]}</Box>
    </Box>
  );
};
const Map = (props) => {
  return (
    <div>
      <TextRating value={props.grade} numOfComments={props.numOfComments} />

      <img src={bluePrint} alt="blue print" width="300" height="200" />

      <br></br>
      <br></br>
    </div>
  );
};

export default Map;
