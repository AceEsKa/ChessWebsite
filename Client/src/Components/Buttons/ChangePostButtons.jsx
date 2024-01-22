import CardActions from "@mui/material/CardActions";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import {useAuth} from "../AuthProvider";
import {CheckIfUserHasAdminRole} from "../CheckIfUserHasAdminRole";

const theme2 = createTheme({
    palette: {
        primary: {
            main: '#FFD700',
        },
        secondary: {
            main: '#FF0000',
        },
    },
});
export const ChangePostButtons = () => {

    const { token } = useAuth();
    const isAdmin = CheckIfUserHasAdminRole(token);

    if(isAdmin) {
        return (
            <CardActions>
                <ThemeProvider theme={theme2}>
                    <Button variant="contained" startIcon={<EditIcon/>}>Editovať</Button>
                    <Button variant="contained" color="secondary" startIcon={<DeleteIcon/>}> Zmazať </Button>
                </ThemeProvider>
            </CardActions>
        )
    }
}