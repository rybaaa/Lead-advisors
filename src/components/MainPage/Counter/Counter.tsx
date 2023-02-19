import React, {useEffect, useRef, useState} from 'react';
import s from '../Counter/Counter.module.scss'
import back from '../../../assets/images/count.svg'

export const Counter = () => {
    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSeconds, setTimerSeconds] = useState('00')

    const hours = timerHours.length === 2 ? timerHours : '0' + timerHours
    const minutes = timerMinutes.length === 2 ? timerMinutes : '0' + timerMinutes
    const seconds = timerSeconds.length === 2 ? timerSeconds : '0' + timerSeconds

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date('May 31 2023 00:00:00').getTime()
        // @ts-ignore
        interval.current = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            if (distance > 0) {
                setTimerDays(days.toString())
                setTimerHours(hours.toString())
                setTimerMinutes(minutes.toString())
                setTimerSeconds(seconds.toString())
            } else {
                clearInterval(interval.current)
            }
        }, 1000)
    }

    useEffect(() => {
        startTimer()
        return () => {
            clearInterval(interval.current)
        }
    }, [])
    console.log(new Date('May 31 2023 00:00:00').getTime())
    return (
        <div className={s.counterBlock}>
            <div>
                <div className={s.number}>{timerDays}</div>
                <div className={s.img} style={{backgroundImage: `url(${back})`}}>Days</div>
            </div>
            <div className={s.colon}>:</div>
            <div>
                <div className={s.number}>{hours}</div>
                <div className={s.img} style={{backgroundImage: `url(${back})`}}>Hours</div>
            </div>
            <div className={s.colon}>:</div>
            <div>
                <div className={s.number}>{minutes}</div>
                <div className={s.img} style={{backgroundImage: `url(${back})`}}>Minutes</div>
            </div>
            <div className={s.colon}>:</div>
            <div>
                <div className={s.number}>{seconds}</div>
                <div className={s.img} style={{backgroundImage: `url(${back})`}}>Seconds</div>
            </div>
        </div>
    );
};

