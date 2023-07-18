import React, { Component } from 'react'
import Table from './Table'

class App extends Component {
    render() {
        const characteres = [
            {
                name: 'Nat',
                email: 'nat@gmail.com'
            },
            {
                name:'joao',
                email: 'joao@gmail.com'
            },
            {
                name:'Anna',
                email: 'anna@gmail.com'
            }
        ]
        return (
        <div className="container">
        <Table characterData={characteres} />
        </div>)
    }
}
export default App