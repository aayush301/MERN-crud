import React, { useEffect, useState } from 'react'
import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import { getUserById, updateUser } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';

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

const EditUser = () => {
  const [user, setUser] = useState({name: "", email: "", phone: ""});
  const params = useParams();
  const navigate = useNavigate();
  const classes = useStyle();
  
  useEffect(async () => {
    const user = await getUserById(params.id);
    setUser(user);
  }, [])
  
  
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  
  const handleSubmit = async (e) => {
    await updateUser(params.id, user);
    navigate("/users/all");
  }
  
  return (
    <>
      <FormGroup className={classes.container}>
        <Typography variant="h4">Edit User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input name="name" value={user.name} onChange={handleChange}/>
        </FormControl>

        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input name="email" value={user.email} onChange={handleChange} />
        </FormControl>

        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input name="phone" value={user.phone} onChange={handleChange} />
        </FormControl>
        <Button onClick={handleSubmit} variant="contained" color="primary">Update User</Button>
      </FormGroup>
    </>
  )
}

export default EditUser