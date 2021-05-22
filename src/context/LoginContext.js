import React, { createContext, useState, useEffect } from "react";
import {ApiPostLogin} from './../clases/constantes'

export const LoginContext = createContext();


const LoginProvider = ({children}) => {
    const [loginUser, SetLoginUser] = useState('');
    const [responseMessage, SetResponseMessage] = useState('');
    const [responseEstado, SetResponseEstado] = useState(0);
    // const [loginPass, SetLoginPass] = useState([]);
    
    // useEffect(() => getLogin(), []);
 
     const getLogin = (user, pass) => Loguearse(user, pass);   

     async function Loguearse(user, pass){
         
        console.log('user: ', user);
        console.log('pass: ', pass);
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                UserName: user,
                Pass: pass 
            })
        };
        
        const response = await fetch(ApiPostLogin(), requestOptions);
        const data = await response.json(); 
        console.log('data', (data))
        if(data){
            SetLoginUser(data[0].UserName);
            SetResponseMessage('Bienvenido');
            SetResponseEstado(200);
            console.log('localStorage: ', data[0].UserName)
            localStorage.setItem('loginUser', data[0].UserName);
            return 'bienvenido ' + data[0].UserName
        }else{
            SetResponseMessage('Error');
            SetResponseEstado(404);
            return 'Error';
        }
        

     }

      
      return (
        <LoginContext.Provider value={{ loginUser, getLogin, responseMessage, SetResponseMessage, responseEstado, SetResponseEstado, SetLoginUser}}>
            {children}
        </LoginContext.Provider>
      );
};


export default  LoginProvider;

