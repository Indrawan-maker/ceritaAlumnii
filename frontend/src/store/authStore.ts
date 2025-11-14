import type { AuthState } from '../types/index'
import { create } from 'zustand'


export const authStore = create<AuthState>((set) => ({
    id: null,
    user: null,
    isLoggedIn: false,
    login: (id, username) => set({id: id, user : username, isLoggedIn: true}),
    logout: () => set({id: null, user: null, isLoggedIn: false})

}))


