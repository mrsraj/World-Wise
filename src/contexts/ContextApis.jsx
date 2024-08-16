import { createContext, useContext, useEffect, useState } from "react";


const CitiesContext = createContext();

const BASE_URLS = 'http://localhost:9000';

function CitiesProvider({ children }) {
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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


    return (
        <CitiesContext.Provider
            value={{ cities, isLoading }}>
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