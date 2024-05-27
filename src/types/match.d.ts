interface IMatch {
    name: string;
    id: string;
    turnDuration: number;
    maxPlayers: number | null;
}

type UserContextType = {
    match: IMatch | null;
    updateMatch: (match: IMatch) => void;
}