
const styles = theme => ({
  order: {
    position: 'relative',
    display: 'inline-block',
    width: 18,
    height: 18,
    lineHeight: '20px',
    borderRadius: '2px',
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    verticalAlign: 'baseline',
    margin: 3,
    color: '#ffffff',
    cursor: 'pointer'
  },
  required: {
    '&:after':{
      content: '"*"',
      fontSize: 12,
      color: '#ffffff',
      position: 'absolute',
      left: 12,
      top: -2,
    }
  },
  delete: {
    cursor: 'pointer',
    opacity: .5
  }
})

export default styles
