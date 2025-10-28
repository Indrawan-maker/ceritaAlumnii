

export type AuthState = {
    id: string | null
    user: string | null
    isLoggedIn: boolean
    login: (id : string, username: string) => void
    logout?: () => void
}

export type Messages = {
    id: string | null
    messageStored: string | null
    title: string | null,
    nicknameStored: string | null,
    isMessageSend: (id : string, messages : string, titles : string, nicknames : string) => void
}

export interface cardMessage {
    title: string
    nickname: string
    messages: string

}

export interface fetchMessage {
    _id : string
    title: string
    nickname: string
    message: string
    
}
