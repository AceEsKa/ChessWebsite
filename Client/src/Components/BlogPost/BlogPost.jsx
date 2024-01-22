import {formatISO9075} from "date-fns";
import "./blogPost.css"
import {Link, useNavigate} from "react-router-dom"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import image from '../../Assets/postplaceholder.jpg'
import AspectRatio from '@mui/joy/AspectRatio';
import {CardActionArea} from "@mui/material";
import { CheckIfUserHasAdminRole } from "src/Components/CheckIfUserHasAdminRole"
import {ChangePostButtons} from "../Buttons/ChangePostButtons";

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

const BlogPost = ({_id,title,summary,/*cover,*/content,timestamp}) => {
    const navigate = useNavigate();

    const handleDelete = () => {
        navigate('/novy-prispevok');
    };
    const handleEdit= () => {
        navigate(`/novinky/editovat/${_id}`);
    };

    return (

        <div className="Post">
            <Card variant="outlined" sx={{ minWidth: '35vw', maxWidth: '55vw' }}  style={{backgroundColor: '#18392B'}}>
                <CardActionArea>
                    <Link to={`/novinky/${_id}`} style={{ color: 'black' }}>
                    <AspectRatio objectFit="fill" minHeight={300} maxHeight={300}>
                        <img
                            src={image}
                            alt=""
                        />
                    </AspectRatio>
                    <CardContent sx={{ minWidth: '35vw', maxWidth: '35vw', minHeight:'10vh', maxHeight: '10vh', textOverflow: 'clip' }}>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                            {/*Zatiaľ životný turnaj Jura Leckého*/}
                        </Typography>
                        {/*<Typography variant="body2" color="text.secondary">
                        </Typography>*/}
                        <Typography variant="body2" color="text.secondary"  sx = {{ maxHeight: '5vh', textOverflow: 'clip'}} >
                            {summary}
                            {/*Štvrtý vyhraný turnaj v priebehu pár týždňov 😍
                            Priatelia z NŠK Nitra organizovali ďalší turnaj série GPX, s ktorým sa hral súčasne aj otvorený turnaj bez obmedzeného vstupu. Za Levice som tentokrát bojoval len ja a už štartová listina napovedala, že budem jedným z horúcich adeptov na celkový triumf v turnaji.*/}
                        </Typography>
                    </CardContent>
                    </Link>
                </CardActionArea>
                    <ChangePostButtons />
                    {/*<CardActions>
                    </CardActions>*/}
            </Card>
        </div>
    )
}

export default BlogPost