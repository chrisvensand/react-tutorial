import React, { Component } from 'react';
import Table from './Table.js';

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
                </div>
            </body>
        );
    }

    state = {
        characters: [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Bouncer'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ]
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }
}

export default App;