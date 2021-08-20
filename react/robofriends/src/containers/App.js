import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

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
        const { robots, searchfield } = this.state
        const filteredRobots = robots.filter( robot => {
            return robot.username.toLowerCase().includes(searchfield.toLowerCase());
        })

        return (
            <div class="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App;