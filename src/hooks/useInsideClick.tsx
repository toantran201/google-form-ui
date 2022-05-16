import { RefObject, useEffect } from 'react'

const useInsideClick = (
  ref: RefObject<HTMLElement | undefined>,
  fnHandler: () => void,
  isActive: boolean
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (isActive) return
      if (ref && (!ref.current || !ref.current?.contains(event.target as Node)))
        return
      fnHandler()
    }
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, fnHandler, isActive])
}

export default useInsideClick
