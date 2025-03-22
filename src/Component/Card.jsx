import { Link } from "react-router-dom"
// import flag from "../flag"
export default function Card({url,name,Region, Capital,population,data}) {
  return (
    
    <Link className="anchoreTage" to={`/${name}`} state={data}>
    <img src={url}></img>
    <h3>{name}</h3>
    <p>population: <b> { population}</b></p>
    <p>Region <b> { Region }</b></p>
    <p>Capital<b> {Capital}</b></p>
    </Link>
  )
}
