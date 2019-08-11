
/********** Función que hace render de los resultados para mostrarlos en el template ********/

export const renderPostInTemplate = (post) => {
    let postList = document.createElement('ul');
    postList.setAttribute('class', 'ulPosts');
    document.getElementById('root').appendChild(postList);

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
    publicationDate.textContent = post.data().fechaPublic;
    deleteEx.textContent = 'x';
    likes.textContent = post.data().likes;

    /*inyectamos cada valor traído en la lista que le corresponde*/
    liElement.appendChild(author);
    liElement.appendChild(category);
    liElement.appendChild(content);
    liElement.appendChild(publicationDate);
    liElement.appendChild(likes);
    liElement.appendChild(deleteEx);

    /*ahora inyectamos lo creado en el elemento del DOM 
    que va a contener todo el resultado de la petición */
    console.log(typeof(liElement));
    postList.appendChild(liElement);

};


