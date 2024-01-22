import React from "react";
import './MainButtons.css'
import FeedIcon from '@mui/icons-material/Feed';
const Buttons = () => {
    return(
        <div className="MainButtons">
            <div className="sb__MianButtons section__padding">
                <div className="sb__MainButtons-links">

                    <div className="sb__MainButtons-links_div">
                        <a href="/novinky">
                            <p startIcon="FeedIcon">Novinky</p>
                        </a>
                        <a href="/oznamy">
                            <p>Oznamy</p>
                        </a>
                        <a href="/sutaze">
                            <p>Súťaže</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Buttons;