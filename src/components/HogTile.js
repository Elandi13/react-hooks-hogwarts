import React, {useState} from "react"
import hogs from "../porkers_data";
import augustus_gloop from "../assets/augustus_gloop.jpg";
import babe from "../assets/babe.jpg";
import bailey from "../assets/bailey.jpg";
import cherub from "../assets/cherub.jpg";
import galaxy_note from "../assets/galaxy_note.jpg";
import leggo_my_eggo from "../assets/leggo_my_eggo.jpg";
import peppa from "../assets/peppa.jpg";
import piggy_smalls from "../assets/piggy_smalls.jpg";
import piglet from "../assets/piglet.jpg";
import porkchop from "../assets/porkchop.jpg";
import trouble from "../assets/trouble.jpg";
import truffle_shuffle from "../assets/truffle_shuffle.jpg";

function HogTile({ name, specialty, greased, weight, medal }){
    const images = {
        "Augustus Gloop": augustus_gloop,
        "Babe": babe,
        "Bailey": bailey,
        "Cherub": cherub,
        "Galaxy Note": galaxy_note,
        "Leggo My Eggo": leggo_my_eggo,
        "Peppa": peppa,
        "Piggy smalls": piggy_smalls,
        "Piglet": piglet,
        "Porkchop": porkchop,
        "Trouble": trouble,
        "Truffle Shuffle": truffle_shuffle
    }

    const [details, setDetails] = useState(false)

    function showDetails(event) {
        event.preventDefault()
        setDetails((details => !details)
        )}
    
    
    return (
        <div>
            <div className="pigTile" onClick={showDetails}>
               <h1> {name} </h1>
                <div className="maxPigTile, minPigTile">
                {details ? 
                <li>
                <h3>Speciality: {specialty}</h3>
                {greased ? <h3>Greased</h3> : null}
                <h3>Weight: {weight} lbs</h3>
                <h3>Highest Medal Achieved: {medal.toUpperCase()}</h3>
                </li>
                : <img src={images[name]} alt={name} className="maxPigTile, minPigTile"/>}
                </div>
            </div>
        </div>
    )
}


export default HogTile