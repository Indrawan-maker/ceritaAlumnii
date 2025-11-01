import { useState, useEffect, useRef } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { FaCat } from "react-icons/fa";
import { Message, auth } from '../store/auth.ts'

import axios from 'axios'

export default function Submit() {

    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const [nickname, setNickname] = useState('')
    const isMount = useRef(false)



    const { isLoggedIn, user } = auth()
    const { isMessageSend } = Message()

        const users = user ?
        user.charAt(0).toUpperCase() + user.slice(1) : ''


    const notifyErr = () => toast.error('login dulu yu!');

    const notifyMessage = () => {
        toast.success(`Judul Cerita ${title} berhasil terkirim!`, {
            style: {
                border: "1px solid #6b7280",
                borderRadius: "8px",
                backgroundColor: "#f9fafb",
                color: "#111827",
            },
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });
    }


    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem('token')
            if(!token) {
                console.log('belum login')
                return
            }

            try {
                const res = await axios.get('http://localhost:t5174/api/auth/profile', {
                    headers : {'Authorization' : `Bearer ${token}`}
                })
                if(!res) {
                    toast.error('token kadaluarsa, login ulang!')
                    localStorage.removeItem('token')
                } else {
                    console.log('data jwt:' , res)
                }
            } catch(error) {
                console.log(error)
            }
        }
        checkAuth()
    },[])

    useEffect(() => {
        if(!users) return
                if(isMount.current) {
            
            toast.success(`Halo, ${users}!`, {
                style: {
                    border: "1px solid #6b7280",
                    borderRadius: "8px",
                    backgroundColor: "#f9fafb",
                    color: "#111827",
                },
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        } else {
            isMount.current = true
        }
    },[users])

    const toastContainer = <ToastContainer
        icon={({ type }) => {
            switch (type) {
                case 'success':
                    return <FaCat className="w-full" />;
                default:
                    return null;
            }
        }}
    />

    async function handleMessage(e: React.SyntheticEvent) {
        e.preventDefault()
        console.log(message)
        if (isLoggedIn === false) {
            return notifyErr()
        }
        try {
            const token = localStorage.getItem('token')
            const res = await axios.post(
                'http://localhost:5174/api/messages', {
                message,
                title,
                nickname
            },{
                headers: {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type' : 'application/json'
                }
            }
        )
        isMessageSend(res.data._id, res.data.message, res.data.title, res.data.nickname)
        console.log(res)
        console.log(res.data)
            setMessage('')
            setTitle('')
            setNickname('')
            notifyMessage()
        } catch (error) {
            console.log(error)
        }

    }



    return (
        <>
            <section className="grid justify-center items-center mt-22 comfortaa-custom">
                
                <div className="text-2xl font-normal mb-6 flex items-center justify-center">
                    <h1>Submit Ceritamu!</h1>
                </div>
                <form className="flex items-center justify-center gap-8"
                    onSubmit={handleMessage}>
                    <div className="w-100 h-45">
                        <textarea className="rounded-md border px-4 py-4 border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-sky-200"
                            placeholder='"dulu pas PBAK saya botak 2cm"'
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            minLength={3}
                            maxLength={100}
                            required
                        ></textarea>
                    </div>
                    <div>
                        <div className="w-100 h-12 mb-4 mt-2">
                            <input className="text-center rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full"
                                name="title"
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                                minLength={3}
                                maxLength={30}
                                type="text" placeholder="Judul Cerita"

                            />
                        </div>
                        <div className="w-100 h-12 mb-4">
                            <input className="text-center rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full"
                                name="nickname"
                                value={nickname}
                                minLength={3}
                                maxLength={30}
                                onChange={e => setNickname(e.target.value)}
                                type="text" placeholder="Nickname Pengirim"
                                required
                            />
                        </div>
                        <div className="w-100 h-12 mb-4">
                            <button className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-sky-200 cursor-pointer"
                            >kirim</button>
                        </div>
                    </div>
                </form>
            </section>
                        {toastContainer}
        </>
    )
}