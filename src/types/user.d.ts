interface IUser {
    name: string;
    color: string;
    avatar: string;
    guessWord: string;
    impostor: boolean;
    token: string;
}

type UserContextType = {
    user: IUser | null;
    updateUser: (user: IUser) => void;
} 