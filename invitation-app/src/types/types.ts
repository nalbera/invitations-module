
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

export type Invitations = {
    _id: string;
    userId: string;
    fullName: string;
    entryDate: Date;
    entryTime: string;
    expirationDate: Date
}

export type ModalDetailType = {
    invitationId: string;
    show: boolean;
    handleClose: () => void;
}

export type PagedType = {
    itemPerPage: number;
    invitations: Invitations[];
    pagination: (pageNumber: number) => void;
}