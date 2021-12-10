import React from 'react';
import Task from './CustomerTask';

function CustomerTaskList({ tasks }) {
    return (
        <div>
            <table>
                {/* <caption>Open Actions / Tickets</caption> */}
                <thead>
                    <tr>
                        <th> I.D. </th>
                        <th> Type </th>
                        <th> Description </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task, i) => <Task id={task.id} type={task.type} description={task.description} key={i} />)}
                </tbody>
            </table>
        </div>
    );
}

export default CustomerTaskList;