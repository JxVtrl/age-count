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

    const [option, setOption] = useState(0);
    const [yearPercentage, setYearPercentage] = useState(0);

    const secondsInAYear = 365 * 24 * 60 * 60;

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
            return yearsLived
        else if (num === 1)
            return monthsLived
        else if (num === 2)
            return daysLived
        else if (num === 3)
            return hoursLived
        else if (num === 4)
            return minutesLived
        else
            return secondsLived
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