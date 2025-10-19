import { useNavigate } from "react-router";

export default function LoginDaftar() {
    const navigate = useNavigate()
    
    function handleRegister(){
        navigate('/register')
    }
    function handleLogin(){
        navigate('/login')
    }

    return (
        <>
        <section className="flex items-center justify-center mt-12">
            <div className="flex items-center justify-center gap-8">
                <div className="w-28 h-8">
                <button 
                className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full  cursor-pointer"
                onClick={handleLogin}
                >Login</button>
                </div>
                <div className="w-28 h-8">
                    <button className="rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-sky-200 cursor-pointer"
                onClick={handleRegister}
                >Daftar</button>
                </div>
            </div>
        </section>
        </>
    )
}