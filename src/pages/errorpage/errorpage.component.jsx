import React from 'react'
import "./errorpage.styles.scss"

const Error404 = ()=> {
    return (
        <div class="classError">
           <main class="bsod container">
  <h1 class="neg title"><span class="bg">Error - 404</span></h1>
  <p>Un error ha ocurrido, presione para continuar:</p>
  <p>* Retornar a la pagina principal.<br />
  * Retornar a la pagina Login</p>
  <nav class="nav">
    <a href="/signin" class="link">Login</a>&nbsp;|&nbsp;<a href="/points" class="link">HomePage</a>
  </nav>
</main>
        </div>
    )
}

export default Error404
