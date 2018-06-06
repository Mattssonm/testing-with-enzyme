import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: "",
      listedInputs: []
    }
  }

  handleInputChange = event => {
    this.setState({
      textInput: event.target.value
    })
  }

  handleClick = event => {
    this.setState(prevState => ({
      listedInputs: [...prevState.listedInputs, this.state.textInput]
    }));
  }

  render() {
    const makeListIntoLis = this.state.listedInputs.map((input, index) =>
      <li key={"makeListIntoLis" + input + index}>{input}</li>
    );

    return (
      <div>
        <h3>List</h3>
        <ul>{makeListIntoLis}</ul>
        <input type="text" placeholder="Write some text" onChange={this.handleInputChange}/>
        <button className="addText" onClick={this.handleClick}>Add Text</button>
      </div>
    );
  }
}

export default List;

/* instructions (swedish): Komponenten ska innehålla ett textfält där användaren
kan skriva in en text. Där ska finnas en button, som man kan klicka på för att
lägga till texten i en lista. Komponenten ska visa listan på något lämpligt sätt.
När listan renderas ska varje element i den förses med en button som kan användas
för att ta bort elementet. */
