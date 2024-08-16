

function CountriesItem({ country }) {
    const { countryName, emoji, date } = country
    return (
        <li>
            <span>{emoji}</span>
            <h3>{countryName}</h3>
            <time>{date}</time>
        </li>
    )
}

export default CountriesItem;