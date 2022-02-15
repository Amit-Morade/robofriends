import CardList from './CardList'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import React from 'react'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET'
        })
        .then((response) => response.json())
        .then((robots) => this.setState({robots: robots}))
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
    }

    render(){
        const filteredRobots = this.state.robots.filter((robot) => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/> 
                </Scroll>
            </div>
        )
    }
    
}

export default App

