
import { useCities } from "../contexts/ContextApis";
import CountriesItem from "./CountryItem"

function CountriesList() {
    const {cities, isLoading} = useCities();   
    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    if (!cities.length) return (<h3>Add Countries clicking on a Country on map: </h3>);

    const countries = cities.reduce((arr, city) => {
        if (!arr.some(el => el.country === city.countryName)) {
            return [...arr, { countryName: city.countryName, emoji: city.emoji, id:city.id, date:city.date }];
        }
        return arr;
    }, []);

    return (
        <ul>
            {
                countries.map((country) => (
                    <CountriesItem country={country} key={country.id} />
                ))
            }
        </ul>
    )
}

export default CountriesList