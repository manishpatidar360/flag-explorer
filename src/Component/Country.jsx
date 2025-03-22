import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useOutletContext, useParams } from 'react-router-dom';
import Shimarcomponent from './Shimarcomponent.jsx';
import ShimarEffect from './ShimarEffect.jsx';
import { themeContexts } from '../contexts/ThemeContexts.js';

export default function Country() {
    const [dATA, setDATA ]=useState(null)
    const {state}=useLocation()
    const params = useParams();
    const countryname= params.country
    const [theme]= useContext(themeContexts)

    const [notFound, setNotFound]=useState(false)
    const updateData=(data)=>{
      setDATA({
        NAME: data.name.common,
           name: data.name.official,
          url:   data.flags.svg,
    population:  data.population,
        Region: data.region,
        Language: data.languages.eng ,
        capital: data.capital[0],
        currency: Object.values(data.currencies).map((cur)=>{
         return cur.name
        }).join(','),
        currencySymbol: Object.values(data.currencies).map((cur)=>{
          return cur.symbol
         }).join(','),
      })
      
    }
    useEffect(()=>{
     if(state){
      updateData(state)
      return ;
     }
      fetch(`https://restcountries.com/v3.1/name/${countryname}?fullText=true`)
      .then((response)=> response.json())
      .then(([data])=> {
        console.log(data)
         updateData(data)
      }).catch((err)=>{
        setNotFound(true)
      })
    },[countryname])
    if(notFound){
      return <h1>the page is notfound </h1>
    }
  return (
    (dATA===null)? (<Shimarcomponent />) : (
    <>
   {/* <Link onClick={()=> history.back()} className='back'> ⬅️BACK </Link> */}
   <div className={`maincontainer ${theme=== "Dark Mode" ? "darkModee": ""}`}>
   <div className='countryimg'>
    <img src={dATA.url} className="img-fluid"/>
   </div>
   <div className='content'>
    <h1>{dATA.NAME}</h1>
    <p>name: <b>{dATA.name}</b></p>
   <p>  Region: <b> { dATA.Region}</b></p>
   <p>  population: <b> { dATA.population}</b></p>
   <p> Language: <b> { dATA.Language}</b></p>
   <p> capital: <b> { dATA.capital}</b></p>
   <p> currency:<b> { dATA.currency}</b></p>
   <p> currencySymbol:<b> { dATA.currencySymbol}</b></p>
   </div>
   </div>
   </>
    )
  )
} 
