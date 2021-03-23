import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#5691ff'
    },
    secondary: {
      main: '#1164FD'
    },
    background: {
      default: '#f5f5f5'
    },
    success: {
      main: '#91ff56'
    }
  }
});

export default theme;
