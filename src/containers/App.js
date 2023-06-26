import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/searchBox';
import 'tachyons';
import './App.css'
import Scroll from'../components/Scroll'

class App extends Component  {
    constructor(){
        super()
        this.state ={
            robots: [],
            searchfield: ''
        }
    }


    componentDidMount(){
        fetch('https://jsonplaceholder.cypress.io/users')
        .then(responce=> responce.json())
        .then(users => this.setState({ robots: users}));
    }
    onSearchChange = (event) =>{
        
        this.setState({searchfield: event.target.value})
        
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
            
        }else { 
            return(
        <div className='tc'>
            <h1 className='f1'> RoboFriends</h1>
            <Searchbox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots={filteredRobots}/>
            </Scroll>
        </div>

            );

        }
    
}
}
export default App;
