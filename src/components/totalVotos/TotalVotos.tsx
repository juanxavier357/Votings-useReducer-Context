import { useVoting } from "../../context"

export default function TotalVotos() {
    const { state } = useVoting()

    return (
        <>
            <h3>Total de Votos : {state.totalVotes}</h3>       
        </>
    )
}