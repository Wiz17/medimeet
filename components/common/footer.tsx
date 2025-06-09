import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-muted py-8 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="Medimeet Logo" width={100} height={40} className="rounded" />
          {/* <span className="font-semibold text-lg text-emerald-600">Medimeet</span> */}
        </div>
        <nav className="flex gap-6 text-muted-foreground text-sm">
          <Link href="/" className="hover:text-emerald-600 transition">Home</Link>
          <Link href="/doctors" className="hover:text-emerald-600 transition">Find Doctors</Link>
          <Link href="/about" className="hover:text-emerald-600 transition">About</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition">Contact</Link>
        </nav>
        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-emerald-600 transition">
            <FaGithub size={20} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-emerald-600 transition">
            <FaTwitter size={20} />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-emerald-600 transition">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Medimeet. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;