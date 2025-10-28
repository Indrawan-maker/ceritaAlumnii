import Card from "./Card";
import { useEffect, useState } from "react"
import type { fetchMessage } from "../types/index.d.ts";
import axios from "axios"


//  ngulik lodash, dan zod

export default function CeritaList() {

    const [fetchMessage, setFetchMessage] = useState<fetchMessage[]>([])
    // const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [skip, setSkip] = useState(0)

const fetching  = async (newSkip = 0) => {
            try {
                setLoading(true)
                const res = await axios.get(`http://localhost:5174/api/messages?skip=${newSkip}`)
                if(newSkip === 0) {
                    setFetchMessage(res.data)
                } else {
                    
                    setFetchMessage((prevMsg) => [...prevMsg, ...res.data])
                }
                console.log(res.data)
            } catch (error) {
                console.log(error)
                // setError(error.message)
            } finally {
                setLoading(false)
            }
        }

    useEffect(() =>  {
        fetching(0)
    },[])


const handleLoadMore = () => {
    const newSkip = skip + 5
    console.log(newSkip)
    setSkip(newSkip)
    fetching(newSkip)
}


    return (
        <>
        <section className="">

            <div className="mt-22">
            <h1 className="text-xl font-bold comfortaa-custom text-center">Cerita dari Alumni-Alumni</h1>
            </div>
            {
            fetchMessage.map((message,i) => {
            return( 
                <div key={i}>
            <Card title={message.title} nickname={message.nickname} messages={message.message}/>
                </div>
            )})
            }
        </section>
        
        <section className="mt-12 comfortaa-custom flex justify-center">
            {loading ? 
            <p>sabar ya..</p>
            :
            <button onClick={handleLoadMore}
            className="rounded-xl border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-2xs p-2 cursor-pointer"
            >Lihat Lagi</button> 
        }
        </section>
        </>
    )
}