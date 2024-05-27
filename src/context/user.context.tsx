import { createContext, useState } from "react";

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [user, updateUser] = useState<IUser | null>(null);

    return (
        <UserContext.Provider value={{user, updateUser}}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;




