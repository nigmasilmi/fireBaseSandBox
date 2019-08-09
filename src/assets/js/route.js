
import {
    templateLogin
} from './../views/templateLogin.js';

import {
    templateCreate
} from './../views/templateCreate.js';

import {
    retrievePosts
} from './../views/retrivePostsTemplate.js';

import {
    printPostForm, createPost
} from './createPost.js';



/* changeRouter llama a la función que carga cada template */
const changeRouter = (hash) => {
    console.log(typeof (hash));
    console.log(hash);
    if (hash === '') {
        return showTemplate('#/create');
    }
    if (hash === '#/create') {
        return showTemplate('#/create');
    }
    if (hash === '#/login') {
        return showTemplate(hash);
    }
    
    if (hash === '#/feed') {
        return showTemplate(hash);
    }

    if (hash === '#/createPost') {
        return showTemplate(hash);
    }

};

// Función que determina qué template se inyecta en el index.html
const showTemplate = (hash) => {
    const router = hash.substring(2);
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

    // hacemos el match del hash utilizado y el template que queremos mostrar
    switch (router) {
        case 'login':
            containerRoot.appendChild(templateLogin());
            break;
        case 'create':
            containerRoot.appendChild(templateCreate());
            break;
        case 'feed':
            containerRoot.appendChild(retrievePosts());
            break;
        case 'createPost':
            containerRoot.appendChild(printPostForm());
            createPost();
            break;
        default:
            containerRoot.innerHTML = `<h1>Error 404. La página que está solicitando no se encuentra disponible</h1>`;
    }
};

/* initRouter es la función que 'escucha' los cambios de hash */
export const initRouter = () => {
    window.addEventListener('load', changeRouter(window.location.hash));

    // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
    if ('onhashchange' in window) {
        window.onhashchange = () => {
            changeRouter(window.location.hash);
        };
    }
};