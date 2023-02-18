import React from 'react';
import s from '../MainPage/MainPage.module.scss'
import left from '../../assets/images/left.svg'
import right from '../../assets/images/right.svg'
import logo from '../../assets/images/logo.svg'
import arrowRight from '../../assets/images/arrow-right.svg'
import {Counter} from "./Counter/Counter";
import {Footer} from "./Footer/Footer";

export const MainPage = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.mainContainer}>
                <div>
                    <img src={left} alt={'left wing background'}/>
                </div>
                <div className={s.mainBlock}>
                    <img src={logo} alt={'logo'}/>
                    <h1 className={s.title}>
                        Under Construction
                    </h1>
                    <span className={s.description}>
                    We're making lots of improvements and will be back soon
                </span>
                    <Counter/>
                    <span className={s.btnHeader}>Check our event page when you wait:</span>
                    <button className={s.btn}>
                        <span className={s.btnTitle}>Go to the event</span>
                        <img src={arrowRight} alt={'right arrow'}/>
                    </button>
                </div>
                <div>
                    <img src={right} alt={'right wing background'}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

