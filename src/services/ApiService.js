import { useState, useEffect } from 'react'

export function useApiRequest(url) {
  const [data, setData] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const result = await response.json()
        if (result === 'can not get user') {
          console.error(result)
          setError(result)
        } else {
          setData(result.data)
        }
      } catch (error) {
        console.error(error)
        setError(error)
      }
      setIsLoaded(true)
    }
    fetchData()
  }, [url, setData])

  return { error, isLoaded, data }
}
