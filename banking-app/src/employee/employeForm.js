import React,{useState,useEffect} from "react"
import {Grid,TextField,makeStyles} from "@material-ui/core"
const useStyles=makeStyles(theme => ({
    root:{
        '&.MuiFormControl-root':{
            width:'90%',
            margin:theme.spacing(1)
            
        }
    }
}))
const initialValues=
{
    id:"",
    name:"",
    email:"",
    mobile:"",
    city:"",
    gender:"male",
    departementId:"",
    hireDate:new Date(),
    isParment:false,
}
export function EmployeForm(){
    const[values,setValues]=useState(initialValues)
const classes=useStyles
    return(
    <form className={classes.root}>

        <Grid container>
            <Grid item xs={6}>
                <TextField 
                variant="outlined"
                label="full Name"
                value={values.name}
                />
                  
                <TextField 
                variant="outlined"
                label="Email"
                value={values.email}
                />
            </Grid>
            <Grid item xs={6}></Grid>
        </Grid>
    </form>
    )
}

