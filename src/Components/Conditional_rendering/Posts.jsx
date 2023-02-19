import React from 'react'
import { useRecoilValue } from 'recoil'
import { userState } from '../../atom'
import Post from './Post'

function Posts({posts}) {
  const{name} = useRecoilValue(userState)
 
  return (
    <div>
         {
    posts.map((item , index)=>{
        return <Post item={item} key={index}/>
    })
  }
    </div>
  )
}

export default Posts