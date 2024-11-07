import { createTheme } from '@mui/material'

const DefaultTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#3d5b96',
        },
        secondary: {
          main: '#f50057',
          contrastText: '#f0f0f0',
        },
        text: {
          primary: '#000000',
        },
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              background: 'linear-gradient(45deg, #f50057 30%, #C2185B 90%)',
              border: 0,
              borderRadius: 3,
              boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
              color: 'white',
              height: 48,
              padding: '0 30px',
            },
          },
        },
      },
})

export default DefaultTheme