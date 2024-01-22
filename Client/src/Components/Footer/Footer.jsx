import React from "react";
import fb from '../../Assets/fbimage.png'
import './Footer.css'

export const Footer=()=> {
    return(
        <div className="footer">
            <div className="sb__footer section_padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">

                        <h4>Členský Kútik</h4>

                        <a href="/historicky-rebricek">
                            <p>Historický Rebríček</p>
                        </a>

                        <a href="/uspechy-nasich-clenov">
                            <p>Úspechy našich členov</p>
                        </a>

                        <a href="/ratingove-zisky">
                            <p>RatingovéZisky</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div">

                        <h4>Ďaľšie</h4>

                        <a href="/galeria">
                            <p>Galéria</p>
                        </a>

                        <a href="/kalendar">
                            <p>Kalendár</p>
                        </a>

                        <a href="/sach-na-skolach">
                            <p>ŠachNašKolách</p>
                        </a>

                    </div>

                    <div className="sb__footer-links_div">

                        <h4>Kontakt</h4>

                        <a href="/employer">
                            <p>tbd 1</p>
                        </a>

                        <a href="/healthplan">
                            <p>tbd 2</p>
                        </a>

                        <a href="/individual">
                            <p>tbd 3</p>
                        </a>

                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Kde nás nájsť</h4>
                        <a href="/employer">
                            <p>tbd 4</p>
                        </a>

                        <a href="/healthplan">
                            <p>tbd 5</p>
                        </a>

                        <a href="/individual">
                            <p>tbd 6</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Sociálne média</h4>
                        <a href="https://www.facebook.com/sachlevice" target="_blank" rel="noopener noreferrer">
                            <img src={fb} alt="https://www.facebook.com/sachlevice"/>
                        </a>
                    </div>
                </div>

                <hr></hr>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Dominik Žilkay. všetky práva vyhradené
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )

}