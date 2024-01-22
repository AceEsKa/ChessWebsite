import './App.css';
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {MembersPage} from "./Components/Pages/Members/MembersPage";
import {RankingsPage} from "./Components/Pages/Rankings/RankingsPage";
import {LeaguesPage} from "./Components/Pages/Leagues/LeaguesPage";
import {AboutPage} from "./Components/Pages/About/AboutPage";
import {ForumPage} from "./Components/Pages/Forum/ForumPage";
import LoginPage from "./Components/Pages/Login/LoginPage";
import {Home} from "./Components/Pages/Home/Home";
import {RegistrationPage} from "./Components/Pages/Login/RegistrationPage";
import {GalleryPage} from "./Components/Pages/Gallery/GalleryPage";
import {ForgotPasswordPage} from "./Components/Pages/Login/ForgotPasswordPage";
import CreatePost from "./Components/Pages/Blog/Admin/CreatePost";
import {BlogPage} from "./Components/Pages/Blog/BlogPage";
import {BlogPostPage} from "./Components/Pages/Blog/BlogPostPage";

function App() {
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/novinky" element={<BlogPage/>}/>
                <Route path="/o-nas" element={<AboutPage />} />
                <Route path="/rebricek" element={<RankingsPage />} />
                <Route path="/forum" element={<ForumPage />} />
                <Route path="/sutaze" element={<LeaguesPage />} />
                <Route path="/clenovia" element={<MembersPage />} />
                <Route path="/novinky" element={<BlogPage />} /> {/*figure switch between admin and general user*/}
                <Route path="/prihlasenie" element={<LoginPage />} /> {/*Make drop down menu after being logged in*/}
                <Route path="/registracia" element={<RegistrationPage />} />
                <Route path="/zabudnute-heslo" element={<ForgotPasswordPage />} />
                <Route path="/galeria" element={<GalleryPage />} />
                <Route path="/novinky/:id" element={<BlogPostPage/>}/>
                <Route path="/novy-prispevok" element={<CreatePost/>}/>
                <Route path="/novinky/editovat/:id"></Route>
            </Routes>
        </div>
    </Router>
  );
}

export default App;
