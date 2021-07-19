import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    '& > * + *': {
      marginLeft: theme.spacing(2)
    }
  }
}))

const Loading = () => {
  const classes = useStyles()

  return (
    <div data-testid='loading' className={classes.root}>
      <CircularProgress color='inherit' />
    </div>
  )
}
export default Loading
