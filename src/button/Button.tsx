import classes from './Button.module.css'

type Props = {
    name:string
    onClick: () => void
}

const Button = ({name, onClick}:Props)=>{
    return (
         <button className={classes.button} onClick={onClick}>{name}</button>
    )
   
}

export default Button