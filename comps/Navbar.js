import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" height={77} width={128} />
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ankit">Ninja List</Link>
        </nav>
    );
}

export default Navbar;