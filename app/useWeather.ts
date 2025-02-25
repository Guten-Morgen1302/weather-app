"use client"

import { useState, useEffect } from "react"

const API_KEY = "1a2bc112ff3747ccbca153635252502"
const API_URL = "https://api.weatherapi.com/v1/current.json"

export function useWeather(city: string) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (!city) return

    const fetchWeather = async () => {
      setLoading(true)
      setError("")

      try {
        const response = await fetch(`${API_URL}?key=${API_KEY}&q=${city}`)
        if (!response.ok) {
          throw new Error("City not found. Please try again.")
        }
        const data = await response.json()
        setWeather(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [city])

  return { weather, loading, error }
}

