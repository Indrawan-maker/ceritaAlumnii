import kucing from "../assets/images/Hero.gif"

export default function Hero() {
    return (
        <main className="grid justify-center items-center mt-12">
            <div className="w-32 md:w-40 h-32 md:h-40 m-auto">
        <img className="w-full h-full mt-4 object-cover"
        src={kucing} alt="kucing" />
        </div>
        <div className="text-sm md:text-xl font-normal comfortaa-custom grid justify-center items-center">
            <h1 className="text-center">Ceritain Alumni</h1>
            <h1 className="text-center">Barbagi Cerita Alumni yang sudah lulus!</h1>
        </div>
        </main>
    )
}