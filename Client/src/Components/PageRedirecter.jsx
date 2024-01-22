import {useNavigate} from "react-router-dom";

export const PageRedirecter = (props) => {
    const navigate = useNavigate();

    const { stringParam } = props;
    switch (stringParam) {
        case "login":
            navigate("/prihlasenie");
            break;
        case "blog":
            navigate("/novinky");
            break;
        case "about":
            navigate("/o-nas");
            break;
        case "members":
            navigate("/clenovia");
            break;
        case "forum":
            navigate("/forum");
            break;
        case "rankings":
            navigate("/rebricek");
            break;
        default:
            navigate("/");
            break;
    }
}