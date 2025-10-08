export default function submit() {
    return (
        <>
        <section className="grid justify-center items-center mt-22 comfortaa-custom">
        <div className="text-2xl font-normal mb-6 flex items-center justify-center">
        <h1>submit ceritamu!</h1>
        </div>
        <form className="flex items-center justify-center gap-8"
        action="">
            <div className="w-100 h-45">
            <textarea className="rounded-md border px-4 py-4 border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full bg-sky-200"
            placeholder='"dulu pas PBAK saya botak 2cm"'
            name="" id=""
            ></textarea>
            </div>
            <div>
                <div className="w-100 h-12 mb-4 mt-2">
                <input className="text-center rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full"
                type="text" placeholder="Judul Cerita"/>
                </div>
                <div className="w-100 h-12 mb-4">
                <input className="text-center rounded-md border border-black shadow-[8px_8px_0px_black] hover:shadow-[2px_2px_0px_black] hover:translate-y-1 transition h-full w-full"
                type="text" placeholder="Nickname Pengirim"/>
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