import React from 'react';
// import Count from './Count.js'

function Task( task ) {
    return (
        <tr className="tasks">
            <td> {task.id} </td>
            <td> {task.type} </td>
            <td> {task.description} </td>
        </tr>
    );
}

export default Task;