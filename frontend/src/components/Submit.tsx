import { useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import { FaCat } from "react-icons/fa";
import { Message } from '../store/auth.ts'

export default function submit() {

    const [message, setMessage] = useState('')
    const [title, setTitle] = useState('')
    const [nickname, setNickname] = useState('')


    // const notify = useCallback(() => {
    //     toast.success(`Halo ${users}`, {
    //         style: {
    //             border: "1px solid #6b7280",
    //             borderRadius: "8px",
    //             backgroundColor: "#f9fafb",
    //             color: "#111827",
    //         },
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         theme: "light",
    //     });
    // }, [users]);

    // const toastContainer = <ToastContainer
    //     icon={({ type }) => {
    //         switch (type) {
    //             case 'success':
    //                 return <FaCat className="w-full" />;
    //             default:
    //                 return null;
    //         }
    //     }}
    // />

    async function handleMessage() {
        try {
            const res = await fetch('http://localhost:5174/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message, title, nickname })
            })
            const messages = res.json()
            Message(messages._id, messages.message, messages.title, messages.nickname)
            setMessage('')
            setTitle('')
            setNickname('')
        } catch (error) {
            console.log(error)
        }

    }



    return (
        <>
            <section className="grid justify-center items-center mt-22 comfortaa-custom">
                <div className="text-2xl font-normal mb-6 flex items-center justify-center">
                    <h1>submit ceritamu!</h1>
                </div>
                <form className="flex items-center justify-center gap-8"
                    onSubmit={handleMessage}>
                    <div className="w-100 h-45">
                        <textarea className="rounded-md border px-4 py-4 border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-sky-200"
                            placeholder='"dulu pas PBAK saya botak 2cm"'
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            id=""
                        ></textarea>
                    </div>
                    <div>
                        <div className="w-100 h-12 mb-4 mt-2">
                            <input className="text-center rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full"
                                name="title"
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                                type="text" placeholder="Judul Cerita" />
                        </div>
                        <div className="w-100 h-12 mb-4">
                            <input className="text-center rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full"
                                name="nickname"
                                value={nickname}
                                onChange={e => setNickname(e.target.value)}
                                type="text" placeholder="Nickname Pengirim" />
                        </div>
                        <div className="w-100 h-12 mb-4">
                            <button className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-sky-200 cursor-pointer"
                            >kirim</button>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}