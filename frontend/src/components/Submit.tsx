import { useState, useCallback } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { FaCat } from "react-icons/fa";
import { Message, auth } from '../store/auth.ts'

import axios from 'axios'

export default function Submit() {

    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const [nickname, setNickname] = useState('')



    const { isLoggedIn } = auth()
    const { isMessageSend } = Message()


    const notifyErr = () => toast.error('login dulu yu!');
    const notify = useCallback(() => {
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
    }, [title]);

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
            await axios.post('http://localhost:5174/api/messages', {
                message : message,
                title : title,
                nickname : nickname
            }).then((data => {
                console.log('berhasil tersimpan di global state!', data)
                isMessageSend(data.message, data.title, data.nickname)
            }
        ))
            setMessage('')
            setTitle('')
            setNickname('')
            notify()
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
                        {toastContainer}
                    </div>
                </form>
            </section>
        </>
    )
}