import React, {Component} from 'react';

class First extends Component{

    number(){
        fetch('http://172.17.0.4/api/profiles',{
            method: 'GET'
        }).then(response => {
            return response.json()
        }).then(json => {
            console.log(json)
        }).catch(e => console.log(e))
        let i = 0;
        let Hellos = [];
        while(i++<this.props.number){
            Hellos[i] =
            <h1 key={i}>
                <b>HeLLo World!</b>
            </h1>
        }
        return Hellos;
    }
    render() {
        return (
            <div>
                {this.number()}
            </div>
        )
    }
}
First.defaultProps = {
    number: 1,
}
export default First