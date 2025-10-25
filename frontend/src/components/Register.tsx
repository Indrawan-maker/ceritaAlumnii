import Hero from "./Hero.tsx"
import { useState } from "react"
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";



export default function Register() {
    const [fullname, setFullName] = useState("");
    const [nickname, setNickname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const notify = () => toast('perhatikan lagi teks yang kamu input');

    const navigate = useNavigate()

    async function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault()
        try {
            const res = await fetch("http://localhost:5174/api/register", {
                method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({fullname, nickname, email, password}),
        })
        setFullName("")
        setNickname("")
        setEmail("")
        setPassword("")
        const result = await res.json()
        console.log(result)
        if(res.ok){
            navigate('/login', { replace: true })
        }
    }
        catch(error) {
            console.log(error)
    }
    }

    return (
        <>
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
            <Hero />
            <main className="grid items-center justify-center mt-12 comfortaa-custom">
                <form onSubmit={handleSubmit}>
                    <section className="w-100 h-12 grid mb-8">
                        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-white">
                            <input className="w-full h-full rounded-md focus:outline-none p-4"
                                name="fullname"
                                value={fullname}
                                autoComplete="name"
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
                                autoComplete="username"
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
                                autoComplete="email"
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
                                autoComplete="new-password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                type="password" placeholder="masukan password" required />
                        </div>
                    </section>
                    <section className="w-100 h-8 grid">
                        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-sky-200">
                            <button onClick={notify}
                            className="w-full h-full rounded-md focus:outline-none p-4"
                                type="submit">daftar sekarang</button>
                        </div>
                    </section>
                </form>
            </main>
        </>
    )
}