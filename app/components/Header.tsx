"use client"

import type React from "react"

import { useState } from "react"
import { Search, Mic, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"

interface HeaderProps {
  onSearch: (city: string) => void
}

export default function Header({ onSearch }: HeaderProps) {
  const [input, setInput] = useState("")
  const { theme, setTheme } = useTheme()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim()) {
      onSearch(input.trim())
      setInput("")
    }
  }

  return (
    <header className="bg-white bg-opacity-20 backdrop-blur-lg shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <Sun className="w-8 h-8 text-yellow-400 mr-2" />
          <h1 className="text-2xl font-bold text-white">Real Time Weather</h1>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/" className="text-white hover:text-blue-200 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-blue-200 transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-white hover:text-blue-200 transition-colors">
            Contact
          </Link>
        </nav>
        <form onSubmit={handleSubmit} className="flex items-center mt-4 md:mt-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter city name"
            className="px-4 py-2 rounded-l-full bg-white bg-opacity-20 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-r-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            className="ml-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <Mic size={20} />
          </button>
        </form>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="ml-4 p-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  )
}

