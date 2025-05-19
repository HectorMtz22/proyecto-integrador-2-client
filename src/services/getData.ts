const API_URL = 'http://localhost:5000'

export default async function getData(semestre: string) {
    if (!semestre) return null
    const endpoint = `${API_URL}/data?`
    const res = await fetch(endpoint + new URLSearchParams({
        // Add any query parameters here
        semestre
    }))
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    const data = await res.json()
    console.log(data)
    return data 
}