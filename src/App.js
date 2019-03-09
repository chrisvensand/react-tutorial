import React, { Component } from 'react';
import Table from './Table.js';
import Form from './Form.js'

class App extends Component {
    render() {
        return (
            <body>
                <div className="App">
                    <h1>Hello, React!</h1>
                </div>
                <div className="container">
                    <Table
                        characterData={this.state.characters}
                        removeCharacter={this.removeCharacter}
                    />
                    <Form handleSubmit={this.handleSubmit} />
                </div>
            </body>
        );
    }

    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }
}

export default App;