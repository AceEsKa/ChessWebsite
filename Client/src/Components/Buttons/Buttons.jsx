import React from "react";
import './Buttons.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import ForumIcon from '@mui/icons-material/Forum';
import LoginIcon from '@mui/icons-material/Login';
import InfoIcon from '@mui/icons-material/Info';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import GroupIcon from '@mui/icons-material/Group';
import { useNavigate } from "react-router-dom";
import {LoggedInButton} from "./LoggedInButton";

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
const Buttons = () => {
    const navigate = useNavigate();
    function redirectToAboutPage(props) {
        const { stringParam } = props;

        switch (stringParam) {
            case "blog":
                navigate("/novinky");
                break;
            case "about":
                navigate("/o-nas");
                break;
            case "members":
                navigate("/clenovia");
                break;
            case "forum":
                navigate("/forum");
                break;
            case "rankings":
                navigate("/rebricek");
                break;
            default:
                navigate("/");
                break;
        }
    }
    return(
        <div className="Buttons">
            <div className="sb__Buttons section__padding">
                <div className="sb__Buttons-links">
                    <div className="sb__Buttons-links_div">
                        <Stack spacing={2.2} direction="row">
                            <ThemeProvider theme={theme}>
                                    <Button variant="text" size="large" startIcon={<InfoIcon/>} onClick={() => redirectToAboutPage({stringParam:"about"})}>O nás</Button>
                                    <Button variant="text" size="large" startIcon={<GroupIcon/>} onClick={() => redirectToAboutPage({stringParam:"members"})}>Členovia</Button>
                                    <Button variant="text" size="large" startIcon={<LeaderboardIcon/>} onClick={() => redirectToAboutPage({stringParam:"rankings"})}>Rebríček</Button>
                                    <Button variant="text" size="large" startIcon={<ForumIcon/>} onClick={() => redirectToAboutPage({stringParam:"forum"})}>Fórum</Button>
                                    <LoggedInButton/>

                            </ThemeProvider>
                        </Stack>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Buttons;