
export type User = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    appartamentNumber: number
}

export type UserContextType = {
    token: string;
    userLogged: User;
    setToken: (token: string) => void;
    logout: () => void;
}
