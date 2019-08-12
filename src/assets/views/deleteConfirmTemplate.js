export const deleteConfiTemplate = () => {
    let confiWrapper = document.createElement('div');
    confiWrapper.setAttribute('id', 'confiWrap');
    let confiDeletePopUp = document.createElement('div');
    confiDeletePopUp.setAttribute('class', 'popUp');
    let message = document.createElement('p');
    message.textContent = '¿Confirma que desea eliminar el post seleccionado?';
    let exPointer = document.createElement('button');
    exPointer.setAttribute('id', 'deleteEx');
    exPointer.textContent = 'Confirmar eliminación';
    let myMistake = document.createElement('button');
    myMistake.setAttribute('id', 'regreted');
    myMistake.textContent = 'No, volver atrás';

    /*añadimos los elementos creados al contenedor confiDeletePopUp y este a su Wrapper
    por qué un wrapper? para poder seleccionar al nodo hijo y removerlo del DOM cuando se
    confirme o niegue la eliminación de un post */

    confiDeletePopUp.appendChild(message);
    confiDeletePopUp.appendChild(exPointer);
    confiDeletePopUp.appendChild(myMistake);

    confiWrapper.appendChild(confiDeletePopUp);

    let placingAnchor = document.querySelector('.ulPosts');
    placingAnchor.appendChild(confiWrapper);
   
    
};

