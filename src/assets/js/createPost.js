// función que toma los valores ingresados en el formulario y los guarda en la BBDD
// CRUD ===== CREATE
export const createPost = () => {
    const postForm = document.querySelector('#add-post-form');
    postForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        console.log('esto es dbcollection ' + db.collection('posts'));
        let categoryIndex = postForm.categories.selectedIndex;
        db.collection('posts').add({
            "autor": postForm.author.value,
            "categoria": postForm.categories.options[categoryIndex].value,
            "contenido": postForm.content.value,
            "likes": 0
        });
        //limpiamos el formulario luego de que el usuario pulse haga submit
        postForm.author.value = '';
        postForm.content.value = '';
    });
};
