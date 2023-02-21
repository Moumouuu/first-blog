import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";

export default function LoginButton() {
    const { data: session } = useSession()
    if (session) {
        return (
            <div className={"d-flex align-items-center"}>
                <button className={"btn btn-outline-warning"} onClick={() => signOut()}>Sign out</button>
                <span className={"text-white mx-2 h6"}>{session.user.name}</span>
                <Image src={session.user.image} alt={"user"}
                       width={50} height={50} className={"rounded-circle"}/>
            </div>
        )
    }
    return (
        <>
            <button className={"btn btn-outline-success"} onClick={() => signIn()}>Sign in</button>
        </>
    )
}