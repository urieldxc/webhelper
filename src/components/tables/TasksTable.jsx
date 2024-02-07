import React from 'react'
import { TasksTableItem } from '../others/TasksTableItem'
//borrar, solo es para probar
import { testTask } from '../../utils/task'

export const TasksTable = () => {
  return (
    <div>
        <table className='table-auto'>
            <thead>
                <tr>
                    <th>Completed</th>
                    <th>Title</th>
                    <th>Status</th>
                    <th>Category</th>
                    <th>Date</th>
                </tr>
            </thead>

            <TasksTableItem task={testTask}/>
            <TasksTableItem task={testTask}/>
            <TasksTableItem task={testTask}/>
        </table>
    </div>
  )
}
