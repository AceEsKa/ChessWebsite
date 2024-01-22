import {useAuth} from "../AuthProvider";
import {CheckIfUserHasAdminRole} from "../CheckIfUserHasAdminRole";
import {useNavigate} from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";


const theme = createTheme({
    palette: {
        primary: {
            main: '#FFD700',
        },
        secondary: {
            main: '#d32f2f',
        },
    },
});
export const LoggedInButton = () => {
    const { token } = useAuth();
    const isAdmin = CheckIfUserHasAdminRole(token);

    const navigate = useNavigate();

    function redirectToPage(props) {
        const { stringParam } = props;

        switch (stringParam) {
            case "login":
                navigate("/login");
                break;
            case "profile":
                navigate("/profil");
                break;
            case "logout":

                break;
            case "users":
                navigate("/pouzivatelia");
                break;
        }
    }

    if(token === "") {
        return (
            <ThemeProvider theme={theme}>
                <Button variant="text" size="large" startIcon={<LoginIcon/>} onClick={() => redirectToPage({stringParam:"login"})}>Prihlásenie</Button>
            </ThemeProvider>
        )
    }else if(isAdmin){
        /*admin options*/
        return(
            //place holder
            <Button variant="text" size="large" startIcon={<LoginIcon/>} onClick={() => redirectToPage({stringParam:"login"})}>admin</Button>
        )
    }else{
        //ordinary user
        return (
            //place holder
            <Button variant="text" size="large" startIcon={<LoginIcon/>} onClick={() => redirectToPage({stringParam:"login"})}>user</Button>
        )
    }
}