import React, { useEffect } from 'react';
import classes from './LoginComponent.module.css';
import useAuth from '../../hooks/useAuth';
import Button from '../../button/Button';

const LoginComponent: React.FC = () => {
    const {setTypeComponent, email, password, errorMessage, handleInputChange, handleConfirmClick } = useAuth();
    useEffect(() => {
        setTypeComponent('login');
    }, []);
    return (
        <>
            <div className={classes.loginComponent}>
                <p className={classes.title}>Acesse a sua<span className={classes.span}> Conta</span></p>
                <input
                    type="email"
                    className={classes.input}
                    placeholder='Email do Usuário'
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                />
                 <input
                    type="password"
                    className={classes.input}
                    placeholder='Senha do Usuário'
                    value={password}
                    name = 'password'
                    onChange={handleInputChange}
                />
                <Button name='Confirmar' onClick={handleConfirmClick} />
                {errorMessage && <p className={classes.error}>{errorMessage}</p>}
            </div>
        </>
    );
};

export default LoginComponent;
