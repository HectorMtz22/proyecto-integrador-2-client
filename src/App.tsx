import { useState, useEffect } from 'react'
import { Component } from '@/components/MyChart'
import getData from './services/getData'
import './App.css'

function App() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getData()
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setError(error)
        setLoading(false)
      })
  }, [])

  return (
    <main className='flex flex-col w-full h-screen'>
      {/* Header */}
      <header className='flex items-center justify-between w-full h-16 px-10 text-white bg-green-600'>
        <h1>Dashboard</h1>
      </header>
      <div className='flex items-center flex-col w-full h-screen justify-center '>
        {loading && <p className='text-2xl text-gray-500'>Cargando Dashboard...</p>}
        {error && <p className='text-2xl text-red-500'>Error: {error}</p>}
        {data && (
          <div className='w-full max-w-2xl'>
            <Component />
          </div>
        )}
      </div>
    </main>
  )
}

export default App
