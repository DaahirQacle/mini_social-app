import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { correctState, gendertState, userState } from '../../atom'



function Dashboard() {
  const [isCorrect , setIsCorrect] = useRecoilState(correctState)
  const [ismale] = useRecoilState(gendertState)
  const{name} = useRecoilValue(userState)
  return (
    <div>
        <span>{`Welcome ${ismale ? 'Mss' : 'Mr'}  ${name}`} </span> 
        <button onClick={()=>setIsCorrect(false)}>Logout</button>
        <div>
         
        </div>
    </div>
  )
}

export default Dashboard