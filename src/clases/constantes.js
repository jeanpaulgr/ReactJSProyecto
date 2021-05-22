import SingletonApi from './singletonApi';
const BaseHost = 'https://wzone.azurewebsites.net/';
const BaseRoom = 'api/Sala/';
const BasePoint = 'api/Puntos/';
const BaseUser = 'api/Usuarios/';
const BaseChat = 'api/Chat/';
const BaseLogin = 'api/Login/';

const singletonApi = new SingletonApi(BaseHost, BaseRoom, BasePoint, BaseUser, BaseChat, BaseLogin);

export const ApiGetPoints = (PointId, getSalas) => {
    let result = '';
    result = singletonApi.GetBaseHost + singletonApi.GetBasePoint + PointId.toString() + '?GetSalas=' + getSalas;
return result;
}

export const ApiGetRooms = (RoomId, getChat, PointId) => {
    let result = '';
    if(!PointId){
        result = singletonApi.GetHost + singletonApi.GetBaseRoom + RoomId + '?GetChat=' + getChat;
    }else{
        result = singletonApi.GetHost + singletonApi.GetBaseRoom + '?PuntoID=' + PointId.toString() + '&GetChat=' + getChat;   
    }
return result;
}

export const ApiGetChats = (SalaId) => {
    let result = '';
       result = singletonApi.GetHost + singletonApi.GetBaseChat + SalaId;   
   return result;
}

export const ApiGetUsers = (UserId) => {
    let result = '';
    result = singletonApi.GetHost & singletonApi.GetUsers & UserId ;  
return result;
}

export const ApiPostLogin = () => {
    let result = '';
    result = singletonApi.GetHost + singletonApi.GetBaseLogin;   
    console.log('Login', result);
return result;
}

export const ApiPostUserRegister = () => {
    let result = '';
    result = singletonApi.GetHost + singletonApi.GetBaseUser;   
    console.log('Login', result);
return result;
}

export const ApiPostChat = () => {
    let result = '';
    result = 'https://wzone2.azurewebsites.net/' + singletonApi.GetBaseChat;   
    console.log('BaseChat', result);
    
return result;
}
