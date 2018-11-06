

import React from 'react'
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  entry: {
    borderRadius: 4,
    border: '1px solid #white',
    fontWeight: 'bold',
    color: '#2196f3',
    backgroundColor: '#ffffff',
    '& .icon': {
      width: 30,
      textAlign: 'center'
    },
    '& .text': {
      verticalAlign: 6
    }
  }
})

const Entry = ({ icon, children, classes }) => (
  <div className={`my-2 pb-1 pt-2 px-3 ${classes.entry}`}>
    <span className="icon">
      { icon }
    </span>
    <span className="text px-2">
      { children }    
    </span>
  </div>
)

export default withStyles(styles)(Entry)