import React from 'react';
import s from '../Counter/Counter.module.scss'
import back from '../../../assets/images/count.svg'

export const Counter = () => {
    return (
        <div className={s.counterBlock}>
            <div>
                <div className={s.number}>92</div>
                <div className={s.img} style={{backgroundImage: `url(${back})`}}>Days</div>
            </div>
            <div className={s.colon}>:</div>
            <div>
                <div className={s.number}>12</div>
                <div className={s.img} style={{backgroundImage: `url(${back})`}}>Hours</div>
            </div>
            <div className={s.colon}>:</div>
            <div>
                <div className={s.number}>48</div>
                <div className={s.img} style={{backgroundImage: `url(${back})`}}>Minutes</div>
            </div>
            <div className={s.colon}>:</div>
            <div>
                <div className={s.number}>32</div>
                <div className={s.img} style={{backgroundImage: `url(${back})`}}>Seconds</div>
            </div>
        </div>
    );
};

