import React, {Component} from 'react';

class Klaslokaal extends Component{

    state = {
        lokaalnr : "1337"
    }


    klikken = () => {
        this.setState({
            lokaalnr : Math.floor(Math.random() * 1000)
        })
    };


    render(){
        return(
            <div>
            
                <p>Hoi ik ben een klaslokaal</p>
                <p>Mijn lokaalnummer is {this.state.lokaalnr}</p>
                <button onClick={this.klikken}>Klik hier om lokaal te updaten</button>
            </div>
            
        )
    }
}

export default Klaslokaal;