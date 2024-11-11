import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import ButtonAppBar from './shared/components/Appbar'
import { ActalentLibraryContextProvider } from './shared/context/ActalentLibraryContext'
import IndexHandler from './routes/IndexHandler'
import AppMenu from './shared/components/AppMenu'

function App() {

  return (
    <>
      <ActalentLibraryContextProvider>
        <Router>
        <ButtonAppBar/>
        <AppMenu/>
          <Routes>
            <Route path="*" element={<IndexHandler/>}/>
          </Routes>
        </Router>
      </ActalentLibraryContextProvider>
    </>
  )
}

export default App;
