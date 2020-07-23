import React, {useCallback} from 'react';

import styles from './SignInForm.module.scss';

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

import {validate} from "../../utils/validators";

import useFormWithValidation from "../../hooks/useFormWithValidation";

const defaultState = {
    email: {
        value: '',
        validation: (values, field) => (
            validate(values, field)
                .trim()
                .required('Email')
                .isEmail()
        ),
        errors: []
    },
    password: {
        value: '',
        validation: (values, field) => (
            validate(values, field)
                .trim()
                .required('Password')
                .isAlphaNumeric('Password')
                .minLength(8, 'Password')
                .maxLength(20, 'Password')
        ),
        errors: []
    }
};

const SignInForm = ({ signInStart, loading }) => {
    const {
        fields,
        validateForm,
        handleChange,
        validateInput
    } = useFormWithValidation(defaultState);

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();

            if (!loading) {
                const errors = validateForm();
                !errors.length && signInStart({
                    email: fields.email.value,
                    password: fields.password.value
                });
            }
        },
        [validateForm, fields, signInStart, loading]
    );

    return (
        <form
            className={styles['sign-in-form']}
            onSubmit={handleSubmit}
        >
            <h2 className={styles['form__title']}>
                Sign In
            </h2>
            <ul className={styles['form__errors']}>
                {
                    Object.values(fields).map(
                        ({ errors }, index) => (
                            errors.length ? (
                                <li
                                    key={index}
                                    className={styles['form-errors__item']}
                                >
                                    { errors[0] }
                                </li>
                            ) : null
                        )
                    )
                }
            </ul>
            <FormInput
                id='email'
                label='Email'
                type='email'
                name='email'
                value={fields.email.value}
                onChange={handleChange}
                onBlur={() => validateInput('email')}
                required
                className={styles['form__input']}
                error={fields.email.errors.length}
            />
            <FormInput
                id='password'
                label='Password'
                type='password'
                name='password'
                value={fields.password.value}
                onChange={handleChange}
                onBlur={() => validateInput('password')}
                required
                className={styles['form__input']}
                error={fields.password.errors.length}
            />
            <div className={styles['form__buttons']}>
                <Button
                    loading={loading}
                    tag='button'
                    type='submit'
                >
                    Sign In
                </Button>
                <Button href='/auth/signup'>
                    Sign Up
                </Button>
            </div>
        </form>
    );
};

export default SignInForm;
