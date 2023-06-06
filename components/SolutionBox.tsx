import React, { useState } from 'react'
import '../styles/Solution.css'
type Solution ={
  Solution:string;
}

const SolutionBox = ({Solution}:Solution) => {
  const [FullSolution,setFullSolution]=useState(false)
  const displaySolution = Solution.substring(0,600)

  return (
    <div>
      <div className="solution-title">Text Solution</div>
      <div className="solution-box">
        {FullSolution ? Solution : <>{displaySolution}... <span style={{color:'blue', cursor:'pointer',padding:'0 30px'}} onClick={()=>{setFullSolution((prev)=>!prev)}}>View full solution</span></>}
      </div>
    </div>
  )
}

export default SolutionBox
