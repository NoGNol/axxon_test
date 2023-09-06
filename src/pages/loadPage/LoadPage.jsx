import React from "react";
import Spinner from '../../components/Spinner'
import loading from './loading.gif'

const LoadPage = () => {

    return (
        <div className="loading">
            
            <img src={loading} alt="loading.gif" />
            <span><Spinner/></span>
        </div>  
    )
}
export default LoadPage