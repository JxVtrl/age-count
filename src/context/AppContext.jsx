import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [bornDate, setBornDate] = useState(undefined)
    const [name, setName] = useState(undefined)

    useEffect(() => { 
        localStorage.setItem('name', name)
    }, [name])

    useEffect(() => { 
        localStorage.setItem('borndate', bornDate)
    }, [bornDate])

    const value = {
        setBornDate,
        bornDate,
        
        name,
        setName,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
