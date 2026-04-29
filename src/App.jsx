import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tareas from './pages/Tareas'
import Documentos from './pages/Documentos'
import Perfil from './pages/Perfil'
import IA from './pages/IA'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tareas" element={<Tareas />} />
          <Route path="/ia" element={<IA />} />
          <Route path="/documentos" element={<Documentos />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
