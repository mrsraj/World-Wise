
import CityItem from "./CityItem"
import { useCities } from "../contexts/ContextApis"

function Citylist() {
    const {cities, isLoading} = useCities();

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    if(!cities.length) return <h3>Add cities clicking on a city on map: </h3>

    return (
        <ul>
            {
                cities.map((city) =>( 
                    <CityItem city={city} key={city.id}/>
                ))
            }
        </ul>
    )
}

export default Citylist