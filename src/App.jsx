import { useState } from "react";
import Card from "./Component/Card";
import Container from "./Component/container";
import Header from "./Component/Header";
import Search from "./Component/Search";
import './index.css'
import { Outlet } from "react-router-dom";
import { themeContexts } from "./contexts/ThemeContexts";
export default function App(){
    const [mode , setMode]=useState(localStorage.getItem("theme") || 'Light Mode')
    return <themeContexts.Provider value={[mode, setMode]}>
     <Header />
    <Outlet />
    </themeContexts.Provider>
}