import { useEffect, useState } from "react"

/* таймер */
export const useTimer = (second: number, onFinish: ()=>void) => {
  const [timeAgo, setTimeAgo] = useState<number>(second)

  useEffect(() => {
    if (timeAgo === 0) onFinish()
  }, [timeAgo, onFinish])

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeAgo((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1
        }
        return 0
      })
    }, 1000)
    return () => clearInterval(timer)// на случай если компонент размонтируется
  }, [])

  return timeAgo
}