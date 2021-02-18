import React, {useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch} from 'react-redux'
import useStyles from './styles'
import { createTask } from '../../actions/TasksAction'
import { TextField, Button, Typography, Paper} from '@material-ui/core'

const initialFieldValues =  {
    title: '', createdBy: '', taskType: '',
    comments: [], assignedTo: '', auditId: '', 
    isComplete: false, selectedDoc: ''
}

const Form = () => {


    const [taskData, setTaskData] = useState({...initialFieldValues})
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createTask(taskData))
    }

    const clear = () => {

    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Create a Task</Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    value={taskData.title}
                    onChange={(e) => setTaskData({...taskData, title: e.target.value})}/>
                <TextField
                    name="createdBy"
                    variant="outlined"
                    label="Created By"
                    fullWidth
                    value={taskData.createdBy}
                    onChange={(e) => setTaskData({...taskData, createdBy: e.target.value})}/>
                <TextField
                    name="type"
                    variant="outlined"
                    label="Task Type"
                    fullWidth
                    value={taskData.taskType}
                    onChange={(e) => setTaskData({...taskData, taskType: e.target.value})}/>
                <TextField
                    name="assignedTo"
                    variant="outlined"
                    label="Assigned To"
                    fullWidth
                    value={taskData.assignedTo}
                    onChange={(e) => setTaskData({...taskData, assignedTo: e.target.value})}/>
                <TextField
                    name="auditId"
                    variant="outlined"
                    label="Audit Id"
                    fullWidth
                    value={taskData.auditId}
                    onChange={(e) => setTaskData({...taskData, auditId: e.target.value})}/>
                <div className={classes.fileInput}>
                <FileBase
                    type='file'
                    multiple={false}
                    onDone={({base64}) => setTaskData({ ...taskData, selectedDoc: base64 })}
                /></div>
                <Button className={classes.buttonSubmit} variant="container" color="primary" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} type="submit" fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
