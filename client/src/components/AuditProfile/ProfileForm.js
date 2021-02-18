import React, {useState, useEffect } from 'react'
import FileBase from 'react-file-base64'
import { useDispatch} from 'react-redux'
import useStyles from './styles'
import { createTask } from '../../actions/TasksAction'
import { TextField, Button, Typography, Paper} from '@material-ui/core'

const initialFieldValues =  {
    auditName: '', description: '', createdBy: '', clientId: '',
    releaseDate: '', tasks: []
}

const Form = () => {


    const [portfolioData, setPortfolioData] = useState({...initialFieldValues})
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createTask(portfolioData))
    }

    const clear = () => {

    }
    
    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>Create a Portfolio</Typography>
                <TextField
                    name="Name"
                    variant="outlined"
                    label="Name"
                    fullWidth
                    value={portfolioData.auditName}
                    onChange={(e) => setPortfolioData({...portfolioData, auditName: e.target.value})}/>
                <TextField
                    name="description"
                    variant="outlined"
                    label="description"
                    fullWidth
                    multiline
                    rows={4}
                    value={portfolioData.description}
                    onChange={(e) => setPortfolioData({...portfolioData, description: e.target.value})}/>
                <TextField
                    name="createdBy"
                    variant="outlined"
                    label="Created By"
                    fullWidth
                    value={portfolioData.createdBy}
                    onChange={(e) => setPortfolioData({...portfolioData, createdBy: e.target.value})}/>
                <TextField
                    name="clientId"
                    variant="outlined"
                    label="Client ID"
                    fullWidth
                    value={portfolioData.clientId}
                    onChange={(e) => setPortfolioData({...portfolioData, clientId: e.target.value})}/>
                <TextField
                    name="releaseDate"
                    type='date'
                    format="dd/MM/yyyy"
                    value="2014-08-18T21:11:54"
                    label="Release Date"
                    fullWidth
                    value={portfolioData.releaseDate}
                    onChange={(e) => setPortfolioData({...portfolioData, releaseDate: e.target.value})}/>
                
                <Button className={classes.buttonSubmit} variant="container" color="primary" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} type="submit" fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form
