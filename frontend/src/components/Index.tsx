import Hero from "./Hero"
import LoginDaftar from "./LoginDaftar";
import Submit from './Submit';
import CeritaList from "./CeritaList"
import BeforeLogin from "./BeforeLogin"
import { auth } from '../store/auth.ts'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../index.css'
import { useEffect, useRef, useCallback } from 'react'
import { FaCat } from "react-icons/fa";

export default function Index() {
    const { user, isLoggedIn } = auth()
    const isNotify = useRef(false)
    console.log(user)
    console.log(isLoggedIn)
    const users = user ?
        user.charAt(0).toUpperCase() + user.slice(1) : ''

    console.log('user:', user)
    console.log('isLoggedIn:', isLoggedIn)
    console.log('isNotify.current:', isNotify.current)

    const notify = useCallback(() => {
        toast.success(`Halo ${users}`, {
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
    }, [users]);

    useEffect(() => {
        if (user && isLoggedIn && !isNotify.current) {
            notify()
            isNotify.current = true
        }
        if (isNotify.current) {
            isNotify.current = false
        }
    }, [user, isLoggedIn, notify])

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

    return (
        <main className="bg-neutral-50 min-h-screen w-full">
            {toastContainer}
            <Hero />
            {isLoggedIn ? null : <LoginDaftar />}
            <Submit />
            {isLoggedIn ?
                <CeritaList /> : <BeforeLogin />
            }
        </main>
    )
}

