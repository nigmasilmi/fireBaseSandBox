/* Hacemos la referencia al elemento del DOM que vamos a manipular insertando la data que viene de
la base de datos */

const postList = document.querySelector('#posts-list');



//creamos la función que va a crear los elementos para incluir en el DOM

const renderPost = (post) => {
    let liElement = document.createElement('li');
    liElement.setAttribute('data-id', post.id);
    let author = document.createElement('span');
    let category = document.createElement('span');
    let content = document.createElement('span');
    let publicationDate = document.createElement('span');
    let likes = document.createElement('span');
    let deleteEx = document.createElement('div');
    deleteEx.setAttribute('class', 'cross');
    console.log(post.data());

    /*le asignamos al elemento li un atributo llamado data-id que va a ser igual 
    al propio id autogenerado por la base de datos */

    //console.log(liElement.setAttribute('data-id', post.id));

    /*ahora le agregamos el texto que va a ir en cada uno de los elementos
    post.data().autor eso quiere decir = de toda la data de la BBDD, de su contenido, 
    trae la propiedad autor */

    author.textContent = post.data().autor;
    category.textContent = post.data().categoria;
    content.textContent = post.data().contenido;
    publicationDate.textContent = post.data().fecha;
    deleteEx.textContent = 'x';
    likes.textContent = post.data().likes;

    //inyectamos cada valor traido en la lista que le corresponde
    liElement.appendChild(author);
    liElement.appendChild(category);
    liElement.appendChild(content);
    //liElement.appendChild(publicationDate);
    liElement.appendChild(likes);
    liElement.appendChild(deleteEx);

    //ahora inyectamos lo creado en el elemento del DOM que va a contener todo el resultado de la petición

    postList.appendChild(liElement);

    return postList;

};



/* traemos la referencia de la base de datos y le aplicamos el método get que se va a traer todos los objetos
    como esta petición es asíncrona y genera una promesa entonces le vamos a decir
    que cuando se ejecute el método sólo entonces ejecute la callback function (esto lo hacemos con .then)
    snapshot es lo que recibimos cuando se ejecuta el método get, que es una representación de toda la data de
la base de datos */
//Retrieve 
export const retrievePosts = () => {
    db.collection('posts').get().then((snapshot) => {
        console.log(snapshot.docs);
        snapshot.docs.forEach(post => {
            renderPost(post);
        });
    });
    
};