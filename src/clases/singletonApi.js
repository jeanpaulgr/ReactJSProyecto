
class SingletonApi{
    static instancia; // undefined
    GetBaseHost = 'https://wzone.azurewebsites.net/';
    GetBaseRoom = 'api/Sala/';
    GetBasePoint = 'api/Puntos/';
    GetBaseUser = 'api/Usuarios/';
    GetBaseChat = 'api/Chat/'; 
    GetBaseLogin = 'api/Login/'; 
    
    constructor(GetHost, GetBaseRoom, GetBasePoint, GetBaseUser, GetBaseChat, GetBaseLogin){
        if (!!SingletonApi.instancia){
            return SingletonApi.instancia;
        }

        SingletonApi.instancia = this;
            this.GetHost = GetHost;
            this.GetBaseRoom = GetBaseRoom;
            this.GetBasePoint = GetBasePoint;
            this.GetBaseUser = GetBaseUser;
            this.GetBaseChat = GetBaseChat;
            this.GetBaseLogin = GetBaseLogin;
  
    }

}

export default SingletonApi;
