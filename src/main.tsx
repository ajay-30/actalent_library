import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@emotion/react'
import DefaultTheme from './assets/styles/themes/DefaultTheme.tsx'
import { CssBaseline } from '@mui/material'
import ClassicTheme from './assets/styles/themes/ClassicTheme.tsx'
import ActalentTheme from './assets/styles/themes/ActalentTheme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={ActalentTheme}>
      <CssBaseline/>
    <App />
    </ThemeProvider>
  </StrictMode>
)
