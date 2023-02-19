import React from 'react';
import s from '../Footer/Footer.module.scss'
import arrow from '../../../assets/images/arrow-right-input.svg'
import {useFormik} from "formik";
import * as yup from 'yup'

export const Footer = () => {
    const validationSchema = yup.object({
        email: yup.string().email('Invalid email address').required('Email is required')
    })
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <div className={s.footer}>
            <form onSubmit={formik.handleSubmit}>
                <input
                    id={'email'}
                    className={s.input}
                    type={'email'}
                    placeholder={'Enter your Email and get notified'}
                    {...formik.getFieldProps('email')}
                >
                </input>
                <button type={'submit'} aria-hidden={true} className={s.btn}>
                    <img src={arrow} alt={'arrow'}/>
                </button>
                {formik.touched.email && formik.errors.email && (
                    <div className={s.error}>{formik.errors.email}</div>
                )}
            </form>
        </div>
    );
};

