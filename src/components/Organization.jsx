import React from "react";

const isValidOrganization = (organization) => { 
    if(typeof organization !== 'object') return false;
    if(organization === null) return false;
    const {name, id} = organization;
    if (typeof name !== 'string') return false;
    if (!Number.isInteger(id)) return false;
    return true;
}

const Organization = ({organization, setSelectedOrg}) => {
    if(!isValidOrganization(organization)) return null;
    const {name, id} = organization;
    return (
        <div className="org" onClick={() => setSelectedOrg(id)}>org: {name}</div>
    )
}

export default Organization