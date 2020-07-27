import React from 'react';
import Person from './Person';

const PeopleList = ({people}) => {

    const persons = people.map(person => {

        return (
            <Person
            key={person.id}
            first_name={person.first_name}
            last_name={person.last_name}/>
        )
    })

    return(
        <>
        <ul>
        {persons}
        </ul>
        </>
    )
}

export default PeopleList;