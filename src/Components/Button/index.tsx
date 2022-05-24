import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import "./Button.css";
import { grey } from '@mui/material/colors';

const black = grey[500];

export default function ContainedButtons({Label, Type} : {Label : string, Type : string}) {
  return (
    <Stack className={Type} direction="row" spacing={2}>
      <Button variant="contained" color="success" href="">
        {Label}
      </Button>
    </Stack>
  );
}

