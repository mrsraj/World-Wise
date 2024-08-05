
import CountriesItem from "./CountryItem"
function CountriesList({ cities, isLoading }) {
    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    if (!cities.length) return <h3>Add Countries clicking on a Country on map: </h3>

    return (
        <ul>
            {
                cities.map((country) => (
                    <CountriesItem country={country} key={country.id} />
                ))
            }
        </ul>
    )
}

export default CountriesList