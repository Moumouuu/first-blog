import Link from "next/link";
import LoginButton from "@/Components/LoginButton";

const Navigation = () => {
    return (
        <nav className={"container-fluid bg-dark d-flex justify-content-evenly p-3 sticky-top"}>
            <Link className={"text-decoration-none text-white h5 "} href="/">Home</Link>
            <Link className={"text-decoration-none text-white h5 "} href="/blog">Blog</Link>
            <LoginButton />
        </nav>
    );
};

export default Navigation;