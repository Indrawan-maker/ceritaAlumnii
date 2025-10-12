import Hero from "./components/Hero"
import LoginDaftar from "./components/LoginDaftar";
import Submit from './components/Submit';
import CeritaList from "./components/CeritaList"

function App() {

  return (
    
    <main className="bg-neutral-50 min-h-screen w-full">
    <Hero />
    <LoginDaftar />
    <Submit />
    <CeritaList />
    </main>
  )
}

export default App