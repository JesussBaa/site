import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Actividades from './components/paginas/actividades/Actividades';
import Estructura from './components/paginas/conocenos/Estructura';
import Mision from './components/paginas/conocenos/Mision';
import Vision from './components/paginas/conocenos/Vision';
import Trayectoria from './components/paginas/conocenos/Trayectoria';
import Quienes from './components/paginas/conocenos/Quienes';
import Inicio from './components/paginas/Inicio';
import Ajedrez from './components/paginas/actividades/Ajedrez';
import Box from './components/paginas/actividades/Box';
import Ingles from './components/paginas/actividades/Ingles';
import Jovenes from './components/paginas/actividades/Jovenes';
import Regularizacion from './components/paginas/actividades/Regularizacion';
import Teatro from './components/paginas/actividades/Teatro'; 
import PasswordLost from './components/formularios/PasswordLost';




export default function App() {
  return (
    <div>
      <div><Navegar/></div>
    </div>
    
  );
}

function Navegar(){
  return(
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route path='/inicio' exact Component={Inicio}/>
            <Route path='/quienes' exact Component={Quienes}/>
            <Route path='/mision' exact Component={Mision}/>
            <Route path='/vision' exact Component={Vision}/>
            <Route path='/trayectoria' exact Component={Trayectoria}/>
            <Route path='/estructura' exact Component={Estructura}/>
            <Route path='/actividades' exact Component={Actividades}/>
            <Route path='/ajedrez' exact Component={Ajedrez}/>
            <Route path='/box' exact Component={Box}/>
            <Route path='/ingles' exact Component={Ingles}/>
            <Route path='/jovenes' exact Component={Jovenes}/>
            <Route path='/regularizacion' exact Component={Regularizacion}/>
            <Route path='/teatro' exact Component={Teatro}/>
            <Route path='/lost' exact Component={PasswordLost}/>
          </Routes>
        </div> 
      </BrowserRouter>
    </div>
  );
}
