import React from "react";
import SearchBar from "./SearchBar";
import {SignIn} from "../../sign-in";
import {SignUp} from "../../sign-up";
import {Form, FormControl} from "react-bootstrap";
import Button from "@mui/material/Button";
import {VerificationComponent} from "../../verification-component";

export const LandingPage = () => {
    const [showValues, setShowValues] = React.useState(false);

    return(<>
        <div className="top-bar">
        <SearchBar />
        <SignIn />
        <SignUp />
        </div>
        <Form className={"sign-up-form"}>
            <Form.Group className="mb-3 email-form form-item" controlId="formBasicEmail">
                <Form.Label>:שם משתמש</Form.Label>
                <Form.Control type="email"/>
            </Form.Group>

            <Form.Group className="mb-3 password-form form-item" controlId="formBasicPassword">
                <Form.Label>:סיסמא</Form.Label>
                <Form.Control type="password" />
            </Form.Group>
            <Form.Group className="form-item" >
                <Form.Label>: קובץ רישום</Form.Label>
                <Form.Control type="file"></Form.Control>
            </Form.Group>
            <Form.Group className="form-item" >
                <Form.Label>: שם עסק</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="form-item" >
                <Form.Label>: כתובת עסק</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="form-item" >
                <Form.Label>: מספר רשיון עסק</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Button className={"submit-btn"} variant="contained" onClick={() => {
                setShowValues(true);
            }}>הרשם</Button>
            {showValues && <VerificationComponent />}
        </Form>
        </>)
}

export default LandingPage;