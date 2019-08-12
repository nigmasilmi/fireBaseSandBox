export const publicationSuccess = () => {
    let successWrapper = document.createElement('div');
    successWrapper.setAttribute('id', 'successWrap');
    let successPopUp = document.createElement('div');
    successPopUp.setAttribute('class', 'popUp');
    let message = document.createElement('p');
    message.textContent = 'Tu publicación ha sido creada exitosamente';
    let messageContinue = document.createElement('p');
    messageContinue.textContent = 'Cerrar y ver publicaciones';
    let closeWindow = document.createElement('span');
    closeWindow.setAttribute('id', 'closeIt');
    closeWindow.textContent = 'x';
    

    /*añadimos los elementos creados al contenedor successWrapper y este a su Wrapper
    por qué un wrapper? para poder escuchar el evento específicamente sin que intervengan los otros elementos*/

    successPopUp.appendChild(message);
    successPopUp.appendChild(messageContinue);
    successPopUp.appendChild(closeWindow);

    successWrapper.appendChild(successPopUp);

    let placingAnchor = document.querySelector('#root');
    placingAnchor.appendChild(successWrapper);
   
    
};

