import { useNavigate } from "react-router-dom";
import classes from "./ButtonMenu.module.css";


type Props = {
    name: string
    router: string
}

const ButtonMenu = ({ name, router }: Props) => {
    const navigate = useNavigate();
    function direction() {
        navigate(router)
    }
    return (
        <button className={classes.button} onClick={() => direction()}>{name}</button>
    )
}

export default ButtonMenu