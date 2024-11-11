import { createTheme } from '@mui/material'

const ClassicTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
          main: '#3e4e50',
        },
        secondary: {
          main: '#ff5252',
        },
        background: {
          default: '#f4f4f9',
        },
        text: {
          primary: '#2E2E2E',
        },
      },
})

export default ClassicTheme