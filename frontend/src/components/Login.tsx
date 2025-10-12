import Hero from "./Hero.tsx"

export default function Register() {
    return (
        <>
        
        <Hero />
        <main className="grid items-center justify-center mt-12 comfortaa-custom">
        <form action="">
        <section className="w-100 h-12 grid mb-8">
        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-white">
            <input className="w-full h-full rounded-md focus:outline-none p-4"
            type="text" placeholder="masukan masukan nickname" required/>
        </div>
        </section>
        <section className="w-100 h-12 grid mb-8">
        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-white">
            <input className="w-full h-full rounded-md focus:outline-none p-4"
            type="password" placeholder="masukan password" required/>
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