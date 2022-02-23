import React, { useState } from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import { addUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

const useStyle = makeStyles({
  container: {
    width: "50%",
    margin: "auto",
    marginTop: 20,
    "& > *": {
      marginBottom: 20
    }
  }
});

const AddUser = () => {
  const initialUser = { name: "", email: "", phone: "" };
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();
  const classes = useStyle();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user)
  }
  
  const handleSubmit = async (e) => {
    await addUser(user);
    navigate("/users/all");
  }
  
  return (
    <>
      <FormGroup className={classes.container}>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input name="name" onChange={handleChange} />
        </FormControl>

        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input name="email" onChange={handleChange} />
        </FormControl>

        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input name="phone" onChange={handleChange} />
        </FormControl>
        <Button onClick={handleSubmit} variant="contained" color="primary">Add User</Button>
      </FormGroup>
    </>
  )
}

export default AddUser