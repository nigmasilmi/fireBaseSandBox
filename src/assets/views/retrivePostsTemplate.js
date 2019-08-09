/* traemos la referencia de la base de datos y le aplicamos el método get que se va a traer todos los objetos
    como esta petición es asíncrona y genera una promesa entonces le vamos a decir
    que cuando se ejecute el método sólo entonces ejecute la callback function (esto lo hacemos con .then)
    snapshot es lo que recibimos cuando se ejecuta el método get, que es una representación de toda la data de
la base de datos */
//Retrieve 

export const retrievePosts = () => {
    let createPost = document.createElement('a');
    createPost.setAttribute('href', '#/createPost');
    createPost.textContent = 'Crear una publicación';

    let postList = document.createElement('ul');
    postList.setAttribute('class', 'ulPosts');
    document.getElementById('root').appendChild(postList);
    postList.appendChild(createPost);
    db.collection('posts').get().then((snapshot) => {
        snapshot.docs.forEach(post => {
                /* Hacemos la referencia al elemento del DOM que vamos a manipular insertando la data que viene de
la base de datos */

                const postList = document.querySelector('.ulPosts');
                //creamos la función que va a crear los elementos para incluir en el DOM

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

                /*ahora le agregamos el texto que va a ir en cada uno de los elementos
                post.data().autor eso quiere decir = de toda la data de la colección, 
                y de cada uno de sus objetos, 
                trae la propiedad autor */

                author.textContent = post.data().autor;
                category.textContent = post.data().categoria;
                content.textContent = post.data().contenido;
                publicationDate.textContent = post.data().fecha;
                deleteEx.textContent = 'x';
                likes.textContent = post.data().likes;

                //inyectamos cada valor traído en la lista que le corresponde
                liElement.appendChild(author);
                liElement.appendChild(category);
                liElement.appendChild(content);

                //liElement.appendChild(publicationDate);
                liElement.appendChild(likes);
                liElement.appendChild(deleteEx);

                //ahora inyectamos lo creado en el elemento del DOM que va a contener todo el resultado de la petición

                postList.appendChild(liElement);

                

            }

        );
    });
    return postList;
};