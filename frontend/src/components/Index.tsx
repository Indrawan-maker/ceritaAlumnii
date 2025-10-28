import Hero from "./Hero"
import LoginDaftar from "./LoginDaftar";
import Submit from './Submit';
import CeritaList from "./CeritaList"
import { auth } from '../store/auth.ts'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../index.css'
import { useEffect} from 'react'
import { FaCat } from "react-icons/fa";
import Footer from "./Footer.tsx";

export default function Index() {
    const { user, isLoggedIn } = auth()

    console.log(user)
    console.log(isLoggedIn)
    const users = user ?
        user.charAt(0).toUpperCase() + user.slice(1) : ''

    console.log('user:', user)
    console.log('isLoggedIn:', isLoggedIn)




    useEffect(() => {
        if (isLoggedIn ) {
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
            return
        }
    }, [isLoggedIn, users])

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
            <CeritaList />  
            <Footer />
        </main>
    )
}

