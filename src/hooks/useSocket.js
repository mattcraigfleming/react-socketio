import { useEffect, useState } from 'react'
import io from 'socket.io-client'

export const useSocket = (url) => {
  const [socket, setSocket] = useState(null)
  useEffect(() => {
    const socketIo = io(url)
    setSocket(socketIo)
    return () => {
      socketIo.disconnect()
    }
  }, [])
  return socket
}
