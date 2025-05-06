import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full py-4 px-12 z-10 bg-gradient-to-b from-purple-900/80 to-transparent backdrop-blur-sm">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Image
                        src="https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_300,w_300,f_auto,q_100/9161476/692697_163804.png"
                        alt="Purple Logo"
                        className="h-20 w-20 mr-2"
                        width={80}
                        height={80}
                    />
                    <span className="text-4xl text-white font-semibold">PURPLE OCTOPUS SERVICE</span>
                </div>
                <div className="flex items-center">
                    <Link href="/" className="text-xl text-white font-semibold mr-4">HOME</Link>
                    <Link href="/services" className="text-xl text-white font-semibold mr-4">SERVICES</Link>
                    <Link href="/contact" className="text-xl text-white font-semibold">ABOUT</Link>
                    <Link href="/login" className="text-xl text-white font-semibold ml-4">REQUEST A QUOTE</Link>
                    <button className="text-xl text-white font-semibold ml-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded">CONTACT US</button>
                </div>
            </div>
        </nav>
    )
}