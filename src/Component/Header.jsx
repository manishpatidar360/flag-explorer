import React, { useContext, useEffect, useState } from 'react'
import { themeContexts } from '../contexts/ThemeContexts';
import Search from './Search';

export default function Header() {
  const [mode , setMode]=useContext(themeContexts)
  // useEffect(()=>{
  //   if(mode=== 'Dark Mode'){
  //     document.body.classList.add('darkModee')
  //   }else{
  //     document.body.classList.remove('darkModee')
  //   }
  // },[mode])
  console.log(mode)
  return (
    <header className={`headerContainer ${mode==="Dark Mode" ? "darkModee" : ""}`} >
        <div className='header'>
            <h2>Where in the World </h2>
            <h3 className='darkMode' onClick={()=>{
              const ismode= mode=== "Light Mode" ? "Dark Mode" : "Light Mode"
                setMode(ismode)
               localStorage.setItem("theme", ismode)

            }}> {mode}</h3>
        </div>
        
    </header>
  )
}
