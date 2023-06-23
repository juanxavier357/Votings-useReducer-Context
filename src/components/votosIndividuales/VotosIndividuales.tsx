import { useVoting } from '../../context';
import './index.scss'

export default function VotosIndividuales() {
    const { state } = useVoting();

    const candidatos = state.candidates;

    return (
        <>
            {candidatos.map((candidato) => (
                <div className='content__votos--individuales'>
                    <div>
                        <h3>
                            {candidato.name} :
                            {state.show === 'total'
                                ? ` ${candidato.votes} votos`
                                : state.show === 'percentage'
                                    ? ` ${candidato.percentage.toFixed(2)}%`
                                    : ` ${candidato.votes} votos = ${candidato.percentage.toFixed(2)}%`}

                        </h3>
                    </div>
                </div>
            ))}
        </>
    )
}