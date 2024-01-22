import Add from "@mui/icons-material/Add";
import Button from "@mui/joy/Button";
import React from "react";
import {CheckIfUserHasAdminRole} from "../CheckIfUserHasAdminRole";
import {useAuth} from "../AuthProvider";
import {useNavigate} from "react-router-dom";

export const NewPostButton = () => {
    const { token } = useAuth();
    const isAdmin = CheckIfUserHasAdminRole(token);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/novy-prispevok');
    };

    if(isAdmin) {
        return (
            <Button startDecorator={<Add/>} sx={{marginBottom: '5px'}} onClick={handleClick}>Nový príspevok</Button>
        )
    }
}