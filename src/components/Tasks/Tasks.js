import React from 'react'
import { useSelector } from 'react-redux'

import Task from './Task/Task'

const Tasks = () => {
    const Tasks = useSelector((state) => state.tasks.list)
    console.log(Tasks);
    return (
        <>
            <Task/>
            <Task/>
        </>
    )
}

export default Tasks
