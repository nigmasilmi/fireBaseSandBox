// función que toma los valores ingresados en el formulario y los guarda en la BBDD
// CRUD ===== CREATE

// export const printPostForm = () => {
//     let envelope = document.createElement('div');
//     envelope.setAttribute('class', 'formWrapper');
   
//    let form = `<div class="formWrapper">
//    <form  method='POST' class="contentForm" id="add-post-form">
//        <!--En este input de autor el valor del nombre va a ser reemplazado por el nombre del usuario logueado-->
//        <input class="inputForm" type="text" name="author" placeholder="nombreDelUsuarioLogueado">
//        <select class="inputForm" name="categories">
//            <option class="inputForm" value="eventos">Eventos</option>
//            <option class="inputForm" value="seminarios">Seminarios</option>
//            <option class="inputForm" value="busqueda">Busco Músicx</option>
//        </select>
//        <textarea class="inputContent" name="content" id="contentID" cols="30" rows="10"></textarea>
//        <h4>Likes</h4><input type="text" name="likesNumber">
//        <button type="submit">Publica</button>
//    </form></div>`;
//    envelope.innerHTML = form;
//     return envelope;
// };


// export const createPost = () => {
//     const postForm = document.querySelector('#add-post-form');
//     postForm.addEventListener('submit', (evt) => {
//         evt.preventDefault();
//         let categoryIndex = postForm.categories.selectedIndex;
//         db.collection('posts').add({
//             "autor": postForm.author.value,
//             "categoria": postForm.categories.options[categoryIndex].value,
//             "contenido": postForm.content.value,
//             "likes": 0
//         });
//         //limpiamos el formulario luego de que el usuario pulse haga submit
//         postForm.author.value = '';
//         postForm.content.value = '';
//     });
// };
