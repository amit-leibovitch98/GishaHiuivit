import React, { Fragment, useState } from "react";
import Map from "./Map";
import Comments from "./Comments";
import "./index.css";
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
