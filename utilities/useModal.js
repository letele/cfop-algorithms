import { useEffect, useState, useRef } from 'react'

const useModal = () => {
    const [toggled, setToggled ] = useState(false)

    const mouseOver = val => toggled && setToggled(val)
    
    const ref = useRef(null)


    useEffect(() => {
        const clickOutside = e => 
        ref.current && !ref.current.contains(e.target) &&  setToggled(false)
        
        document.addEventListener("mousedown", clickOutside)
        
        const cleanup = () => 
        document.removeEventListener("mousedown", clickOutside)
        
        return cleanup
    }, [ref])

    return { mouseOver, ref, setToggled , toggled, }
}

export default useModal


