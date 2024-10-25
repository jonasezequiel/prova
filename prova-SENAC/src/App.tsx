import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadastroUsuario from "./Paginas/CadastroUsuario/CadastroUsuario";
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/CadastroUsuarios" element={<CadastroUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
