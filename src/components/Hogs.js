import React, {useState} from "react"
import hogs from "../porkers_data";
import HogTile from "./HogTile"

function Hogs(){
    const [isGreased, setIsGreased] = useState("All")

    function filterGrease(event){
        setIsGreased(event.target.value)
    }



    const displayHogs = hogs.map((hog, index) => {
        return <HogTile key={index} name={hog.name} specialty={hog.specialty} greased={hog.greased} weight={hog.weight} medal={hog['highest medal achieved']} />
    })
    .filter((hogs) => {
        return isGreased === "All"
    })
    

    return (
        <div>
            <select id="hogs-greased" onChange={filterGrease}>
                <option value="All">All</option>
                <option value="Greased">Greased Hogs</option>
                <option value="Non-Greased">Non-Greased Hogs</option>
            </select>
            <ul>
                {displayHogs}
            </ul>
        </div>
    )
}












export default Hogs 