import React from "react"

const ResetSelector = ({setSelectedOrg, selectedOrg}) =>{

    const resetSelector = () =>{
        setSelectedOrg(undefined)
    }

    if(selectedOrg === undefined) return null;

    return (
        <button onClick={() => resetSelector()}>
            reset selected org
        </button>
    )
}

export default ResetSelector