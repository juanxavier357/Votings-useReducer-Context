import Candidatos from './components/candidatos/Candidatos';
import TotalVotos from './components/totalVotos/TotalVotos';
import VotosIndividuales from './components/votosIndividuales/VotosIndividuales';
import Filtro from './components/filtro/Filtro';
import './App.scss'

const App = () => {


  return (
    <>
      <div className='content'>
        <h1>Sistema de Votación</h1>
        <Candidatos />
        <div className='content__votaciones'>
          <Filtro />
          <div className='content__votaciones--contadores'>
            <TotalVotos />
            <VotosIndividuales />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;