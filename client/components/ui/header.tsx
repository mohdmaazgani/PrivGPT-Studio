"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";
import { useAuth } from "@/context/AuthContext";

export default function header() {
  const { darkMode } = useTheme();
  const { token } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="border-b sticky top-0 z-50 bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center">
          <Image
            src={darkMode ? "/logos/logo-dark.svg" : "/logos/logo-light.svg"}
            alt="PrivGPT Studio Logo"
            width={290}
            height={43}
            priority
            className="w-[220px] h-auto"
          />
        </Link>

        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="/pricing"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            {token && (
              <Link 
                href="/settings"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Settings
              </Link>
            )}
            <Link href={token ? "/chat" : "/sign-in?redirect=/chat"}>
              <Button variant="outline">Try Chat</Button>
            </Link>
          </nav>

          <ThemeToggle />

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <SheetClose asChild>
                  <Link href="/">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={closeMobileMenu}
                    >
                      Home
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/about">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/pricing">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={closeMobileMenu}
                    >
                      Pricing
                    </Button>
                  </Link>
                </SheetClose>
                {token && (
                  <SheetClose asChild>
                    <Link href="/settings">
                      <Button
                        variant="ghost"
                        className="w-full justify-start"
                        onClick={closeMobileMenu}
                      >
                        Settings
                      </Button>
                    </Link>
                  </SheetClose>
                )}
                <SheetClose asChild>
                  <Link href={token ? "/chat" : "/sign-in?redirect=/chat"}>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={closeMobileMenu}
                    >
                      Try Chat
                    </Button>
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}