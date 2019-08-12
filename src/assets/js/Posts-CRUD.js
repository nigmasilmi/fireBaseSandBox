/* ESTE ARCHIVO AGRUPA TODAS LAS FUNCIONES CRUD RELACIONADAS CON LOS POSTS */
import {
    renderPostInTemplate
} from './../views/retrivePostsTemplate.js';

import {
    deleteConfiTemplate
} from './../views/deleteConfirmTemplate.js';

import {
    publicationSuccess
} from './../views/publicationSuccessTemplate.js';

import {
    changeRouter
} from './../../route.js';



/* CREATE POST */

export const createPost = () => {
    // llamamos a la función que crea el formulario y lo pinta en el html (que es lo que trae el hilo hacia acá)
    // y luego si le ponemos a escuchar el evento submit para que tome lo que el usuario ingresó
    // y lo guarde como un objeto en la base de datos
    document.querySelector('#add-post-form').addEventListener('submit', (evt) => {
        let postForm = document.querySelector('#add-post-form');
        evt.preventDefault();
        let categoryIndex = postForm.categories.selectedIndex;
        db.collection('posts').add({
            "autor": postForm.author.value,
            "categoria": postForm.categories.options[categoryIndex].value,
            "contenido": postForm.content.value,
            "fechaPublic": postForm.publicDate.value,
            "likes": 0
        });
        //borramos de pantalla el formulario y mostramos el popUp de éxito de creación del post
        postForm.author.value = '';
        postForm.content.value = '';
        document.querySelector('.formWrapper').remove();
        publicationSuccess();
        //escuchamos cuando el usuario haga click a la "x" y le redirigimos al feed donde estará su post publicado
        document.querySelector('#closeIt').addEventListener('click', (event)=>{
            document.querySelector('#successWrap').remove();
            changeRouter('#/feed');
        });
    });
};

/* RETRIEVE POSTS LIST **esta función solamente
 consulta por toda la colección en la BBDD y para cada elemento que trae
 le hace "render" en el front-end gracias a la función renderPostInTemplate() */

export const retrievePosts = () => {
    db.collection('posts').get().then((snapshot) => {
        snapshot.docs.forEach(post => {
            return renderPostInTemplate(post);

        });
    });
  
};

/* RETRIEVE en TIEMPO REAL */

export const realTimeRetriever = () => {
    deletePost();
    db.collection('posts').onSnapshot(snapshot => {
        let postList = document.querySelector('.ulPosts');
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            //console.log(change.doc.data());
            if (change.type === 'added') {
                renderPostInTemplate(change.doc);
            } else if (change.type === 'removed') {
                let deletedPost = document.querySelector(`li[data-id="${change.doc.id}"]`);
               // deletedPost.remove();
                postList.removeChild(deletedPost);

            }
        });
    });

};

/* RETRIEVE POST DETAILS ---MUESTRA DETALLES DE UN SOLO POST ----*/

/**********Función de filtrado de resultados en el Feed de publicaciones*********/

const retrieveEventPosts = (property, value) => {
    db.collection('posts').where(`${property}`, '==', `${value}`).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    });

};

/**********Función para ordenar los datos que se traen de firebase 
 y se plasman en el Feed de publicaciones --se pueden unir where y order con un indexado en firebase, porsia*********/

const orderPosts = (propertyToOrder) => {
    db.collection('posts').order(`${propertyToOrder}`).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    });

};



/* UPDATE POST -- EDITAR UN SÓLO POST */


/* DELETE POSTS -- ELIMINAR UN POST ESPECÍFICO */

/********** Función para borrar posts de la BBDD *********/

export const deletePost = () => {
    window.addEventListener('click', (evt) => {
        if (evt.target.className === 'cross') {
            evt.stopPropagation();
            let clickedElement = evt.target;
            let parent = clickedElement.parentElement;
            let postIdClicked = parent.getAttribute('data-id');
            deleteConfiTemplate();
            console.log('postIdClicked is alive and is ', postIdClicked);
            // btnClicked();
            // return postIdClicked;
            document.querySelector('.popUp').addEventListener('click', (e) => {
                console.log(e.target);
                const btn = e.target.id;
                if (e.target.id == "deleteEx" || e.target.id == "regreted") {
                    console.log('entra al if', e.target.id);
                    if (btn == 'deleteEx') {
                        console.log('ha hecho click en deleteEx');
                        db.collection('posts').doc(postIdClicked).delete();
                        let popUp = document.querySelector('.popUp');
                        popUp.remove();
                        //document.querySelector('#confiWrap').removeChild('.popUp');
                    } else if (btn == 'regreted') {
                        //let daddy = document.querySelector('#confiWrap');
                        //daddy.removeChild(daddy.firstChild);
                        let popUp = document.querySelector('.popUp');
                        popUp.remove();
                    } else {
                        console.log('ha ocurrido un error');
                    }
                }
            });
        }
    });
};
