import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import classes from './DrawerToggleButton.module.css'

const DrawerToggleButton = ({ click }) => (
  <div className={classes.container}>
    <IconButton className={classes.toggle_button} onClick={click}>
      <Icon className="fas fa-bars" />
    </IconButton>
  </div>
)

export default DrawerToggleButton
