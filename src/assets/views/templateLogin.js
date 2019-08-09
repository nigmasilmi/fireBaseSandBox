import {loginGoogle} from './../js/auth.js';
import {createAccount} from './../js/auth.js';


export const templateLogin = () => {
    // creamos div que contendrá la plantilla
    const containerLogin = document.createElement('div');
    // creamos el contenido del login
    const contentLogin = `<button id="loginGoogle">Login con Google</button>`;
    // pasar el contenido al div
    containerLogin.innerHTML = contentLogin;
    
    const btnGoogle = containerLogin.querySelector('#loginGoogle');
    // evento del botón que llama a la autentificación de google.
    btnGoogle.addEventListener('click', () => {
      loginGoogle();
    });
   
    return containerLogin;
  };