import Card from "./Card";
import { auth } from '../store/auth.ts'

export default function CeritaList() {


    const { user } = auth()
    const cardList = user ? <Card title={user}/> : null

    return (
        <>
        <section className="">
            <div className="mt-22">
            <h1 className="text-xl font-bold comfortaa-custom text-center">Cerita dari Alumni-alumni</h1>
            </div>
            {cardList}
        </section>
        </>
    )
}