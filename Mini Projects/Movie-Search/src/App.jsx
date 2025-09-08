import { useEffect, useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import MovieGrid from './components/MovieGrid'
import { Routes, Route } from "react-router-dom"
import FavoritesPage from './components/Favorites'

function App() {
  let [MovieName, setMovieName] = useState("")
  let [Movies, setMovies] = useState([])
  const [loading, setloading] = useState(false)
  let [Favorites, setFavorites] = useState([])

  useEffect(() => {
    let stored = localStorage.getItem("favorites")
    if (stored) setFavorites(JSON.parse(stored))
  }, [])

  // Getting Movie name from user input
  function GetMovieName(EnteredValue) {
    setMovieName(EnteredValue)
  }

  // Add to favorites
  function AddFavorites(movie) {
    setFavorites(prev => {
      const updated = [...prev, movie]
      localStorage.setItem("favorites", JSON.stringify(updated))
      return updated
    })
  }

  // Fetching API
  async function SearchMovies() {
    if (!MovieName.trim()) {
      setMovies([])
      return
    }

    setloading(true)
    try {
      let URL = `http://www.omdbapi.com/?s=${MovieName}&apikey=d36371c9`
      let response = await fetch(URL)
      let data = await response.json()
      if (data.Response === "True") setMovies(data.Search)
    } catch {
      console.log("Error")
    } finally {
      setloading(false)
    }
  }

  // Fetching API when movie changes
  useEffect(() => { SearchMovies() }, [MovieName])

  return (
    <div className='bg-[#222831] w-full h-full min-h-screen'>
      <Nav onValueChange={GetMovieName} />
      <Routes>
        <Route
          path='/favorites'
          element={<FavoritesPage list={Favorites} setFavorites={setFavorites} />}
        />
        <Route
          path='/'
          element={
            <MovieGrid
              Movies={Movies}
              loading={loading}
              AddFavorites={AddFavorites}
            />
          }
        />
      </Routes>
    </div>
  )
}

export default App
