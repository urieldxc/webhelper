import React from 'react'

export const TasksTableItem = ({task}) => {
    const checkCompleted = () =>{
        return task.completed ? 
        <input id="check" type='checkbox' /> 
        : <input id="check" type='checkbox' />
    }
    return (
        <tbody>
            <tr>
                <td>{checkCompleted()}</td>
                <td>{task.title}</td>
                <td>{task.status}</td>
                <td>{task.category}</td>
                <td>{task.date}</td>
            </tr>
        </tbody>
    )
}
