import React from 'react'

export default function Search({setQuery}) {
    
  return (
    <div className='divSearch'>
    <input onChange={(e)=> setQuery(e.target.value.toLowerCase())} type="text" className='inputeSearch' placeholder='Type contires name' />
    </div>
  )
  }
