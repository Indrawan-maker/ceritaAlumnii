import type {JSX} from 'react'
import type { cardMessage } from '../types/index'


export default function Card({ title, nickname, messages } : cardMessage):JSX.Element {
    
    const upperNick = nickname.charAt(0).toUpperCase() + nickname.slice(1)
    const upperTitle = title.charAt(0).toUpperCase() + title.slice(1)
    const upperMessage = messages.charAt(0).toUpperCase() + messages.slice(1)
    
    return (
        <main className="grid items-center justify-center mt-12 comfortaa-custom">
        <section className="w-180 h-38 grid">
        <div className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-sky-200 p-4">
            <div className='flex font-bold'>
                <h2 className="justify-center">Dari : {upperNick}</h2>
                <h3 className='font-extrabold ml-auto'>{upperTitle}</h3>
            </div>
            <div className='flex justify-start mt-6'>
                <p className='text-left break-words'>{upperMessage}</p>
            </div>
        </div>
        </section>
        </main>
    )
}
