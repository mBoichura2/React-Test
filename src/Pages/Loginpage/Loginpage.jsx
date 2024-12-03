import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

import './Loginpage.css';
import logoico from './../../img_src/logoico.svg';
import authService from '../../Components/api-authorization/AuthorizeService';

const Loginpage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const fetchLogin = async () => {
        try {
            setIsLoading(true);
            
            const response = await fetch('/api/login/login', {
            });

            //    const textResponse = await response.text();
            //console.log('Response:', textResponse);

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            //if (!response.ok) {
            //    throw new Error('Не вдалося увійти. Спробуйте ще раз.');
            //}

            const data = await response.json();
            console.log(data);

            //const data = JSON.parse(textResponse); // Якщо впевнені, що це JSON
            //console.log(data);

            navigate('/home');

        } catch (err) {
            setError(err.message); 
        } finally {
            setIsLoading(false); 
            
        }
    };

    return (
        <div className="login-box">
            <div className="icon">
                <img src={logoico} alt="Icon" />
            </div>
            <div className='text'>
                <p>Увійдіть в акаунт</p>
            </div>
            <button className="login-button" onClick={fetchLogin} disabled={isLoading} >
                {isLoading ? 'Завантаження...' : 'Увійти'}
            </button>
            {error && <div className="error-message">{error}</div>}
        </div>
    );
};

export default Loginpage;
