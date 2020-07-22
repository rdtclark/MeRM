import React from 'react';
import PeopleList from '../components/PeopleList'

class MermContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            people: []
        }
    }

    componentDidMount(){
        const url = 'http://localhost:3000/people'
        fetch(url)
        .then(res => res.json())
        .then(data => this.setState({people: data}))
    }

    render() {
        return(
            <>
            <PeopleList people={this.state.people}/>
            </>
        )
    }
}

export default MermContainer;