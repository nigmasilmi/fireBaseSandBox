export const deletePost = () => {
    window.addEventListener('DOMContentLoaded', () => {
        let crossesContainer = document.getElementById('#posts-list');
        console.log(crossesContainer);
        crossesContainer.addEventListener('click', evt => {
            if (evt.target.className === 'cross') {
                let id = evt.target.parentElemet.getAttibute('data-id');
                console.log(id);
            }
        });
    });
};







// export const deletePost = ()=>{
//     let crosses = document.getElementsByClassName('cross');
//     console.log('esto es crosses' + crosses);
//     for(let cross of crosses){
//         console.log('esto es un elemento de crosses ' + cross);
//         cross.addEventListener('click', evt=>{
//             evt.stopPropagation();
//             let id = evt.target.parentElemet.getAttibute('data-id');
//             console.log(id);
//         });
//     }
//     console.log(crosses);
//     return crosses;


// };
