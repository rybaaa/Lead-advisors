import React from 'react';
import s from '../Footer/Footer.module.scss'

export const Footer = () => {
    return (
        <div className={s.footer}>
            <input className={s.input} type={'email'} placeholder={'Enter your Email and get notified'}>
            </input>
        </div>
    );
};

