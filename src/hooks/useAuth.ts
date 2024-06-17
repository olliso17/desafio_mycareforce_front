import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { client } from '../server/axios';

interface UseAuthReturn {
    name:string;
    email: string;
    password: string;
    errorMessage: string;
    typeComponent: string;
    setTypeComponent: React.Dispatch<React.SetStateAction<string>>
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    handleConfirmClick: () => Promise<void>;
    checkLoginStatus: () => boolean;
    logout: () => void;
}

const useAuth = (): UseAuthReturn => {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string>('');
    const [typeComponent, setTypeComponent] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        checkLoginStatus()
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
        if (name === 'name') {
            setName(value);
        }
    };

    const handleConfirmClick = async () => {
        setErrorMessage(''); 
        if (typeComponent === 'login') {
            try {
                const response = await client.post('auth/login', {
                    email: email,
                    password: password,
                });

                if (response.status === 201 || response.status === 200) {
                    const access_token  = response.data['token'];
                    const now = new Date();
                    const expires = new Date(now.setHours(23, 59, 59, 999));
                    localStorage.setItem('token', access_token); 
                    localStorage.setItem('expires', expires.toString());
                    const id = response.data['id'];
                    const home = '/home/'+ id;
                    navigate(home);
                } 
            } catch (error) {
                console.error('Login failed:', error);
            }
        }
        if (typeComponent === 'createUser') {
            try {
                const response = await client.post('user/create', {
                    name:name,
                    email: email,
                    password: password,
                });
                
                
                if (response.status === 201 || response.status === 200) {
                    const access_token  = response.data['token'];
                    const now = new Date();
                    const expires = new Date(now.setHours(23, 59, 59, 999));
                    localStorage.setItem('token', access_token); 
                    localStorage.setItem('expires', expires.toString());
                    const id = response.data['id'];
                    const home = '/home/'+ id;  
                    navigate(home);
                } 
            } catch (error) {
                console.error('Created user failed:', error);
            }
        }

    };

    const checkLoginStatus = (): boolean => {
        const storedUserCode = localStorage.getItem('token');
        const storedExpires = localStorage.getItem('expires');
        if (!storedUserCode || !storedExpires) {
            return false;
        }
        const now = new Date();
        const expires = new Date(storedExpires);
        if (now > expires) {
            localStorage.removeItem('token');
            localStorage.removeItem('expires');
            return false;
        }
        return true;
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('expires');
        navigate('/');
    };

    return {
        email,
        password,
        name,
        errorMessage,
        typeComponent,
        setTypeComponent,
        handleInputChange,
        handleConfirmClick,
        checkLoginStatus,
        logout
    };
};

export default useAuth;
