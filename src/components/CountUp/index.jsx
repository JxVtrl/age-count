import React, { useEffect, useState } from "react";

import { Input } from "./styles";
import { useApp } from "../../context/AppContext";

export function CountUp() {
    const {
        secondsToBirthday,
        yearsLived,
        monthsLived,
        daysLived,
        hoursLived,
        minutesLived,
        secondsLived
    } = useApp();

    const secondsInAYear = 365 * 24 * 60 * 60;
    const [option, setOption] = useState(0);
    const [yearPercentage, setYearPercentage] = useState(0);

    const [livedSeconds, setLivedSeconds] = useState(0);
    const [livedMinutes, setLivedMinutes] = useState(0);
    const [livedHours, setLivedHours] = useState(0);
    const [livedDays, setLivedDays] = useState(0);
    const [livedMonths, setLivedMonths] = useState(0);
    const [livedYears, setLivedYears] = useState(0);


    useEffect(() => {
        setLivedSeconds(secondsLived)
    }, [secondsLived])

    useEffect(() => {
        setLivedMinutes(minutesLived)
    }, [minutesLived])

    useEffect(() => {
        setLivedHours(hoursLived)
    }, [hoursLived])

    useEffect(() => {
        setLivedDays(daysLived)
    }, [daysLived])

    useEffect(() => {
        setLivedMonths(monthsLived)
    }, [monthsLived])

    useEffect(() => {
        setLivedYears(yearsLived)
    }, [yearsLived])

    useEffect(() => {
        setYearPercentage(secondsToBirthday/secondsInAYear)
    }, [secondsToBirthday])

    const handleClick = () => {
       // add 1 to option
        setOption(option + 1)
        
        if (option > 5) setOption(0)

        console.log(option)
    }

    const getOption = num => {
        if (num === 0)
            return livedYears
        else if (num === 1)
            return livedMonths
        else if (num === 2)
            return livedDays
        else if (num === 3)
            return livedHours
        else if (num === 4)
            return livedMinutes
        else
            return livedSeconds
    }

    const getOptionDescription = num => {
        if (num === 0)
            return 'Years lived'
        else if (num === 1)
            return 'Months lived'
        else if (num === 2)
            return 'Days lived'
        else if (num === 3)
            return 'Hours lived'
        else if (num === 4)
            return 'Minutes lived'
        else
            return 'Seconds lived'
    }

    return (
        <div>
            <section onClick={handleClick}>
                <h1>{getOption(option)}</h1>
                <h3>{getOptionDescription(option)}</h3>
            </section>
            <section>next birthday: {yearPercentage}</section>
        </div>
    )
}