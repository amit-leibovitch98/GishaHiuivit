import * as React from "react";
import Grade from "../Grade";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./index.css";

const Comments = (props) => {
  //const comments = [{ name: "Michal", comment: "Verry Nagish" }];
  const [gradeFromUser, setGradeFromUser] = React.useState(0);
  const [nameState, setNameState] = React.useState("");
  const [commentState, setCommentState] = React.useState("");
  const [comments, setComments] = React.useState([]);
  /*{ name: "Michal", comment: "Verry Nagish" },
    { name: "Yafit", comment: "Excellent!" },*/
  const updateGradeHandler = (inputGrade) => {
    setGradeFromUser(inputGrade);
  };

  const nameHandler = (event) => {
    setNameState(event.target.value);
  };
  const commentHandler = (event) => {
    setCommentState(event.target.value);
  };
  const updateCommentsHandler = () => {
    props.averageGradeHandler(gradeFromUser);
    setComments([...comments, { name: nameState, comment: commentState }]);
    console.log("comments.length in Comments: " + comments.length);
    props.trackNumOfComments(comments.length);
    setNameState("");
    setCommentState("");
  };

  return (
    <React.Fragment>
      <Grade updateGradeHandler={updateGradeHandler} />
      <Box
        className="comment-box"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="שם"
          variant="standard"
          onChange={nameHandler}
        />
        <TextField
          id="outlined-basic"
          label="הוסף תגובה"
          variant="outlined"
          onChange={commentHandler}
        />
      </Box>
      <button onClick={updateCommentsHandler}>הוסף</button>
      <div>
        <h2>תגובות</h2>
        <ul>
          {comments.map((comment) => {
            return (
              <li className="comments-show">
                <span className="comment-name">{comment.name}</span>
                <span className="comment">{comment.comment}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Comments;
