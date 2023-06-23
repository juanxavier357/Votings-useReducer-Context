import { createContext, useContext, useReducer, ReactNode } from 'react';

interface VotingCandidate {
    id: number;
    name: string;
    votes: number;
    percentage: number;
}

interface VotingState {
    show: string;
    totalVotes: number;
    candidates: VotingCandidate[];
}

interface VotingsContextType {
    state: VotingState;
    dispatch: React.Dispatch<VotingAction>;
}

type VotingAction =
    | { type: 'COUNT'; payload: number }
    | { type: 'SHOW'; payload: string };

const initialState: VotingState = {
    show: 'total',
    totalVotes: 0,
    candidates: [
        { id: 1, name: 'Maria', votes: 0, percentage: 0 },
        { id: 2, name: 'Jackeline', votes: 0, percentage: 0 },
        { id: 3, name: 'Jessica', votes: 0, percentage: 0 },
        { id: 4, name: 'Julio', votes: 0, percentage: 0 },
    ],
};

const reducer = (state: VotingState, action: VotingAction): VotingState => {
    switch (action.type) {
        case 'COUNT': {
            const candidateId = action.payload;
            const updatedTotalVotes = state.totalVotes + 1;

            const updatedCandidates = state.candidates.map((candidate) => {
                if (candidate.id === candidateId) {
                  const updatedVotes = candidate.votes + 1;
                  const updatedPercentage = (updatedVotes / updatedTotalVotes) * 100;
              
                  return { ...candidate, votes: updatedVotes, percentage: updatedPercentage };
                } else {
                  const updatedPercentage = (candidate.votes / updatedTotalVotes) * 100;
              
                  return { ...candidate, percentage: updatedPercentage };
                }
              });

            return {
                ...state,
                candidates: updatedCandidates,
                totalVotes: updatedTotalVotes,
            };
        }

        case 'SHOW': {
            return { ...state, show: action.payload };
        }

        default: {
            throw new Error(`Tipo de acción no manejada o no encontrada: ${action}`);
        }
    }
};

const VotingsContext = createContext<VotingsContextType | undefined>(undefined);

export const VotingsProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const contextValue: VotingsContextType = {
        state,
        dispatch,
    };

    return <VotingsContext.Provider value={contextValue}>{children}</VotingsContext.Provider>;
};

export default VotingsContext;

export function useVoting(): VotingsContextType {
    const votingState = useContext(VotingsContext);

    if (votingState === undefined) {
        throw new Error('useVoting debe ser utilizado dentro de VotingsProvider');
    }

    return votingState;
}