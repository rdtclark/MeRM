import React from 'react';


const Person = ({first_name, last_name}) => {

    return (
        <>
        <li>{first_name} {last_name}</li>
        </>
    )
}

export default Person;