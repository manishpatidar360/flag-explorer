import { useEffect, useState } from 'react'
import Card from './Card'
import ShimarEffect from './ShimarEffect.jsx'
// import Flag from "../flag";


export default function Container({query}) {
  const [flag, setFlag]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then((response)=> response.json())
    .then((data)=> {
     setFlag(data)
    })
  },[])
    const Arr= flag.filter((countriee)=>countriee.name.common.toLowerCase().includes(query)).map((countrieFlag,i)=>{
        return <Card key={i} population={countrieFlag.population} name={countrieFlag.name.common} url={countrieFlag.flags.svg} Region={countrieFlag.region} Capital={countrieFlag.capital} data={countrieFlag}/>
       })

  return (
    <>
      {(flag.length===0) ? (
      <ShimarEffect />
      ) :(
    <div className='countriesContainer'> 
     {Arr}
    </div>)}
    </>
  )
}
