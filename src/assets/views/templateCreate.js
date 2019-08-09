import {createAccount} from './../js/auth.js';
  
  export const templateCreate = () => {
    // creamos div que contendrá la plantilla
    const containerCreate = document.createElement('div');
    // creamos el contenido del login
    const contentCreate = `

          <div class="login-box">
                <h1>Registrate aquí</h1>
                <form>
                  <label for="Email">Email</label>
                  <input id="email" type="text" placeholder="Ingresa tu email">
                 
                  <label for="password">Contraseña</label>
                  <input id="password" type="password" placeholder="Ingresa tu contraseña">
                  <button id="create" type="submit">Crear cuenta</button>
                  
                </form>
          </div>
                            `;
    // pasar el contenido al div
    containerCreate.innerHTML = contentCreate;
    document.getElementById('root').appendChild(containerCreate);
    // le pido que busque el id del boton dentro del div creado
    const btn = containerCreate.querySelector('#create');
    // evento del botón que llama a la autentificación de google.
    btn.addEventListener('click', () => {
      createAccount();
    });
    return containerCreate;
  };
  