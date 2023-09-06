import React from "react"

import User from "./User";

const UsersList = ({users, setSelectedOrg}) =>{

    
    if(!Array.isArray(users)){
        return null; // TODO move it to the component
    }

    return(
        <div className="user-list">
            {users.map(user => <User user={user} key={user.id} setSelectedOrg={setSelectedOrg} />)}
        </div>
    )
}




export default UsersList;