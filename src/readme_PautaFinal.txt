1. Crear 3 clases al menos, si ocupan React o Angular este punto se asumirá ya que ambas herramientas utilizan clases para crear componentes. -->(cubierto: components/header/header.component | components/message/message.component)
2*. Generar herencia en al menos 1 clase.-->(cubierto: components/header/header.component)
3*. Generar un singleton para realizar llamadas de API (pueden usar fetch o axios) --> (cubierto:clases/singleton)
4. Deben mostrar por html distinta información relacionada a la llamada api filtrando información que a ustedes les resulte interesante de mostrar. Pueden utilizar alguna librería externa para la UI como bootstrap o alguna otra que conozcan pero no es excluyente. Para mostrar esta información es necesario filtrar las respuesta de la llamada API, y en este caso las funciones de Array es su mejor aliado, se valorará entre más métodos utilicen mejor (map, reduce, filter, find, etc). Al menos se les solicitará la siguiente cantidad como base:
    a*.Usar .map al menos 3 veces -->(cubierto:pages/pointspage.component | pages/roomspagge.component | )
    b.Usar .reduce al menos 1 vez
    c*.Usar .filter al menos 2 veces -->(cubierto:context/RoomsContext | context/PointsContext)
    d.Usar .find al menos 2 veces
5*.Generar un método para guardar alguna información de la api escogida en localStorage del sitio (generar persistencia de datos) y crear un botón para volver a traer la información guardada por html. Debe ser una sección individual para visualizar la información recuperada. -->(cubierto:context/RoomsContext | component/room.component )
6. Se evaluará el uso de ES6
    a*.Recuerden que hay un tipo de declaración de variable que no se debería usar y otras que sí. También el uso de arrow functions (funciones flecha) cuando corresponda, así como async await para llamadas asíncronas, desestructuración, spread operator, etc. Siempre se puede resumir JS y todo eso se evaluará en la sintaxis.
    b.Deben crear 5 mensajes utilizando string literales. 
    c*.Se evaluará que los métodos en sus parámetros tengan valores por defecto y dado el caso que también contengan desestructuración al ser objetos. -->(cubierto)
7.Considerar las funciones Puras e Impuras
    a*.se evaluará la responsabilidad de las funciones que generen (no deben generar funciones enormes)
8.Utilizar Promesas al menos 2 veces.
9.Utilizar setTimeout o setInterval al menos 2 veces.
