import 'bootstrap/dist/css/bootstrap.css'
import Navigation from "@/Components/Navigation";

export default function App({Component, pageProps}) {
    return (
        <>
            <Navigation/>
            <Component {...pageProps} />
        </>)
}
