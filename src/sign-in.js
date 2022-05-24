import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import * as React from 'react';
import {Typography} from "@mui/material";
import { Form } from 'react-bootstrap';

export const SignIn = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={"sign-in-container"}>
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                התחברות לבעל עסק
            </Button>
            <Popover
                className={"popover-signin"}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
            >
                <Typography sx={{ p: 2 }}>
                    <Form className="sign-in-form">
                        <Form.Group className="mb-3 email-form form-item" controlId="formBasicEmail">
                            <Form.Label>:שם משתמש</Form.Label>
                            <Form.Control type="email"/>
                        </Form.Group>
                        <Form.Group className="mb-3 password-form form-item" controlId="formBasicPassword">
                            <Form.Label>:סיסמא</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check className={"remember-me"} type="checkbox" label="זכור אותי" />
                        </Form.Group>
                        <Button className={"submit-btn"} variant="contained" type={"submit"}>התחבר</Button>
                    </Form>
                </Typography>
            </Popover>
        </div>
    );
}