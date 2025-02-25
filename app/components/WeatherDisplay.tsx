import { Cloud, Sun, CloudRain, Wind, Droplet, Thermometer } from "lucide-react"

interface WeatherDisplayProps {
  weather: {
    location: {
      name: string
      country: string
    }
    current: {
      temp_c: number
      condition: {
        text: string
        icon: string
      }
      humidity: number
      wind_kph: number
      feelslike_c: number
    }
  }
}

export default function WeatherDisplay({ weather }: WeatherDisplayProps) {
  const { location, current } = weather

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case "sunny":
      case "clear":
        return <Sun className="w-16 h-16 text-yellow-400" />
      case "cloudy":
      case "partly cloudy":
        return <Cloud className="w-16 h-16 text-gray-400" />
      case "rain":
      case "light rain":
      case "moderate rain":
        return <CloudRain className="w-16 h-16 text-blue-400" />
      default:
        return <Cloud className="w-16 h-16 text-gray-400" />
    }
  }

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-lg p-8 text-white">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-semibold">{location.name}</h2>
          <p className="text-lg">{location.country}</p>
        </div>
        {getWeatherIcon(current.condition.text)}
      </div>
      <div className="mb-6">
        <p className="text-6xl font-bold">{current.temp_c}°C</p>
        <p className="text-xl mt-2">{current.condition.text}</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center bg-white bg-opacity-10 rounded-lg p-3">
          <Wind className="w-6 h-6 mr-2" />
          <span>{current.wind_kph} km/h</span>
        </div>
        <div className="flex items-center bg-white bg-opacity-10 rounded-lg p-3">
          <Droplet className="w-6 h-6 mr-2" />
          <span>{current.humidity}%</span>
        </div>
        <div className="flex items-center bg-white bg-opacity-10 rounded-lg p-3">
          <Thermometer className="w-6 h-6 mr-2" />
          <span>Feels like {current.feelslike_c}°C</span>
        </div>
      </div>
    </div>
  )
}

