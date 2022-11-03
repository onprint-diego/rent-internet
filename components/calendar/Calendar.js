import React, { useEffect, useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/dist/style.css'
import { format } from 'date-fns'
import es from 'date-fns/locale/es'
import {
    CalendarContainer,
    Label,
} from './Elements'

const Calendar = ({ cart, setCart, text = '', setDisabled }) => {

    const [ range, setRange ] = useState()

    const handleSelect = (date) =>{
        setRange(date)
    }

    useEffect(() => {
        if(range?.from && range?.to) {
            const rangeInTime = range.to.getTime() - range.from.getTime() 
            // Add one day to include initial day
            const rangeInDays = rangeInTime / (1000 * 3600 * 24)
            // Every 14 days add 1 qty and round always up
            const qty = Math.ceil(rangeInDays / 7)

            const updatedMainProductPrice = cart.mainProductPrice * qty

            setCart({
                ...cart,
                qty: qty,
                from: format(range.from, 'dd/MM/yyyy'),
                to: format(range.to, 'dd/MM/yyyy'),
                subtotal: updatedMainProductPrice,
                total: updatedMainProductPrice + cart.shippingFee + cart.deposit,
            })

            setDisabled(false)
        }
    }, [range])


    return (
        <CalendarContainer>
            <style>{`.rdp-day_selected {background-color: var(--main-dark-blue);}`}</style>
            <Label>{text}</Label>
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