import React from "react";

import useData from "./hooks/useData";

import UserPage from "./pages/userPage/UserPage";
import LoadPage from "./pages/loadPage/LoadPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

const Router = () => {
    // TODO should be written with react router 
    const {error, loading} = useData();
    if (error) return <ErrorPage/>;
    if (loading) return <LoadPage/>;
    return <UserPage/>;
}

export default Router;