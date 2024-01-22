import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Copyright} from "./Copyright";
import {useState} from "react";
import axios from "axios";
import {Navigate} from "react-router-dom";
import {useAuth} from "../../AuthProvider";
export const RegistrationPage =()=> {
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const { token, setToken } = useAuth();
    const [error, setError] = useState(null);

    const handleUserNameChange = (event) => {
        setUserName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleRepeatedPasswordChange = (event) => {
        setRepeatedPassword(event.target.value);
    };

    const handleSubmit = async () => {
        if (password === repeatedPassword) {
            const response = await axios.post("http://localhost:8080/post-create", ({
                email,
                password,
            }), { headers: {
                    "Content-Type": "application/json",
                },
            });

            if (response.status === 200) {
                const token = response.data;
                setToken(token);
                return <Navigate to={'/login'} />
            } else {
                alert(error);
            }
        } else {
            alert("hesla sa nezhoduju");
        }

    };
    <Copyright />
    const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/333514668_553162216880673_594017556947752855_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=49d041&_nc_ohc=Uu9vaUAe-QEAX_TbsYF&_nc_ht=scontent-vie1-1.xx&oh=00_AfBTOSpMdqEQzX3UhHketh1FYssXNLdChCpLrRcpSc_4yg&oe=650A448A)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} elevation={6} square style={{backgroundColor: 'forestgreen'}}>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" style={{color: 'gold'}}>
                            Registrácia
                        </Typography>
                        <Box component="form" noValidate  sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="userName"
                                placeholder="Používateľské meno"
                                name="userName"
                                autoComplete="userName"
                                autoFocus
                                OnChange={handleUserNameChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                placeholder="Emailová Adresa"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={handleEmailChange}
                            />
                            <TextField
                                style={{backgroundColor: 'white'}}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                placeholder="Heslo"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                autoFocus
                                onChange={handlePasswordChange}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="repeatePassword"
                                placeholder="Zopakujte heslo"
                                name="repeatePassword"
                                autoComplete="repeatePassword"
                                autoFocus
                                onChange={handleRepeatedPasswordChange}
                            />
                            <Button
                                style={{color: 'black', backgroundColor: 'gold'}}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Registrovať sa
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/prihlasenie" variant="body2" style={{color: 'gold'}}>
                                        Späť na prihlásenie
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}