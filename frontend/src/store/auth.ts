import type { AuthState } from '../types/index'

import { create } from 'zustand'

export const auth = create<AuthState>((set) => ({
    user: null,
    isLoggedIn: false,
    login: (username) => set({user : username, isLoggedIn: true}),
    logout: () => set({user: null, isLoggedIn: false})

}))
