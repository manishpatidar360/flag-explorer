import React, { useContext } from 'react'
import { useState } from "react";
import Card from "./Card";
import Container from "./Container";
import Header from "./Header";
import Search from "./Search";
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
