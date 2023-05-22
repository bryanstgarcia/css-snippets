import { useEffect, useRef, useState } from "react"

function useIntersectionObserver (callback = (entry) => {}) {
    const [ isVisible, setIsVisible ] = useState(false)
    const ref = useRef()
    const intersectionCallback = (entries) => {
        const entry = entries[0]
        setIsVisible(prev => {
            return entry.isIntersecting
        })
        callback(entry)
    }
    useEffect(() => {
        let observer = new IntersectionObserver(intersectionCallback)
        observer.observe(ref.current)
    }, [])
    return { ref, isVisible };
}

export default useIntersectionObserver;