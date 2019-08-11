export const deleteConfirmation = () => {
    let confiDeletePopUp = document.createElement('div');
    confiDeletePopUp.setAttribute('class', 'popUp');
    let message = document.createElement('p');
    message.textContent = '¿Confirma que desea eliminar el post seleccionado?';
    let exPointer = document.createElement('button');
    exPointer.setAttribute('id', 'deleteEx');
    exPointer.textContent = 'Confirmar eliminación';
    let myMistake = document.createElement('button');
    exPointer.setAttribute('id', 'regreted');
    myMistake.textContent = 'No, volver atrás';

    //añadimos los elementos creados al contenedor confiDeletePopUp

    confiDeletePopUp.appendChild(message);
    confiDeletePopUp.appendChild(exPointer);
    confiDeletePopUp.appendChild(myMistake);

    let placingAnchor = document.querySelector('.ulPosts');
    placingAnchor.appendChild(confiDeletePopUp);
};