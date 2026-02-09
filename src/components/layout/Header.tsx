"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Home Link */}
          <Link
            href="/"
            className="text-xl font-bold text-[#263d42] hover:text-[#80ced7] transition-colors"
          >
            Maylor Taylor
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/about"
              className="text-[#263d42] hover:text-[#80ced7] transition-colors"
            >
              About
            </Link>
            <Link
              href="/cv"
              className="text-[#263d42] hover:text-[#80ced7] transition-colors"
            >
              CV
            </Link>
            <Link
              href="/blog"
              className="text-[#263d42] hover:text-[#80ced7] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/tags"
              className="text-[#263d42] hover:text-[#80ced7] transition-colors"
            >
              Tags
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#263d42] hover:text-[#80ced7] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
            <Link
              href="/about"
              className="text-[#263d42] hover:text-[#80ced7] transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/cv"
              className="text-[#263d42] hover:text-[#80ced7] transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CV
            </Link>
            <Link
              href="/blog"
              className="text-[#263d42] hover:text-[#80ced7] transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/tags"
              className="text-[#263d42] hover:text-[#80ced7] transition-colors block py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Tags
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
