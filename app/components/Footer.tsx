import Link from "next/link"
import { Twitter, Instagram, GitlabIcon as GitHub } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg mt-auto">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-white">&copy; 2025 Real Time Weather App. All rights reserved.</p>
          </div>
          <div className="w-full md:w-1/3 text-center mb-4 md:mb-0">
            <nav className="space-x-4">
              <Link href="/about" className="text-sm text-white hover:text-blue-200 transition-colors">
                About
              </Link>
              <Link href="/privacy" className="text-sm text-white hover:text-blue-200 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-white hover:text-blue-200 transition-colors">
                Terms
              </Link>
            </nav>
          </div>
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                <GitHub size={20} />
              </a>
            </div>
            <p className="text-xs text-white mt-2">Powered by WeatherAPI</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

