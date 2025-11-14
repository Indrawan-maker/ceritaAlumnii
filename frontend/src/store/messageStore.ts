import { create } from 'zustand'
import type { Messages } from '../types/index'

export const messageStore = create<Messages>((set) => ({
    id: null,
    messageStored: null,
    title: null,
    nicknameStored: null,
    isMessageSend: ( id, messages, titles, nicknames) => set({ id: id, messageStored : messages, title : titles, nicknameStored: nicknames}),
}))


