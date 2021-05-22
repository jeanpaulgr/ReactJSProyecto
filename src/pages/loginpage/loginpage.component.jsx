import React, {useEffect, useContext } from 'react'

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import '../loginpage/loginpage.styles.scss';
import {LoginContext} from '../../context/LoginContext'

const LoginPage = () => {
    const { loginUser, getLogin, responseMessage, SetResponseMessage, responseEstado, SetResponseEstado } = useContext(LoginContext);
   
    useEffect(() => {
        document.title = 'Points'
        console.log('LoginUserEffect', loginUser);
       }, [loginUser])

    return(


        <div>
                <h1>LOGIN PAGE</h1>
                <div className='login-page'>
                    <SignIn/>
                    {!loginUser ? <SignUp /> : null} 
                </div>
            </div>
    )
            
}
    
export default LoginPage;