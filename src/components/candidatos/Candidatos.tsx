import { useVoting } from "../../context";
import './index.scss';

export default function Candidatos() {
  const { state, dispatch } = useVoting();
  const candidatos = state.candidates;

  const handleCount = (candidateId: number) => {
    dispatch({ type: 'COUNT', payload: candidateId });
  };

  return (
    <>
      <div className='content__candidatos'>
        {candidatos.map((candidato) => (
          <div key={candidato.id} className='content__candidatos--individual'>
            <img src='https://picsum.photos/200' alt={candidato.name} width='100px' height='100px' />
            <h2>{candidato.name}</h2>
            <p>
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Nostrum maxime impedit, numquam aut mollitia fuga quia.'
            </p>
            <button id={`${candidato.id}`} onClick={() => handleCount(candidato.id)}>Votar</button>
          </div>
        ))}
      </div>
    </>
  );
}
