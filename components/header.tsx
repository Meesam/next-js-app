import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { ChartNoAxesGantt, PenBox } from "lucide-react";
import UserMenu from "./user-menu";

const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="flex justify-between items-center py-6 px-4 ">
        <Link href="/">
          <Image
            src={"/logo2.png"}
            height={56}
            width={200}
            alt="Logo image"
            className="h-10 w-auto object-contain"
          />
        </Link>
        <div className=" flex items-center gap-4">
          <Link href={"/project/create"}>
            <Button variant="destructive" className=" flex items-center gap-2">
              <PenBox size={20} />
              <span>Create Project</span>
            </Button>
          </Link>
          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button variant="outline">Login</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
