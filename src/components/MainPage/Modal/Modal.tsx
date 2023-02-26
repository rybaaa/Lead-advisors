import React from 'react';
import s from '../Modal/Modal.module.scss'
import close from '../../../assets/images/close.svg'

type ModalPropsType = {
    isActive: boolean
    setIsActive: (value:boolean) => void
}

export const Modal = (props: ModalPropsType) => {
    const closeModal = ()=>{
        props.setIsActive(false)
    }
    return (
        <div className={props.isActive? `${s.wrapper_active} ${s.wrapper}` : s.wrapper} onClick={closeModal}>
            <div className={s.container} onClick={e=>e.stopPropagation()}>
                <div className={s.imgClose}>
                    <img src={close} onClick={closeModal} alt={'close modal'}/>
                </div>
                <h2 className={s.title}>SUCCESS</h2>
                <span className={s.description}>You have successfully subscribed to the email newsletter</span>
                <button onClick={closeModal} className={s.btn}>Close</button>
            </div>

        </div>
    );
};

