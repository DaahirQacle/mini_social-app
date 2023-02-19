import React, { useContext } from 'react'
import { PostContext, UserContext } from '../../App';
function Post({item}) {
    const{name , content , file , id} = item
    let currentUser = useContext(UserContext)
    let {dispatch} = useContext(PostContext)
    const isCurrenUser = currentUser==name;
    const deletePost =()=>{
      dispatch({type:"DELETE_POST" , payload:{postId:id}})
    }
   const current = new Date()
   const time = current.toLocaleTimeString("en-US");
  return (
    <div>
         <h5>{item.content }</h5>
  {file &&  <img src={URL.createObjectURL(file )} alt="" />} <br />
 {content && <span style={{color:isCurrenUser&& 'green'}}>{name } {time} </span>}
 {isCurrenUser && <button onClick={deletePost}>Delete</button>}
 

    </div>
  )
}

export default Post