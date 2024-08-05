

function CityItem({ city }) {
    console.log("log :-", city);
    const { cityName, emoji, date } = city
    return (
        <li>
            <span>{emoji}</span>
            <h3>{cityName}</h3>
            <time datetime="">{date}</time>
        </li>
    )
}

export default CityItem;