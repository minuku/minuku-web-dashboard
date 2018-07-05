import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
//import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
//import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

// fake apiUrl
//import { userService } from 'utils/userService'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  card: {
    minWidth: 400,
    width: '80%',
    //maxWidth: 800
  },
  title: {
    marginBottom: 16,
    fontSize: 24,
  },
  Checkbox:{
    color: 'primary'
  },
})


class Project extends React.Component {
  state = {
    checkedA: true,
    checkedB: true,
    checkedC: true
  }
//TO DO: import true data to table
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
              <Typography className={classes.title} color="black">
                Project A
              </Typography>
            <Divider />
              
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                      <Checkbox
                        disabled
                        color="primary"
                      />
                      </TableCell>
                      <TableCell>Label</TableCell>
                      <TableCell>Action</TableCell>
                      <TableCell>Situation</TableCell>
                      <TableCell>Schedule</TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    
                      
                    <TableRow>
                      <TableCell>
                      <Checkbox
                        color="primary"
                      />
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>收集運動資料</TableCell>
                      <TableCell>在家運動</TableCell>
                      <TableCell>每日兩次</TableCell>
                      <TableCell>
                        <IconButton className={classes.button}>
                          <EditIcon />
                        </IconButton>  
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                      <Checkbox
                        color="primary"
                      />
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>發問卷</TableCell>
                      <TableCell>在家運動</TableCell>
                      <TableCell>每日兩次</TableCell>
                      <TableCell>
                        <IconButton className={classes.button}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>
                      <Checkbox
                        color="primary"
                      />
                      </TableCell>
                      <TableCell></TableCell>
                      <TableCell>通知Admin</TableCell>
                      <TableCell>在家運動</TableCell>
                      <TableCell>每日兩次</TableCell>
                      <TableCell>
                        <IconButton className={classes.button}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                      
               
                  </TableBody>
                </Table>
              </Paper>


            <Divider />
               
            
          </CardContent>
          <CardActions>
            
          </CardActions>
        </Card>
      </div>
    )
  }
}

export default withStyles(styles)(Project)