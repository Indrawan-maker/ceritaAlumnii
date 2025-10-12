import Hero from "./Hero.tsx"
import { useState } from "react"
import { useNavigate } from "react-router";

export default function Register() {
    const [fullname, setFullName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault()
        const userInfo = {
            fullname: fullname,
            nickname: nickname,
            email: email,
            password: password
        }
        fetch("https://localhost:5137/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        }).then((response) => response.json()).then(() => {
        setFullName("")
        setNickname("")
        setEmail("")
        setPassword("")
        navigate('/login', { replace: true })
        })
    }

    return (
        <>
            <Hero />
            <main className="grid items-center justify-center mt-12 comfortaa-custom">
                <form onSubmit={handleSubmit}>
                    <section className="w-100 h-12 grid mb-8">
                        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-white">
                            <input className="w-full h-full rounded-md focus:outline-none p-4"
                                name="fullname"
                                value={fullname}
                                onChange={e => setFullName(e.target.value)}
                                type="text" 
                                placeholder="masukan nama lengkap" 
                                required />
                        </div>
                    </section>
                    <section className="w-100 h-12 grid mb-8">
                        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-white">
                            <input className="w-full h-full rounded-md focus:outline-none p-4"
                                name="nickname"
                                value={nickname}
                                type="text"
                                onChange={e => setNickname(e.target.value)}
                                placeholder="masukan masukan nickname" 
                                required />
                        </div>
                    </section>
                    <section className="w-100 h-12 grid mb-8">
                        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-white">
                            <input className="w-full h-full rounded-md focus:outline-none p-4"
                                name="email"
                                value={email}
                                type="email" 
                                onChange={e => setEmail(e.target.value)}
                                placeholder="masukan email" 
                                required />
                        </div>
                    </section>
                    <section className="w-100 h-12 grid mb-8">
                        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-white">
                            <input className="w-full h-full rounded-md focus:outline-none p-4"
                                name="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password" placeholder="masukan password" required />
                        </div>
                    </section>
                    <section className="w-100 h-8 grid">
                        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-sky-200">
                            <button className="w-full h-full rounded-md focus:outline-none p-4"
                                type="submit">daftar sekarang</button>
                        </div>
                    </section>
                </form>
            </main>
        </>
    )
}