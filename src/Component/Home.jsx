import React, { useContext } from 'react'
import { useState } from "react";
import Card from "./Card.jsx";
import Container from "./Container.jsx";
import Header from "./Header.jsx";
import Search from "./Search.jsx";
import '../index.css'
import { themeContexts } from '../contexts/ThemeContexts';
export default function Home() {
    const [query, setQuery]= useState('');
   const [theme]=useContext(themeContexts)
  return (
  <main className={theme==="Dark Mode"? "darkModee" : ""}>
   <Search setQuery={setQuery}/>
   <Container query={query}/>
  </main>
)
}
