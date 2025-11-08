import Hero from "./Hero.tsx"
import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { auth } from "../store/auth.ts";
import { useNavigate } from "react-router";


export default function Login() {
    const [nickname, setNickname] = useState('')
    const [password, setPassword] = useState('')
    
    const { login } = auth()
    const navigate = useNavigate()
    const notify = () => toast.error('data tidak ditemukan!');
    async function handleLogin(e: React.SyntheticEvent) {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:5174/api/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({nickname, password})
            })

            const loginData = await res.json()
            if(res.ok) {
                localStorage.setItem('token', loginData.token)
                console.log('login sukses', loginData.user.nickname)
                login(loginData.user._id ,loginData.user.nickname)
                setNickname('')
                setPassword('')
                navigate('/', { replace: true })
            } else {
                notify()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>

        <Hero />
        <main className="grid items-center justify-center mt-12 comfortaa-custom">
        <form onSubmit={handleLogin}>
        <section className="w-80 md:w-100 h-12 grid mb-8">
        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-white">
            <input className="w-full h-full rounded-md focus:outline-none p-4"
            autoComplete="current-password"
            type="text" 
            name="nickname"
            minLength={5}
            maxLength={80}
            value={nickname}
            onChange={e => setNickname(e.target.value)}
            placeholder="masukan masukan nickname" 
            required/>
        </div>
        </section>
        <section className="w-80 md:w-100 h-12 grid mb-8">
        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-white">
            <input 
            className="w-full h-full rounded-md focus:outline-none p-4"
            name="password"
            value={password}
                        minLength={5}
            maxLength={80}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            type="password" placeholder="masukan password" required/>
        </div>
        </section>
        <section className="w-80 md:w-100 h-8 grid">
        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-sky-200">
            <button
            className="w-full h-full rounded-md focus:outline-none p-4"
            type="submit">daftar sekarang</button>
        </div>
        </section>
        </form>
        <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
        </main>
        </>
    )
}