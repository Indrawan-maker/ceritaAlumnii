import type {JSX} from 'react'
import type { cardMessage } from '../types/index'
import { GoDiamond } from "react-icons/go";
import { LiaCommentAltSolid } from "react-icons/lia";
import { FaDiamond } from "react-icons/fa6";
import { Link } from 'react-router'
import ModalShare from '../lib/ModalShare.tsx'
import { useState } from 'react'



export default function Card({ title, nickname, messages } : cardMessage):JSX.Element {

    const [isDiamondClicked, setIsDiamondClick] = useState(false)

    const handleDiamond = () => {
        setIsDiamondClick( prev => !prev)
    }
    
    const upperNick = nickname.charAt(0).toUpperCase() + nickname.slice(1)
    const upperTitle = title.charAt(0).toUpperCase() + title.slice(1)
    const upperMessage = messages.charAt(0).toUpperCase() + messages.slice(1)
    
    return (
        <main className="grid items-center justify-center mt-12 comfortaa-custom">
        <section className="w-180 min-h-38 grid">
        <div className="relative rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-sky-200 p-4">
            <div className='flex font-bold'>
                <h2 className="justify-center">Dari : {upperNick}</h2>
                <h3 className='font-extrabold ml-auto'>{upperTitle}</h3>
            </div>
            <div className='flex justify-start mt-6'>
                <p className='text-left wrap-break-words'>{upperMessage}</p>
            </div>
            <section className='flex justify-between'>
                <div>
                </div>
            <div className='mt-auto flex justify-end'>
                <ul className='flex gap-4 justify-between text-right absolute bottom-4 right-4 items-center'>
                    <li className='cursor-pointer text-2xl' onClick={handleDiamond}> {isDiamondClicked ? <FaDiamond /> : <GoDiamond />}</li>
                    <li className='text-[10px] font-extralight -translate-x-2'>Diamond • 0</li>
                    <Link to='/messages/:comment'><li className='cursor-pointer text-2xl'><LiaCommentAltSolid /></li> </Link>
                    <li className='text-[10px] font-extralight -translate-x-2'>0</li>
                    <li className='cursor-pointer text-4xl'>
                    <ModalShare />
                    </li>
                    <li className='text-[10px] font-extralight -translate-x-2'>0</li>
                </ul>
            </div>
            </section>
        </div>
        </section>
        </main>
    )
}
