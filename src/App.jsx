import React, { useReducer, useState } from 'react'
import { createContext, useContext} from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { correctState, gendertState, userState,  } from './atom'
import CreatePost from './Components/Conditional_rendering/CreatePost'
import Dashboard from './Components/Conditional_rendering/Dashboard'
import Login from './Components/Conditional_rendering/Login'
import Posts from './Components/Conditional_rendering/Posts'
import postReducer from './postReducer'
export const UserContext = createContext()
export const PostContext = createContext({posts:[]})
function App() {
  const initialPostState = useContext(PostContext)
 const [state , dispatch] = useReducer(postReducer , initialPostState)
  const [isCorrect ,setIsCorrect] = useRecoilState(correctState)
  const{name} = useRecoilValue(userState)
  if(!isCorrect){
    return  <Login />
  }
  return (
    <div>  
  <PostContext.Provider value={{state , dispatch}}>
  <UserContext.Provider value={name}>
   <Dashboard/>
    <CreatePost/>
    <Posts posts={state.posts}/>
   </UserContext.Provider>
  </PostContext.Provider>
   
    </div>
  )
}

export default App