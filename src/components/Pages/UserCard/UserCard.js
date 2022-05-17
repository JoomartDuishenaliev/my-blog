import React from 'react';

const UserCard = (props) => {
    return (
        <div>
            <p>{props.name}</p>
            <p>{props.username}</p>
            <p>{props.email}</p>
            <p>{props.phone}</p>
            <p>{props.company}</p>
        </div>
    );
};

export default UserCard;