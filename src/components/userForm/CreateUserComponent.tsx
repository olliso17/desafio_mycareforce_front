import React, { useEffect, useState } from 'react';
import Button from '../../button/Button';
import useAuth from '../../hooks/useAuth';
import classes from './CreateUserComponent.module.css';

const CreateUserComponent: React.FC = () => {
    const { setTypeComponent, name, email, password, errorMessage, handleInputChange, handleConfirmClick } = useAuth();

    useEffect(() => {
        setTypeComponent('createUser');
    }, []);

    return (
        <>
            <div className={classes.loginComponent}>
                <p className={classes.title}>Crie a sua<span className={classes.span}> Conta</span></p>
                <input
                    type="text"
                    className={classes.input}
                    placeholder='Nome do Usuário'
                    value={name}
                    name='name'
                    onChange={handleInputChange}
                />
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
                    name='password'
                    onChange={handleInputChange}
                />
                <Button name='Confirmar' onClick={handleConfirmClick} />
                {errorMessage && <p className={classes.error}>{errorMessage}</p>}
            </div>
        </>
    );
};


export default CreateUserComponent;
