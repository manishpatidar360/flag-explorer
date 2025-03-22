import React from 'react'
// import '../style.css'
export default function ShimarEffect() {
    const mapped= new Array(10).fill(undefined).map((e, i)=>{
        return (
            <div className='anchoreTage  shimar' key={i}></div>
        )
    })
  return (

   <div className='countriesContainer'> 
    {
        mapped
    }
  </div>
  )
}
