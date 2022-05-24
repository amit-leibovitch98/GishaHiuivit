import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./Button.css";

export default function ContainedButtons({Label, Type} : {Label : string, Type : string}) {
  return (
    <Stack className={Type} direction="row" spacing={2}>
      <Button variant="contained" href="">
        {Label}
      </Button>
    </Stack>
  );
}

