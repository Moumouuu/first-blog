import 'bootstrap/dist/css/bootstrap.css'
import Navigation from "@/Components/Navigation";
import {SessionProvider} from "next-auth/react"

export default function App({Component, pageProps: {session, ...pageProps}}) {
    return (
        <>
            <SessionProvider session={session}>
                <Navigation/>
                <Component {...pageProps} />
            </SessionProvider>
        </>)
}
