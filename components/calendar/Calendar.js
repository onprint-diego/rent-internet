import React, { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { format } from 'date-fns'
import es from 'date-fns/locale/es'
import {
    CalendarContainer,
} from './Elements'

const Calendar = ({ setQty, setDates }) => {

    const [ range, setRange ] = useState()

    const handleSelect = (date) =>{
        setRange(date)
    }

    useEffect(() => {
        if(range?.from && range?.to) {
            const rangeInTime = range.to.getTime() - range.from.getTime() 
            //Add one day to include initial day
            const rangeInDays = rangeInTime / (1000 * 3600 * 24) + 1
            // Every 7 days add 1 qty and round always up
            const qty = Math.ceil(rangeInDays / 7)
            setQty(qty)
            setDates({
                from: format(range.from, 'dd/MM/yyyy'),
                to: format(range.to, 'dd/MM/yyyy')
            })
        }
    }, [range])


    return (
        <CalendarContainer>
            <DayPicker
            selected={range}
            onSelect={handleSelect}
            mode="range"
            locale={es}
            fromDate={new Date()}
            />
        </CalendarContainer>
    )
}

export default Calendar