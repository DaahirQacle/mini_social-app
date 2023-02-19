import React, { useContext, useRef, useState } from 'react'
import {  useRecoilValue } from 'recoil'
import { PostContext } from '../../App'
import { userState } from '../../atom'
import Posts from './Posts'

function CreatePost() {
  const {dispatch}=useContext(PostContext)
  const imageRef = useRef()
  const contentRef = useRef()
    const{name} = useRecoilValue(userState)
    const[content , setContent] = useState('')
    const[file , setFile] = useState(null)
    const submitHandle = (e)=>{
        e.preventDefault()
       const storePost = {content , file , name , id:Date.now()}
      dispatch({type:"ADD_NEW_POST" , payload:{post:storePost}})
       setContent('')
       setFile(null)
       imageRef.current.value = null
       contentRef.current.focus()
    
      
    }
  return (
    <>
   <form action="" onSubmit={submitHandle}>
     <h1>Create New Post</h1>
    <textarea
     onChange={(e)=>setContent(e.target.value)}
     value={content}
     ref={contentRef}
    /><br /><br />
    <input type="file"
    onChange={(e)=>setFile(e.target.files[0])}
    ref={imageRef}
     /> <br /> <br />
    <button type='submit'> 
    Submit</button>
   </form>

   </>
  )
}

export default CreatePost