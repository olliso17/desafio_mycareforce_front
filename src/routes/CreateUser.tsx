import CreateUserComponent from "../components/userForm/CreateUserComponent";
import classes from './CreateUser.module.css'

const CreateUser = () => {
    return (
        <div className={classes.createUser}>
            <CreateUserComponent />
        </div>
    );
}

export default CreateUser;