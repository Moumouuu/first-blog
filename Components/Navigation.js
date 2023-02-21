import Link from "next/link";

const Navigation = () => {
    return (
        <nav className={"container-fluid bg-dark d-flex justify-content-evenly p-3"}>
            <Link className={"text-decoration-none text-white h5 "} href="/">Home</Link>
            <Link className={"text-decoration-none text-white h5 "} href="/blog">Blog</Link>
        </nav>
    );
};

export default Navigation;