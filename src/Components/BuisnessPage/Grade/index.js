import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const Grade = (props) => {
  const getGradeHandler = (event) => {
    props.updateGradeHandler(event.target.value);
    console.log(event.target.value);
  };
  return (
    <Stack spacing={1}>
      <Rating
        name="size-large"
        defaultValue={2}
        size="large"
        onChange={getGradeHandler}
      />
    </Stack>
  );
};

export default Grade;
