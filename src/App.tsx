import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import ButtonAppBar from './components/Appbar'
import { ActalentLibraryContextProvider } from './context/ActalentLibraryContext'
import IndexHandler from './routes/IndexHandler'

function App() {

  return (
    <>
      <ActalentLibraryContextProvider>
        <Router>
        <ButtonAppBar/>
          <Routes>
            <Route path="*" element={<IndexHandler/>}/>
          </Routes>
        </Router>
      </ActalentLibraryContextProvider>
    </>
  )
}

export default App;
