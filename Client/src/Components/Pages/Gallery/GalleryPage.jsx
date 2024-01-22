import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Footer} from "../../Footer/Footer";
import MainButtons from "../../Buttons/MainButtons";
import Buttons from "../../Buttons/Buttons";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const defaultTheme = createTheme();
export const GalleryPage = () => {
    return (
        // <ThemeProvider theme={defaultTheme} style={{backgroundColor: '#232222'}}>
        <div style={{backgroundColor: '#232222'}}>
            <CssBaseline/>
            <MainButtons/>
            <Buttons/>
            <main style={{backgroundColor: '#232222'}}>
                {/* Hero unit */}
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pb: 6,
                    }}
                    style={{backgroundColor: '#232222'}}
                >
                    <Container maxWidth="sm" style={{backgroundColor: '#232222'}}>
                        <Typography
                            top= "0"
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Galéria
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            Niečo krátke a hlavné o zbierke nižšie – jej obsahu,
                            tvorca atď. Urobte to krátke a sladké, ale nie príliš krátke, aby to ľudia jednoducho nepreskočili úplne.
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                            <Button variant="contained">Main call to action</Button>
                            <Button variant="outlined">Secondary action</Button>
                        </Stack>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image="https://source.unsplash.com/random?wallpapers"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">View</Button>
                                        <Button size="small">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Footer/>
            {/* End footer */}
        </div>
        // </ThemeProvider>
    );
}