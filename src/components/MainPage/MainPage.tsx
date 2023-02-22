import React, {useState} from 'react';
import s from '../MainPage/MainPage.module.scss'
import left from '../../assets/images/left.svg'
import leftPads from '../../assets/images/left_pads.svg'
import leftMobile from '../../assets/images/left_mobile.svg'
import right from '../../assets/images/right.svg'
import rightPad from '../../assets/images/rightPad.svg'
import rightMobile from '../../assets/images/rightMobile.svg'
import logo from '../../assets/images/logo.svg'
import arrowRight from '../../assets/images/arrow-right.svg'
import {Counter} from "./Counter/Counter";
import {Footer} from "./Footer/Footer";

export const MainPage = () => {
    const [refresh, setRefresh] = useState(true)
    const refreshPage = ()=>{
        console.log('rest')
        setRefresh(prevState => !prevState)
    }
    return (
        <div className={s.wrapper}>
            <div className={s.mainContainer}>
                <div className={s.sideBlock1}>
                    {/*<img className={s.imgDesktop} src={left} alt={'left wing background'}/>*/}
                    {/*<img className={s.imgPad} src={leftPads} alt={'left wing background'}/>*/}
                    {/*<img className={s.imgMobile} src={leftMobile} alt={'left wing background'}/>*/}
                </div>
                <div className={s.mainBlock}>
                    <img className={s.logo} onClick={refreshPage} src={logo} alt={'logo'}/>
                    <h1 className={s.title}>
                        Under Construction
                    </h1>
                    <span className={s.description}>
                    We're making lots of improvements and will be back soon
                </span>
                    <Counter/>
                    <span className={s.btnHeader}>Check our event page when you wait:</span>
                    <button className={s.btn}>
                        <a target={'_blank'} href={'https://leadadvisors.org/'} className={s.btnTitle}>Go to the event</a>
                        <img src={arrowRight} alt={'right arrow'}/>
                    </button>
                </div>
                <div className={s.sideBlock2}>
                    {/*<img className={s.imgDesktop} src={right} alt={'right wing background'}/>*/}
                    {/*<img className={s.imgPad} src={rightPad} alt={'right wing background'}/>*/}
                    {/*<img className={s.imgMobile} src={rightMobile} alt={'right wing background'}/>*/}
                </div>
            </div>
            <Footer/>
        </div>
    );
};

