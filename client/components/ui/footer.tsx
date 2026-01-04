"use client";

import { Zap, Star, Github, Mail, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/components/theme-provider";

export default function footer() {
  const { darkMode } = useTheme();

  return (
    <footer className="border-t py-12 bg-background px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo + Description */}
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center">
              <Image
                src={darkMode ? "/logos/logo-dark.svg" : "/logos/logo-light.svg"}
                alt="PrivGPT Studio Logo"
                width={290}
                height={53}
                priority
                className="w-[220px] h-auto"
              />
            </Link>

            <p className="text-muted-foreground">
              The future of AI conversations, powered by both cloud and local
              models.
            </p>
          </div>

          {/* Community */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link
                  href="https://github.com/Rucha-Ambaliya/PrivGPT-Studio/issues"
                  target="_blank"
                  className="hover:text-foreground"
                >
                  Open Issues
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Rucha-Ambaliya/PrivGPT-Studio?tab=readme-ov-file#-contributing"
                  target="_blank"
                  className="hover:text-foreground"
                >
                  Contribute
                </Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="/chat" className="hover:text-foreground">
                  Chat Interface
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  API Access
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-foreground">
                  Model Library
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <Link href="#" className="hover:text-foreground">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect (FIXED AS PER ISSUE #60) */}
          <div className="md:col-span-2">
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-5 text-muted-foreground">
              {/* GitHub */}
              <a
                href="https://github.com/Rucha-Ambaliya/PrivGPT-Studio"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-foreground transition"
              >
                <Github className="w-6 h-6" />
              </a>

              {/* Discord */}
              <a
                href="https://discord.gg/J9z5T52rkZ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="hover:text-foreground transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 127.14 96.36"
                  className="w-6 h-6 fill-current"
                >
                  <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.9 32.65-2.65 56.6 1.9 80.21a105.73 105.73 0 0 0 32.06 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.35 2.66-2.06 20.94 9.79 43.6 9.79 64.28 0 .87.71 1.76 1.4 2.66 2.06a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.06-16.14c4.95-27.28-8.26-51.13-24.91-72.14Z" />
                </svg>
              </a>

              {/* Email */}
              <Link
                href="/"
                aria-label="Email"
                className="hover:text-foreground transition"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2026 PrivGPT Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
