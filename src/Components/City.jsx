import { useParams, useSearchParams } from "react-router-dom";
import { useCities } from "../contexts/ContextApis";
import { useEffect } from "react";


function City() {

    //code for retrive data from urls using useSearchParams
    const { id } = useParams();
    // const [searchParams, setUseParams] = useSearchParams();

    // const lat = searchParams.get('lat');
    // const lng = searchParams.get('lng');

    const { getCityFun, currCity, isLoading } = useCities();


    useEffect(() => {
        getCityFun(id);
    }, [id]);

    const { emoji, cityName, position, date } = currCity;

    if (isLoading) {
        return (
            <p>Loading...</p>
        )
    }

    return (
        <>
            <h2><span>{emoji}</span>{cityName}</h2>
        </>
    )
}

export default City;