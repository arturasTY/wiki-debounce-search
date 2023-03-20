import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
      const doDebounce = setTimeout(() => setDebouncedValue(value), delay)
      return () => {
        clearTimeout(doDebounce)
      }
    }, [value, delay])
    
    return debouncedValue
}