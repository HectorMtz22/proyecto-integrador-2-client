import { Component } from '@/components/MyChart'
import './App.css'

function App() {
  return (
    <>
      <div className='flex items-center flex-col w-full h-screen justify-center'>
        <h1>Dashboard</h1>
        <div className='w-full max-w-2xl'>
          <Component />
        </div>
      </div>
    </>
  )
}

export default App
