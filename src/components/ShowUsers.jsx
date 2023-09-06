import React, { useCallback, useState } from "react";

import useData from "../hooks/useData";

import ResetSelector from "./ResetSelector";
import UsersList from "./UsersList";

const filterByOrganization = (users, orgId) => (
    users.filter(user => orgId !== undefined ? (orgId === user.organization.id) : true)
)
    
const ShowUsers = () =>{
    const [selectedOrg, setSelectedOrg] = useState();
    const [filteredUsers, setFilteredUsers] = useState([]);   
    const {users} = useData()

    const changeOrg = useCallback(
        (orgId) => {
            if(orgId === selectedOrg) return;
            setSelectedOrg(orgId);
            setFilteredUsers(filterByOrganization(users, orgId))
        }
    )

    if (filteredUsers.length === 0 && users.length !== 0){
        setFilteredUsers(filterByOrganization(users, selectedOrg))
    }

    return (
        <>
            <ResetSelector setSelectedOrg={changeOrg} selectedOrg={selectedOrg} />
            <UsersList users={filteredUsers} setSelectedOrg={changeOrg} />
        </>
        
    )
}
export default ShowUsers;