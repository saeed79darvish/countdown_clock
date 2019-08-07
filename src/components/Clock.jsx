import React, { useState, useEffect } from 'react'

export default function Clock({ message }) {

    const [day, setDays] = useState(0)
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    const [second, setSecond] = useState(0)

    useEffect(() => {
        getTime(message)
    }, [setInterval(() => getTime(message), 1000)])

    const getTime = (text) => {
        const time = Date.parse(text) - Date.parse(new Date());

        const second = Math.floor((time / 1000) % 60)
        const minute = Math.floor((time / 1000 / 60) % 60)
        const hour = Math.floor((time / 1000 / 60 / 60) % 24)
        const day = Math.floor((time / (1000 * 60 * 60 * 24)))

        setDays(day)
        setMin(minute)
        setSecond(second)
        setHour(hour)
    }

    const numFormater = (num) => {
        if (num < 10) {
            num = "0" + num
        }
        return num;
    }
    return (

        < div >
            <div style={{ display: "inline" }}> {numFormater(day)} days</div>
            <div style={{ display: "inline" }}> {numFormater(hour)} hours</div>
            <div style={{ display: "inline" }}> {numFormater(min)} mins</div>
            <div style={{ display: "inline" }}> {numFormater(second)} seconds</div>
        </div >
    )
}
