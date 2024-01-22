import "./Home.css";
import { Footer }  from "../../Footer/Footer";
import React from "react";
import MainButtons from "../../Buttons/MainButtons";
import Buttons from "../../Buttons/Buttons";
import FooterPusher from "../../Footer/FooterPusher"
export const Home = () => {
    return (
        <div className="Home">
            <MainButtons/>
            <Buttons />
            <FooterPusher/>
            <FooterPusher/>
            <FooterPusher/>
            <FooterPusher/>


            <Footer />
        </div>
    )
}