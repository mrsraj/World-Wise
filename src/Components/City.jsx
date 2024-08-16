import { useParams, useSearchParams } from "react-router-dom";


function City() {

    //code for retrive data from urls using useSearchParams
    const { id } = useParams();
    const [searchParams, setUseParams] = useSearchParams();

    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');

    const currentCity = {
        cityName: "Saharsa",
        emoji: "🌹",
        Date: "12/05/2024",
        note: "My Home City"
    }

    const { cityName, emoji, note } = currentCity

    return (
        <>
            {id}
            <h3>Position</h3>
            <p>lan{lat}</p>
            <p>lng{lng}</p>
            {emoji}
            {note}
        </>
    )
}

export default City;