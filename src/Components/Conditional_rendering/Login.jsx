import React, { useState } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { correctState, gendertState, userState } from '../../atom'
var users = [
  {
    name:'guled' ,
    pass:'123',
    gender:'male'
  },
  {
    name:'ayan' ,
    pass:'123',
    gender:'female'
  },
  {
    name:'akram' ,
    pass:'123',
    gender:'male'
  },
]
function Login() {
  const [isCorrect ,setIsCorrect] = useRecoilState(correctState)
  const [ismale ,setIsmale] = useRecoilState(gendertState)
  const [user , setUser] = useRecoilState(userState)
  const{name , pass} = useRecoilValue(userState)
 const submitHandle = (e)=>{
  e.preventDefault()
  for(let i = 0 ; i<users.length; i++){
    if(name===users[i].name && pass===users[i].pass){
      console.log(users[i].name)
      setIsCorrect(true)
      break
    }

    else{
      setIsCorrect(false)
     
    }
    if(users[i].gender=='male'){
      setIsmale(true)
    }
    else{setIsmale(false)}
  }
  
 }


  return (
    <div>

      <h1>Login Form</h1>
      <form action="" onSubmit={submitHandle}>
      <input type="text" placeholder='Username'
      onChange={(e)=>setUser({...user ,name:e.target.value})}
       /> <br /> <br /> 
      <input type="text" placeholder='Password' 
      onChange={(e)=>setUser({...user ,pass:e.target.value})}
      /> <br /> <br />
  
      
      <button type='submit'>Login</button>
      </form>
   
    </div>
  )
}

export default Login