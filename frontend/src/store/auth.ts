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
    messageStored: null,
    title: null,
    nicknameStored: null,
    isMessageSend: ( messages, titles, nicknames) => set({ messageStored : messages, title : titles, nicknameStored: nicknames}),
}))

