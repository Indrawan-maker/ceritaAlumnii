import Hero from "./Hero"
import { useParams } from "react-router";



export function Comment() {
    const { comment } = useParams()
    return (
        <>
        <Hero />
        <p>you in params:  {comment}</p>
        </>
    )
}