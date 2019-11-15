import React, {Component} from 'react';
import axios from 'axios';

class Kattenfeitjes extends Component{
    state = {
        kattenfeitje : 'nog geen kattenfeitje opgehaald'

    }

    veranderen = (event) => {
        this.setState({kattenfeitje : event.target.value})
    }

    klik = () =>{
        
     axios.get('https://cat-fact.herokuapp.com/facts/random').then(response => this.setState( {kattenfeitje : response.data.text}));
       
    }


    render(){
        return(
        <div>
        <input type="text" onChange={this.veranderen}></input>
        <button onClick={this.klik}>Haal kattenfeitje op</button>
        <p>Kattenfeitje: {this.state.kattenfeitje}</p>

        </div>
        )

    }

}

export default Kattenfeitjes;