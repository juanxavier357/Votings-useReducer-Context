import { useVoting } from '../../context';
import { ChangeEvent } from 'react';
import './index.scss';

export default function Filtro() {
  const { state, dispatch } = useVoting();

  const handleCheckboxChange = (option: string) => {
    dispatch({ type: 'SHOW', payload: option });
  };

  return (
    <div className='content__filtros'>
      <h3>Filtros</h3>
      {['total', 'porcentaje', 'todos'].map((option) => (
        <label htmlFor={option} key={option}>
          <input
            type='radio'
            id={option}
            value={option}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              handleCheckboxChange(e.target.value)
            }
            checked={option === (state && state.show ? state.show : 'total')}
          />
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </label>
      ))}
    </div>
  );
}
