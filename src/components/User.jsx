import React from "react";

import Organization from "./Organization";

const User = ({user, setSelectedOrg}) => {

    const { name, organization } = user;

    return (
        <div className="user-list-item" key={user.id}>
            <div>name: {name}</div>
            <Organization organization={organization} setSelectedOrg={setSelectedOrg} />
        </div>
    );
}

export default User;