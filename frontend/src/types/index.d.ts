
import Messages from './../../../backend/models/messageModel';

export type AuthState = {
    id: string | null
    user: string | null
    isLoggedIn: boolean
    login: (id : string, username: string) => void
    logout?: () => void
}

export type Messages = {
    id: string | null
    message: string | null
    title: string | null,
    nickname: string | null,
    isMessageSend: (id : string, messages : string, titles : string, nicknames : string) => void
}
