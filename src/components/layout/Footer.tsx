import Link from "next/link";
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Maylor Taylor Section */}
          <div>
            <h3 className="text-lg font-bold text-[#263d42] mb-4">Maylor Taylor</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:maylortaylor@gmail.com"
                  className="text-gray-600 hover:text-[#80ced7] transition-colors flex items-center gap-2"
                >
                  <Mail size={16} />
                  Email
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/maylortaylor"
                  className="text-gray-600 hover:text-[#80ced7] transition-colors flex items-center gap-2"
                >
                  <Github size={16} />
                  Github
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/maylortaylor/"
                  className="text-gray-600 hover:text-[#80ced7] transition-colors flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://stackoverflow.com/users/1848526/maylortaylor"
                  className="text-gray-600 hover:text-[#80ced7] transition-colors flex items-center gap-2"
                >
                  <MessageCircle size={16} />
                  StackOverflow
                </a>
              </li>
            </ul>
          </div>

          {/* Things I Do Section */}
          <div>
            <h3 className="text-lg font-bold text-[#263d42] mb-4">Things I Do</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="http://linktree.com/stpetemusic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#80ced7] transition-colors font-semibold block"
                >
                  @StPeteMusic
                </a>
                <span className="text-sm text-gray-500">Showcase bands in St Petersburg, FL</span>
              </li>
              <li>
                <a
                  href="https://linktree.com/suite_e_studios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#80ced7] transition-colors font-semibold block"
                >
                  @Suite.E.Studios
                </a>
                <span className="text-sm text-gray-500">Studio space in St Petersburg, FL</span>
              </li>
            </ul>
          </div>

          {/* Music I Like Section */}
          <div>
            <h3 className="text-lg font-bold text-[#263d42] mb-4">Music I Like</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://music.youtube.com/playlist?list=OLAK5uy_nuW1UaZc0--8a_BsoqjrXyuGDHvbW6H4U"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#80ced7] transition-colors"
                >
                  Lotus
                </a>
              </li>
              <li>
                <a
                  href="https://music.youtube.com/watch?v=dEP0Gi8kZhg&feature=share"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#80ced7] transition-colors"
                >
                  Tycho
                </a>
              </li>
              <li>
                <a
                  href="https://music.youtube.com/playlist?list=OLAK5uy_lj-Y9iJ2plODVt1TEoMmiDRfpR2mSBQCg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#80ced7] transition-colors"
                >
                  Keller Williams
                </a>
              </li>
              <li>
                <a
                  href="https://music.youtube.com/playlist?list=OLAK5uy_mq5vX-bGkt2Dx4-6WKliHnYShG07QbB-M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-[#80ced7] transition-colors"
                >
                  Boombox
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-gray-200 pt-8 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/about" className="text-gray-600 hover:text-[#80ced7] transition-colors">
            About
          </Link>
          <Link href="/cv" className="text-gray-600 hover:text-[#80ced7] transition-colors">
            CV
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-[#80ced7] transition-colors">
            Blog
          </Link>
          <Link href="/apps" className="text-gray-600 hover:text-[#80ced7] transition-colors">
            Apps
          </Link>
          <Link href="/tags" className="text-gray-600 hover:text-[#80ced7] transition-colors">
            Tags
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm mt-6">
          <p>© {new Date().getFullYear()} Matt Maylor Taylor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
