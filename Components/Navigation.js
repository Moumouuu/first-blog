import Link from "next/link";
import LoginButton from "@/Components/LoginButton";

const Navigation = () => {
    return (
        <nav className={"container-fluid bg-dark d-flex justify-content-evenly p-3 sticky-top"}>
            <div>
                <Link className={"text-decoration-none text-white h5 mx-2"} href="/">Home</Link>
                <Link className={"text-decoration-none text-white h5 mx-2"} href="/blog">Blog</Link>
            </div>
            <LoginButton/>
        </nav>
    );
};

export default Navigation;