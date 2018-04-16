import React from 'react'

import IconButton from '../template/iconButton'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return (
            list.map(todo => (
                <tr key={todo._id}>
                    <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                    <td>
                        <IconButton hide={todo.done} icon='check' style="success" onClick={() => props.handleMarkAsDone(todo)}/>
                        <IconButton hide={!todo.done} icon='undo' style="warning" onClick={() => props.handleMarkAsPending(todo)}/>
                        <IconButton hide={!todo.done} icon='trash-o' style="danger" onClick={() => props.handleRemove(todo)}/>
                    </td>
                </tr>
            ))
        )
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}