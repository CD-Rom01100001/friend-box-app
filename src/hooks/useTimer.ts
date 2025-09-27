import { useEffect, useState } from "react"

/* таймер */
export const useTimer = (second: number, onFinish: ()=>void) => {
  const [timeAgo, setTimeAgo] = useState<number>(second)

  useEffect(() => {
    const timer = setInterval(() => {

      setTimeAgo((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer)
          onFinish()
          return 0
        }
        return prevTime - 1
      })
    }, 1000)

    return () => clearInterval(timer)// на случай если компонент размонтируется
  }, [onFinish])

  return timeAgo
}