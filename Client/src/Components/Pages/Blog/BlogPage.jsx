import React from 'react';
import MainButtons from "../../Buttons/MainButtons";
import Buttons from "../../Buttons/Buttons";
import {useEffect, useState} from "react";
import axios  from "axios";
import BlogPost from "../../BlogPost/BlogPost";
import Typography from "@mui/material/Typography";
import {Categories} from "../../tables/Categories";
import "./BlogPage.css";
import Button from '@mui/joy/Button';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Add from '@mui/icons-material/Add';
import Box from "@mui/material/Box";
import {Pagination} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../../AuthProvider";
import { CheckIfUserHasAdminRole } from "../../CheckIfUserHasAdminRole"
import {NewPostButton} from "../../Buttons/NewPostButton";


const theme = createTheme({
    palette: {
        primary: {
            main: '#00BFFF',
        },
        secondary: {
            main: '#FFD700',
        },
    },
});

export const BlogPage = () => {
    const { token } = useAuth();
    const isAdmin = CheckIfUserHasAdminRole(token);

    const [blogPosts,setBlogPosts] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const renderPosts = () => {
        return blogPosts.slice((currentPage - 1) * 4, currentPage * 4).map((post) => (
            <BlogPost key={post.id} {...post} />
        ));
    };

    useEffect(()=> { axios.get("http://localhost:8080/get-all-blog-posts").then(response=> {
        setBlogPosts(response.data)});
        },[blogPosts])

    return (
        <div className="blogPage" style={{backgroundColor: '#232222'}}>
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
            >
                Novinky

            </Typography>
            if(isAdmin){
                <div className="addButton" style={{ display: "flex", justifyContent: "center" }}>
                    <NewPostButton />
                </div>
            }
            <div className="rowC" style={{ display: 'flex', flexDirection: 'row-reverse' }}>
                    <div className="categories" >
                        <Categories />
                    </div>
                    <div className="PostsBox">
                        <Box sx={{ boxShadow: 10, backgroundColor: '#212020', marginRight: '5vw', padding: '75px' }} >
                            {renderPosts()}
                            <div className="pagination" style={{ display: "flex", justifyContent: "center" }}>
                                <ThemeProvider theme={theme}>
                                    <Pagination count={blogPosts.length/4}
                                                color="secondary"
                                                showFirstButton showLastButton
                                                siblingCount={5}
                                                sx={{marginLeft: '-200px', marginTop: '10px'}}
                                                page={currentPage}
                                                onChange={handleChangePage} />
                                </ThemeProvider>
                            </div>
                        </Box>
                    </div>
            </div>
        </div>
    )
}