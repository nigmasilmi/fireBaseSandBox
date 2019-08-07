
export const deletePost = ()=>{
    let crosses = document.getElementsByClassName('cross');
    for(let f=0; f<crosses.length; f++){
        crosses[f].addEventListener('click', evt=>{
            evt.stopPropagation();
            let id = evt.target.parentElemet.getAttibute('data-id');
            console.log(id);
        });
    }
    console.log(crosses);
    return crosses;
    
    
};


