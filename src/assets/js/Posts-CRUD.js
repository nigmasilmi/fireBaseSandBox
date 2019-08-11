/* ESTE ARCHIVO AGRUPA TODAS LAS FUNCIONES CRUD RELACIONADAS CON LOS POSTS */
import {
    renderPostInTemplate
} from './../views/retrivePostsTemplate.js';
/* CREATE POST */

export const createPost = () => {
    // llamamos a la función que crea el formulario y lo pinta en el html 
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
        //limpiamos el formulario luego de que el usuario pulse haga submit
        postForm.author.value = '';
        postForm.content.value = '';
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
    //cargamos las funciones relacionadas para que estén disponibles cuando se crea la lista de posts

    deletePost();
};

/* RETRIEVE en TIEMPO REAL */

export const realTimeRetriever = () => {
    deletePost();
    db.collection('posts').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log(change.type);
            if (change.type === 'added') {
                renderPostInTemplate(change.doc);
            } else if (change.type === 'removed') {
                let postList = document.querySelector('.ulPosts');
                console.log('entra en el else if');
               // let deletedPost = postList.querySelector(`[data-id= "${change.doc.id}"]`);
                let deletedPost = postList.querySelectorAll('[data-id=" + change.doc.id + "]');
                console.log(`[data-id= "${change.doc.id}"]`);
                console.log(deletedPost);
               // postList.removeChild(deletedPost);
               deletedPost.parentElement.style.backgroundColor = 'green';
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

            /*seleccionamos el doc (entrada/post/objeto) con el id de interés y le aplicamos
             el método de borrar entradas de firestore llamado "delete" */
            db.collection('posts').doc(postIdClicked).delete();

        }
    });

};

