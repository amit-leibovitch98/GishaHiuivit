//import { Button } from "@mui/material";
import React from "react";
import Button from "../Button";
import GoogleMaps from "../Filter";
import SearchBar from "./SearchBar";


const LandingPage = () => {
    return(<>
    <Button Label= "התחבר כבעל עסק" Type = "Login" />
    <SearchBar />
    <Button Label = "Feeiling Lucky!" Type = "FeeilingLucky" />
    </>)
}

export default LandingPage;