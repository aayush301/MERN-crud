import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'

const useStyle = makeStyles({
  header: {
    background: "blue"
  },
  tabs: {
    color: "#fff",
    textDecoration: "none",
    marginRight: 20,
    fontSize: 20
  }
})

const Navbar = () => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position='static'>
      <Toolbar>
        <NavLink className={classes.tabs} to="/">CRUD APP</NavLink>
        <NavLink className={classes.tabs} to="/users/all">All users</NavLink>
        <NavLink className={classes.tabs} to="/users/add">Add user</NavLink>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar