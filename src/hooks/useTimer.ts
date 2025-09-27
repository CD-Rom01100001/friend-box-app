import { useEffect, useState } from "react"

/* таймер */
export const useTimer = (second: number) => {
  const [timeAgo, setTimeAgo] = useState<number>(second)

  useEffect(() => {
    const timer = setInterval(() => {

      setTimeAgo((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          return 0
        }
        return prevTime - 1
      })

      return () => clearInterval(timer)// на случай если компонент размонтируется
    }, 1000)
  }, [])

  return timeAgo
}