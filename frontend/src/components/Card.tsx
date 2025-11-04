import type {JSX} from 'react'
import type { cardMessage } from '../types/index'
import { GoDiamond } from "react-icons/go";
import { LiaCommentAltSolid } from "react-icons/lia";
import { FaDiamond } from "react-icons/fa6";
import { Link } from 'react-router'
import ModalShare from '../lib/ModalShare.tsx'
import { useState, useEffect } from 'react'
import { upperFirstText } from '../utils/upperFirstText.ts';
import axios from 'axios'





export default function Card({ title, nickname, messages } : cardMessage):JSX.Element {

    const [isDiamondClicked, setIsDiamondClicked] = useState(false)
    const [diamondValue, setDiamondValue] = useState(0)
    const [isCommentClicked, setIsCommentClicked] = useState(false)
    const [commentValue, setCommentValue] = useState(0)
    const [isShareClicked, setIsShareClicked] = useState(false)
    const [shareValue, setShareValue] = useState(0)

    const handleDiamond = () => {
        setIsDiamondClicked( prev => !prev )
        if(!isDiamondClicked) {setDiamondValue(prev => prev + 1)} else {setDiamondValue(prev => prev - 1)}
    }
    const handleComment = () => {
        setIsCommentClicked( prev => !prev )
        if(!isCommentClicked) {setCommentValue(prev => prev + 1)} else {setCommentValue(prev => prev - 1)}
    }
    const handleShare = () => {
        setIsShareClicked( prev => !prev )
        if(!isShareClicked) {setShareValue(prev => prev + 1)}
    }
    
    const upperNick = upperFirstText(nickname)
    const upperTitle = upperFirstText(title)
    const upperMessage = upperFirstText(messages)

    const postDiamond = async () => {
        try {
            const token = localStorage.getItem('token')
            if(!token) return
            const res = await axios.post('http://localhost:5174/api/messages',
                {
                    diamondValue,
                    commentValue,
                    shareValue
                }, {
                headers : {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type' : 'application/json'
                }
            }
            )
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        postDiamond()
    })
    
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
                    <li className='text-[10px] font-extralight -translate-x-2'>Diamond • {diamondValue}</li>
                    <Link to='/messages/:comment'><li className='cursor-pointer text-2xl' onClick={handleComment}><LiaCommentAltSolid /></li> </Link>
                    <li className='text-[10px] font-extralight -translate-x-2'>{commentValue}</li>
                    <li className='cursor-pointer text-4xl' onClick={handleShare}>
                    <ModalShare />
                    </li>
                    <li className='text-[10px] font-extralight -translate-x-2'>{shareValue}</li>
                </ul>
            </div>
            </section>
        </div>
        </section>
        </main>
    )
}
