import React, { Component } from 'react';
// import {robots} from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { 
                return response.json(); 
            })
            .then(users => {
                this.setState({robots: users})
            });
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        console.log(event.target.value)
    }

    render() {
        const filteredRobots = this.state.robots.filter( robots => {
            return robots.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })

        return (
            <div class="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;