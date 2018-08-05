import blue from '@material-ui/core/colors/blue'
import amber from '@material-ui/core/colors/amber'

export const customizeTheme = {
  typography: {
    headline: {
      fontSize: `1.25rem`,
    },
  },
  palette: {
    primary: {
      light: blue[300],
      main: blue[600],
      dark: blue[800],
      contrastText: '#fff',
    },
    secondary: {
      light: amber[300],
      main: amber[500],
      dark: amber[800],
      contrastText: '#000',
    },
  },
}
