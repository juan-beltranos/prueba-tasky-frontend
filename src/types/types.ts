export interface User {
    name: string;
    phone: string;
    profilePicture: string;
}

export interface CreateUserForm {
    name: string;
    phone: string;
    profilePictureFile: File | null;
}

export interface SMSForm {
    phone: string;
    message: string;
}

export interface Message {
    message: string;
    timestamp: Date;
}

export interface UserMessages {
    name: string;
    phone: string;
    messages: Message[];
}
