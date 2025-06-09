import Link from "next/link";
import Image from "next/image";
import {
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 p-4 w-full ">
        <nav className="flex justify-between items-center w-full container mx-auto ">
          <Link href="/">
            <Image
              src="/medimeet_logo.png"
              alt="Medimeet logo"
              width={200}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <div>
            <SignedOut>
              <Button variant="secondary" asChild>
                <Link href="/sign-in">Sign In</Link>
              </Button>
              {/* <Button variant="secondary" asChild>
                <Link href="/sign-up">Sign Up</Link>
              </Button> */}
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
