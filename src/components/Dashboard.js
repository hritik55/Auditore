import React, { useEffect, useState} from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Tasks from './Tasks/Tasks'
import { fetchAllTasks } from '../actions/TasksAction'
import { useDispatch } from 'react-redux'
import Form from './Form/Form'
import ProfileForm from './AuditProfile/ProfileForm'
import useStyles from '../styles'

const Dashboard = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllTasks());
    }, [dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar className="classes.appBar" position="static" color="inherit">
                <Typography className="classes.heading" variant="h4" align="left">Auditore</Typography>
                <Typography variant="h4" align="right"></Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid 
                        container justify="space-between" 
                        alignItems="stretch" 
                        spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Tasks />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                                <ProfileForm />
                            </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default Dashboard;

