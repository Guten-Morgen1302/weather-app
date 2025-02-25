"use client"

import { useState } from "react"
import { useWeather } from "./useWeather"
import Header from "./components/Header"
import WeatherDisplay from "./components/WeatherDisplay"
import Footer from "./components/Footer"
import LoadingSpinner from "./components/LoadingSpinner"

export default function WeatherApp() {
  const [city, setCity] = useState("")
  const { weather, loading, error } = useWeather(city)

  const handleSearch = (searchCity: string) => {
    setCity(searchCity)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-400 to-purple-500 dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
      <Header onSearch={handleSearch} />
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {loading && <LoadingSpinner />}
          {error && (
            <div className="text-red-200 text-center mt-4 p-4 bg-red-500 bg-opacity-20 rounded-lg backdrop-blur-lg">
              <p>{error}</p>
            </div>
          )}
          {weather && <WeatherDisplay weather={weather} />}
        </div>
      </main>
      <Footer />
    </div>
  )
}

