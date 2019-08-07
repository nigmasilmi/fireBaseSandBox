


import {deletePost} from './deletePosts.js';
import {retrievePosts} from './retrievePosts.js';
import {createPost} from './createPost.js';
import {createUserProfile} from './userProfile.js';

retrievePosts();
deletePost();
createPost();
createUserProfile();
window.addEventListener('hashchange', (e)=>{
    console.log(e);

});




