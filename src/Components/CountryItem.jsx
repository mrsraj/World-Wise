

function CountriesItem({ country }) {
    console.log("log :-", city);
    const { countryName, emoji, date } = country
    return (
        <li>
            <span>{emoji}</span>
            <h3>{countryName}</h3>
            <time datetime="">{date}</time>
        </li>
    )
}

export default CountriesItem;