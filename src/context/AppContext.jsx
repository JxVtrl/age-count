import React, { createContext, useContext, useEffect, useState, useRef } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
    const [inputFilled, setInputFilled] = useState(false)
    const [ageYears, setAgeYears] = useState(undefined)
    const [secondsToBirthday, setSecondsToBirthday] = useState(undefined)
    const [name, setName] = useState(undefined)
    const [birthDate, setBirthDate] = useState(undefined)

    const today = new Date()
    const todayYear = today.getFullYear()
    const todayMonth = today.getMonth()
    const todayDay = today.getDate()
    const todayHour = today.getHours()
    const todayMinute = today.getMinutes()
    const todaySecond = today.getSeconds()

    useEffect(() => {
        if (localStorage.getItem('name') && localStorage.getItem('born')) {
            setName(localStorage.getItem('name'))
            setBirthDate(localStorage.getItem('born'))
            setInputFilled(true)
            calculateAge()
        }
        else setInputFilled(false)
    },[])

    const calculateAge = () => {
        const born = localStorage.getItem('born')
        const yearBorn = born.split('-')[0]
        const monthBorn = born.split('-')[1]
        const dayBorn = born.split('-')[2]

        let nextBirthday
        if (monthBorn > todayMonth) {
            setAgeYears(todayYear - yearBorn - 1)
            nextBirthday = `${todayYear}-${monthBorn}-${dayBorn}`
        }
        else if (monthBorn === todayMonth && dayBorn > todayDay) {
            setAgeYears(todayYear - yearBorn - 1)
            nextBirthday = `${todayYear}-${monthBorn}-${dayBorn}`
        }
        else if (monthBorn <= todayMonth && dayBorn <= todayDay) {
            setAgeYears(todayYear - yearBorn)
            nextBirthday = `${todayYear + 1}-${monthBorn}-${dayBorn}`
        }

        setInterval(() => {
            setSecondsToBirthday(((new Date(nextBirthday).getTime() - new Date().getTime()) / 1000) - (todaySecond + todayMinute * 60 + todayHour * 3600))
            ageLived(yearBorn, monthBorn, dayBorn, todayYear, todayMonth, todayDay, todayHour, todayMinute, todaySecond)
        }, 20)
    }

    const [yearsLived, setYearsLived] = useState(0)
    const [monthsLived, setMonthsLived] = useState(0)
    const [daysLived, setDaysLived] = useState(0)
    const [hoursLived, setHoursLived] = useState(0)
    const [minutesLived, setMinutesLived] = useState(0)
    const [secondsLived, setSecondsLived] = useState(0)

    const ageLived = (
        yearBorn,
        monthBorn,
        dayBorn,
        todayYear,
        todayDay,
        todayHour,
        todayMinute,
        todaySecond
    ) => { 
        // years lived
        if(monthBorn > todayMonth) 
            setYearsLived(todayYear - yearBorn - 1)
        else setYearsLived(todayYear - yearBorn)

        // months lived
       
        if (todayMonth - monthBorn < 0)
            setMonthsLived(todayMonth + (monthBorn - 12) + (todayYear - yearBorn - 1) * 12)
        else setMonthsLived(todayMonth + (todayYear - yearBorn) * 12)
        

        /// WRONG DOWN HERE

        // days lived
        if (daysLived < 0) {
            setDaysLived(31 + daysLived)
            setDaysLived(daysLived + (todayMonth - monthBorn - 1) * 31)
        } else setDaysLived(daysLived + (todayMonth - monthBorn) * 31)

        // hours lived
        setHoursLived(daysLived * 24 + todayHour)

        // minutes lived
        setMinutesLived(hoursLived * 60 + todayMinute)

        // seconds lived
        setSecondsLived(minutesLived * 60 + todaySecond)
    }

    useEffect(() => {
        console.log(monthsLived)
    }, [monthsLived])

    const value = {
        setInputFilled,
        inputFilled,
        secondsToBirthday,
        yearsLived,
        monthsLived,
        daysLived,
        hoursLived,
        minutesLived,
        secondsLived,
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
