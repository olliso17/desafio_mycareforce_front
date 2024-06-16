import classes from "./ButtonIcon.module.css"

type Props = {
    children: JSX.Element
    onClick:()=>void
}


const ButtonIcon = ({ children, onClick }: Props) => {
    return (
        <button className={classes.button} onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonIcon