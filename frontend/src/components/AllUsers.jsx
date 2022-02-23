import React, { useState, useEffect } from 'react'
import { Table, TableHead, TableBody, TableCell, TableRow, makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { deleteUserById, getAllUsers } from '../services/api';

const useStyle = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px"
  },
  thead: {
    "& > *": {
      background: "#000",
      color: "#fff",
      fontSize: 20
    }
  },
  row: {
    "& > *": {
      fontSize: 18
    }
  }
});

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const classes = useStyle();
  
  useEffect(async () => {
    const users = await getAllUsers();
    setUsers(users);
  }, []);

  const deleteUser = async (id) => {
    await deleteUserById(id);
    const users = await getAllUsers();
    setUsers(users);
  }
  

  return (
    <>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.thead}>
            <TableCell>id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id} className={classes.row}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" style={{marginRight:5}} component={Link} to={`/users/${user._id}`}>Edit</Button>
                <Button variant='contained' color="secondary" onClick={() => deleteUser(user._id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}

export default AllUsers