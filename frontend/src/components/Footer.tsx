
export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <>
        <footer className="justify-self-center mt-12 comfortaa-custom">
            <p>Made by Indrawan from {year}</p>
        </footer>
        </>
    )
}