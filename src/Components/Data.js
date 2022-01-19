import Cards from "./StarshipCard";
import { useEffect, useState } from "react";

function Data() {
const [ship, setShip] = useState([])

useEffect(()=>{
    
    fetch( "https://swapi.dev/api/starships/" )
    .then((res)=> res.json())
    .then((data)=>{
        setShip(data.results)
        return console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })
},[] )

return(
    <div id="cardContainer">
        {ship.map((ship, index)=>{
            return <Cards ship={ship} key={index}/>
        })}
    </div>
)
}


export default Data;