import { useState, useEffect } from 'react'
import { MyChart } from '@/components/MyChart'
import getData from './services/getData'
import './App.css'

function App() {
  const [data, setData] = useState<any>(null)
  const [semestre, setSemestre] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getData(semestre)
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setError(error)
        setLoading(false)
      })
  }, [semestre])

  return (
    <main className='flex flex-col w-full h-screen'>
      {/* Header */}
      <header className='flex items-center justify-between w-full h-16 px-10 text-white bg-gray-800'>
        <h1>Dashboard de alumnos</h1>
      </header>
      <div className='flex items-center flex-col w-full h-screen justify-center '>
        {loading && <p className='text-2xl text-gray-500'>Cargando Dashboard...</p>}
        {error && <p className='text-2xl text-red-500'>Error: {error}</p>}
        {data && (
          <div className='w-full flex p-10 gap-10'>
            <section className='w-full'>
              <MyChart 
                title="Egresados vs Titulados"
                description="Mostrando el total de egresados y titulados por semestre"
                data={data}
                keys={['egresados', 'titulados']}
              />
            </section>
            <section className='w-full'>
              <MyChart 
                title="Cambios de Carrera"
                description="Mostrando la cantidad de personas que cambiaron de carrera normal y por 6tas"
                data={data}
                keys={['cambios_carrera', 'cambios_6ta_oportunidad']}
              />
            </section>
            
          </div>
        )}
        {!loading && !error && !data && (
          <div className='flex flex-col items-center justify-center w-full h-full'>
            <h2 className='text-2xl text-gray-500'>Datos de alumnos de la carrera ITS</h2>
            <p className='text-gray-500'>Por favor, selecciona un semestre</p>
            <select
              className='mt-4 p-2 border border-gray-300 rounded'
              value={semestre}
              onChange={(e) => setSemestre(e.target.value)}
            >
              <option value="">Selecciona un semestre</option>
              <option value="A2010">A2010</option>
              <option value="E2010">E2010</option>
              <option value="A2011">A2011</option>
              <option value="E2011">E2011</option>
              <option value="A2012">A2012</option>
              <option value="E2012">E2012</option>
              <option value="A2013">A2013</option>
              <option value="E2013">E2013</option>
              <option value="A2014">A2014</option>
              <option value="E2014">E2014</option>
              <option value="A2015">A2015</option>
              <option value="E2015">E2015</option>
              <option value="A2016">A2016</option>
              <option value="E2016">E2016</option>
              <option value="A2017">A2017</option>
              <option value="E2017">E2017</option>
              <option value="A2018">A2018</option>
              <option value="E2018">E2018</option>
              <option value="A2019">A2019</option>
              <option value="E2019">E2019</option>
              <option value="A2020">A2020</option>
              <option value="E2020">E2020</option>
              <option value="A2021">A2021</option>
              <option value="E2021">E2021</option>
              <option value="A2022">A2022</option>
              <option value="E2022">E2022</option>
              <option value="A2023">A2023</option>
              <option value="E2023">E2023</option>
            </select>
            <button
              className='mt-4 p-2 bg-green-600 text-white rounded'
              onClick={() => {
                setLoading(true)
                getData(semestre)
                  .then((data) => {
                    setData(data)
                    setLoading(false)
                  })
                  .catch((error) => {
                    console.error('Error fetching data:', error)
                    setError(error)
                    setLoading(false)
                  })
              }}
            >
              Cargar datos
            </button>
          </div>
        )}
      </div>
    </main>
  )
}

export default App
