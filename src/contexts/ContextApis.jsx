import { createContext, useContext, useEffect, useState } from "react";


const CitiesContext = createContext();

const BASE_URLS = 'http://localhost:9000';

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currCity, setCurrentCity] = useState({});

    useEffect(() => {

        async function fetchData() {
            try {
                const res = await fetch(`${BASE_URLS}/Details`);
                const data = await res.json();
                setCities(data);
            } catch (error) {
                alert("Something was wrong:");
            } finally {
                setIsLoading(false);
            }
        }

        //Data fetching delay code:
        setTimeout(() => {
            fetchData();
        }, 1000);

    }, [])

    async function getCityFun(id) {
        setIsLoading(true);
        try {
            const res = await fetch(`${BASE_URLS}/Details/${id}`);
            const data = await res.json();
            setCurrentCity(data);
        } catch (error) {
            alert("Something was wrong:");
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <CitiesContext.Provider
            value={{ cities, isLoading, currCity, getCityFun, }}>
            {children}
        </CitiesContext.Provider>
    )

}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined) {
        throw new Error("CitiesContext was used outside the contextProvider");
    }
    return context;
}

export { CitiesProvider, useCities };