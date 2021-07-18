import React, { useState }  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import MenuItem from '@material-ui/core/MenuItem';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
}));

const designationList = [
    {
      value: 'IT',
      label: 'IT',
    },
    {
      value: 'Sales',
      label: 'Sales',
    },
    {
      value: 'Finance',
      label: 'Finance',
    },
    {
      value: 'Business',
      label: 'Business',
    },
    {
        value: 'Management',
        label: 'Management',
      },
  ];
export default function FormDialog({isToggle, toggleDialog, onSubmit, itemData}) {
    const classes = useStyles();
    const [name, setName] = useState(itemData && itemData.name? itemData.name:'');
    const [designation, setDesignation] = useState(itemData && itemData.designation? itemData.designation:'');
    const [emailId, setEmailId] = useState(itemData && itemData.emailId? itemData.emailId:'');
    const [gender, setGender] = useState(itemData && itemData.gender? itemData.gender:'');
    const [doj, setDoj] = useState(itemData && itemData.doj? itemData.doj:'');
    const [salary, setSalary] = useState(itemData && itemData.salary? itemData.salary:'');

    const handleDOJChange=(e)=>{
      console.log(e.target.value)
      setDoj(e.target.value);
    }
    const handleSubmit=()=>{
      onSubmit({name, designation, emailId, gender, doj, salary})
      toggleDialog(!isToggle);
    }
    console.log(name, designation, emailId, gender, doj, salary);
  return (
      <Dialog fullWidth open={isToggle} onClose={()=>toggleDialog(!isToggle)} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Employee</DialogTitle>
        <DialogContent>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="name"
                    label="Name"
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    fullWidth
                />
                <TextField
                    id="designation"
                    select
                    label="Designation"
                    value={designation}
                    onChange={(e)=>setDesignation(e.target.value)}
                    fullWidth
                    >
                    {designationList.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="emailId"
                    label="Email Id"
                    type="email"
                    value={emailId}
                    onChange={(e)=>setEmailId(e.target.value)}
                    fullWidth
                />
                <div style={{marginTop:"10px", marginLeft:"10px"}}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup row aria-label="gender" name="gender" value={gender} onChange={(e)=>setGender(e.target.value)}>
                      <FormControlLabel value="Male" control={<Radio color="primary" />} label="Male" />
                      <FormControlLabel value="Female" control={<Radio color="primary" />} label="Female" />
                    </RadioGroup>
                  </FormControl>
                </div>
                <TextField
                 fullWidth
                  id="doj"
                  label="DOJ"
                  type="date"
                  value={doj}
                  onChange={handleDOJChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <TextField
                    id="salary"
                    label="Salary"
                    type="number"
                    value={salary}
                    onChange={(e)=>setSalary(e.target.value)}
                    fullWidth
                />
            </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>toggleDialog(!isToggle)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
  );
}