import Hero from "./Hero"
import LoginDaftar from "./LoginDaftar";
import Submit from './Submit';
import CeritaList from "./CeritaList"
import { auth } from '../store/auth.ts'

import "react-toastify/dist/ReactToastify.css";
import '../index.css'

import Footer from "./Footer.tsx";

export default function Index() {
    const { user, isLoggedIn } = auth()

    console.log(user)
    console.log(isLoggedIn)


    console.log('user:', user)
    console.log('isLoggedIn:', isLoggedIn)





    return (
        <main className="bg-neutral-50 min-h-screen w-full">

            <Hero />
            {isLoggedIn ? null : <LoginDaftar />}
            <Submit />
            <CeritaList />  
            <Footer />
        </main>
    )
}

