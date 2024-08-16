
import { Link } from "react-router-dom";

function CityItem({ city }) {

    const { cityName, emoji, date, id, position } = city
    return (
        <li>
            <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
                <span>{emoji}</span>
                <h3>{cityName}</h3>
                <time>{date}</time>
            </Link>
        </li>
    )
}

export default CityItem;