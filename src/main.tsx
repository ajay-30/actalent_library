import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import DefaultTheme from './themes/DefaultTheme.tsx'
import { CssBaseline } from '@mui/material'
import ClassicTheme from './themes/ClassicTheme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline/>
    <App />
    </ThemeProvider>
  </StrictMode>
)
