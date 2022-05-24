import React, { Fragment, useState } from "react";
import Map from "./Map";
import Comments from "./Comments";
import "./index.css";
import SearchBar from "../LandingPage/SearchBar";
import {SignIn} from "../../sign-in";
import {SignUp} from "../../sign-up";
const BuisnessPage = () => {
  const [grade, setGrade] = useState(0);
  const [numOfComments, setNumOfComments] = useState(0);
  const calculateAverageGrade = (inputGrade) => {
    console.log("numOfComments in BuisnessPage" + numOfComments);
    console.log("inputGrade " + inputGrade);
    console.log("Grade  " + (grade + inputGrade) / (numOfComments + 1));
    setGrade((grade + inputGrade) / (numOfComments + 1));
  };
  return (
    <Fragment>
      <div className="top-bar">
        <Button variant="contained"> עמוד עסק</Button>
        <SearchBar/>
        <SignIn/>
        <SignUp/>
        <Button variant="contained"> הפתע אותי</Button>
      </div>
      <div className="buisness-flex ">
        <Map numOfComments={numOfComments + 1} grade={grade} />
        <Comments
          averageGradeHandler={calculateAverageGrade}
          trackNumOfComments={setNumOfComments}
        />
      </div>
    </Fragment>
  );
};

export default BuisnessPage;
