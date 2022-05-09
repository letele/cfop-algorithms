import { useEffect, useState, useRef } from 'react'

const useModal = () => {
    const [toggled, setToggled ] = useState(false)
    
    const ref = useRef(null)


    useEffect(() => {
        const clickOutside = e => 
        ref.current && !ref.current.contains(e.target) &&  setToggled(false)
        
        document.addEventListener("mousedown", clickOutside)
        
        const cleanup = () => 
        document.removeEventListener("mousedown", clickOutside)
        
        return cleanup
    }, [ref])

    return { ref, setToggled , toggled, }
}

export default useModal


