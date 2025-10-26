export type AuthState = {
    user: string | null
    isLoggedIn: boolean
    login: (username: string) => void
    logout: () => void
}
