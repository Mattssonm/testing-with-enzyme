/*
Alternativ 1: räknare
Komponenten ska innehålla ett textfält och två button-element. Den ska dessutom skriva ut ett tal. Talet ska finnas lagrat i komponentens state. Användaren ska kunna skriva in strängar i textfältet. När man klickar på den första knappen ska värdet i state ökas; den andra knappen minskar värdet.
Om användaren skriver in ett tal i textfältet så ska det ersätta talet som finns lagrat i state. Men om användaren skriver in något som inte går att göra om till ett tal så ska värdet behållas.
*/
import React, { Component } from 'react';

class Counter extends Component {
    state = {
        value: 0,
    }


handleClickIncrease = event => {
    console.log('Increase clicked');
    this.setState({
        value: this.state.value +1,
    })
}
handleClickDecrease = event => {
    console.log('Decrease click')
    this.setState({
        value: this.state.value -1,
    })
}

handleChange = event => {
    let inputValue = Number(event.target.value);
    if(inputValue !== isNaN){
        this.setState({
            value: inputValue,
        })
    } else {
        this.setState({
            value: this.state.value,
        })
    }
}
	render() {
		return (
			<div>
				Value is: {this.state.value}<br/>
                <input placeholder="Enter a number" onChange={this.handleChange}/>
                <br />
				<button onClick={this.handleClickIncrease}>Increase</button>
				<button onClick={this.handleClickDecrease}>Decrease</button>
				
			</div>
        )
    }

}

export default Counter;
