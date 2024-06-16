import LoginComponent from '../components/login/LoginComponent'
import classes from './Login.module.css'

const Login = () => {
    return (
        <div className={classes.login}>
            <LoginComponent />
        </div>
    )
}

export default Login