/*
Alternativ 5: transformera text
Komponenten ska innehålla ett input-element som användaren kan skriva in text i. När användaren skriver i fältet ska komponenten skriva ut följande. Tänk på att skriva ut respektive sträng i ett HTML-element som du kan plocka ut med en selektor. Använd hellre CSS-klass än id.
texten baklänges, "10" → "01"
texten konverterad till bara stora bokstäver, "TeDeDe" → "TEDEDE"
texten som ett tal upphöjt till två, "5" → "25"
*/
import React, { Component } from 'react';

class Transformers extends Component {
    state = {
        reversed: '',
        capitalized: '',
        raiseTo: '',
    }

handleChange = event => {
    let inputValue = event.target.value;
    let reversed = '';
    let capitalized = inputValue.toUpperCase();
    let raiseTo = Number(inputValue)
    
    for (var i = inputValue.length - 1; i >= 0; i--) { 
        reversed += inputValue[i]; 
    }

    raiseTo = raiseTo*raiseTo;
    

    if(inputValue === ''){
        this.setState({
            reversed: '',
            capitalized: '',
            raiseTo: '',
        })
    }
    if(isNaN(raiseTo)){
 
        this.setState({
            reversed,
            capitalized
        })
    } else {
        this.setState({
            raiseTo
        })
        
    }
}
	render() {
		return (
			<div>
                <input placeholder="Enter a text or a number" onChange={this.handleChange}/>	
                <div>
				reversed: {this.state.reversed}</div><br/>
                <div>
				capitalized: {this.state.capitalized}</div><br/>
                <div>
				raised to: {this.state.raiseTo}</div><br/>			
			</div>
        )
    }

}

export default Transformers;
