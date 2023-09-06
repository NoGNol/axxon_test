import React, { useState, useEffect, useRef } from "react";

import { getData } from "../service/api";
import DataContext from "./DataContext";


const DataProvider = ({children}) =>{
    const [loading, setLoading] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [error, setError] = useState(false);
    const [users, setUsers] = useState([]);

    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        if (fetched || loading) return;
        setLoading(true);
        const updateState = (users, error) => {
            if (isMounted.current) {
                setUsers(users)
                setError(error)
                setLoading(false)
                setFetched(true)
            }    
        };

        getData()
        .then((usersWithResolvedOrganizations) => {
            updateState(usersWithResolvedOrganizations, false);
        })
        .catch(() => updateState([], true))

        return () => {
            isMounted.current = false;
        };
    }, [])

    return (
        <DataContext.Provider value={{users, error, loading}}>{children}</DataContext.Provider>
    )
}

export default DataProvider;