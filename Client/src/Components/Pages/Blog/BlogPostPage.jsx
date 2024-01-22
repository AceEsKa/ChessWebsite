import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {formatISO9075} from "date-fns";
import {Link} from 'react-router-dom';
import axios  from "axios";
import MainButtons from "../../Buttons/MainButtons";
import Buttons from "../../Buttons/Buttons";
import Typography from "@mui/material/Typography";
import image from "../../../Assets/postplaceholder.jpg";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/material/Box";
import "./BlogPostPage.css";
import { Footer }  from "../../Footer/Footer";
export const BlogPostPage = () => {
    const [blogPost,setBlogPost] = useState(null);

    const params = useParams();
    const blogPostId = params.id;

    useEffect(()=> { axios.get(`http://localhost:8080/get-post?id=${blogPostId}`).then(response=> {
        setBlogPost(response.data)});
    },[blogPost])
    return (
        <div className="post-page"  style={{backgroundColor: '#232222'}}>
            <MainButtons/>
            <Buttons />
            <Typography
                top= "0"
                right= "20"
                component="h1"
                variant="h2"
                align="center"
                color="forestgreen"
                gutterBottom
                sx={{ marginTop: '50px' }}
            >
                {blogPost?.title}
            </Typography>
            <Box sx={{ boxShadow: 10, backgroundColor: '#212020', marginRight: '25vw', padding: '75px', marginLeft: '25vw', marginBottom: '10vh' }} >
                <AspectRatio objectFit="fill" minHeight={500} maxHeight={500} sx={{ maxWidth: '50vw' }}>
                    <img
                        src={image}
                        alt=""
                    />
                </AspectRatio>
                {/*<Typography>
                    {blogPost?.timestamp}
                </Typography>*/}
                <div className="content" dangerouslySetInnerHTML={{__html:blogPost?.content}} />
            </Box>
            <Footer/>
        </div>
    )
}