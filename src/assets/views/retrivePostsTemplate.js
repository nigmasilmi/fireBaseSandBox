/* traemos la referencia de la base de datos y le aplicamos el método get que se va a traer todos los objetos
    como esta petición es asíncrona y genera una promesa entonces le vamos a decir
    que cuando se ejecute el método sólo entonces ejecute la callback function (esto lo hacemos con .then)
    snapshot es lo que recibimos cuando se ejecuta el método get, que es una representación de toda la data de
la base de datos */
//Retrieve 

/****** Ubicar este código en un lugar más apropiado */
let createPost = document.createElement('a');
    createPost.setAttribute('href', '#/createPost');
    createPost.textContent = 'Crear una publicación';

/********** Función que hace render de los resultados para mostrarlos en el template ********/

export const retrievePosts = () => {
    
    let postList = document.createElement('ul');
    postList.setAttribute('class', 'ulPosts');
    document.getElementById('root').appendChild(postList);
    postList.appendChild(createPost);
    db.collection('posts').get().then((snapshot) => {
        snapshot.docs.forEach(post => {
            const postList = document.querySelector('.ulPosts');
            let liElement = document.createElement('li');
            /*le asignamos al elemento li un atributo llamado data-id que va a ser igual 
            al propio id autogenerado por la base de datos */
            liElement.setAttribute('data-id', post.id);
            let author = document.createElement('span');
            let category = document.createElement('span');
            let content = document.createElement('span');
            let publicationDate = document.createElement('span');
            let likes = document.createElement('span');
            let deleteEx = document.createElement('div');
            deleteEx.setAttribute('class', 'cross');

            /*ahora le agregamos el valor que va a ir en cada uno de los elementos */
            author.textContent = post.data().autor;
            category.textContent = post.data().categoria;
            content.textContent = post.data().contenido;
            publicationDate.textContent = post.data().fecha;
            deleteEx.textContent = 'x';
            likes.textContent = post.data().likes;

            /*inyectamos cada valor traído en la lista que le corresponde*/
            liElement.appendChild(author);
            liElement.appendChild(category);
            liElement.appendChild(content);
            //liElement.appendChild(publicationDate);
            liElement.appendChild(likes);
            liElement.appendChild(deleteEx);

            /*ahora inyectamos lo creado en el elemento del DOM 
            que va a contener todo el resultado de la petición */
            postList.appendChild(liElement);
        });
    });
    return postList;
};


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
/* llamamos a la función inmediatamente después de declarada para que esté lista para ejecutarse */
deletePost();



/**********Función de filtrado de resultados en el Feed de publicaciones*********/

const retrieveEventPosts = (property, value) => {
    db.collection('posts').where(`${property}`, '==', `${value}`).get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            console.log(doc.data());
        });
    });

};
/* Esto es un ejemplo didáctico, abran las consolas del browser para ver resultados */
console.log('Aquí vamos a pedir los posts cuya propiedad "categoria" sea igual a "eventos"');
console.log(retrieveEventPosts('categoria', 'eventos'));
console.log('Aquí vamos a pedir los posts cuya propiedad "autor" sea igual a "Pedrito"');
console.log(retrieveEventPosts('autor', 'Pedrito'));