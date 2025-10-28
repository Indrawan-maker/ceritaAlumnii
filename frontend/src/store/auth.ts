import type { AuthState, Messages } from '../types/index.ts'
import { create } from 'zustand'


export const auth = create<AuthState>((set) => ({
    id: null,
    user: null,
    isLoggedIn: false,
    login: (id, username) => set({id: id, user : username, isLoggedIn: true}),
    logout: () => set({id: null, user: null, isLoggedIn: false})

}))

export const Message = create<Messages>((set) => ({
    id: null,
    messageStored: null,
    title: null,
    nicknameStored: null,
    isMessageSend: (id, messages, titles, nicknames) => set({id: id, messageStored : messages, title : titles, nicknameStored: nicknames}),
}))

