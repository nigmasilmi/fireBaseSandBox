// función que toma los valores ingresados en el formulario y los guarda en la BBDD
// CRUD ===== CREATE
export const createUserProfile = () => {
    const profileForm = document.querySelector('#user-profile-form');
    profileForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        db.collection('users').add({
            "name": profileForm.userName.value,
            "favoriteBand": profileForm.favoriteBand.value,
            "genero": profileForm.gender.value,

        });
        //limpiamos el formulario luego de que el usuario pulse haga submit
        profileForm.userName.value = '';
        profileForm.favoriteBand.value = '';
        profileForm.gender.value = '';
    });
};