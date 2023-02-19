const postReducer = (state , action) => {

    switch(action.type){
        case"ADD_NEW_POST":{
            const newPost = action.payload.post
            return {posts: [newPost ,...state.posts]}
        }
        case"DELETE_POST":{
            const deleting = action.payload.postId
            let newPosts = state.posts.filter(post => post.id !==deleting)
            return{posts:newPosts}
        }
        default:
            return state
    }
}
export default postReducer