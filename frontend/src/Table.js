import React, { Component } from 'react'

const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <th>Nome</th>
                <th>e-mail</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) =>{
    const rows = props.characterData.map((row,index) =>{
        return(
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.email}</td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render(){
        const { characterData } = this.props
        return(
            <table className='table'>
                <TableHeader/>
                <TableBody characterData = {characterData} />
            </table>
        )
    }
}
export default Table