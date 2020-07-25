import React, {useCallback, useState} from 'react';
import { useHistory } from 'react-router-dom';

import styles from './SignUpForm.module.scss';

import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";

import {validate} from "../../utils/validators";

import useFormWithValidation from "../../hooks/useFormWithValidation";
import FileUploadInput from "../FileUploadInput/FileUploadInput.component";

const defaultState = {
    name: {
        value: '',
        validation: (values, field) => (
            validate(values, field)
                .trim()
                .required('Name')
        ),
        errors: []
    },
    surname: {
        value: '',
        validation: (values, field) => (
            validate(values, field)
                .trim()
                .required('Surname')
        ),
        errors: []
    },
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
    },
    confirmPassword: {
        value: '',
        validation: (values, field) => (
            validate(values, field)
                .isEqualTo('password', 'Passwords are nor equal')
        ),
        errors: []
    }
};

const SignUpForm = ({ signUpStart, loading }) => {
    const history = useHistory();

    const {
        fields,
        validateForm,
        handleChange,
        validateInput
    } = useFormWithValidation(defaultState);

    const [state, setState] = useState({
        icon: ''
    });

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();

            if (!loading) {
                const errors = validateForm();

                !errors.length && signUpStart({
                    icon: state.icon,
                    history,
                    name: fields.name.value,
                    surname: fields.surname.value,
                    email: fields.email.value,
                    password: fields.password.value
                });
            }
        },
        [validateForm, state, fields, loading, signUpStart, history]
    );

    const handleFileSelect = useCallback(
        e => {
            const { files, name } = e.target;

            setState({
                ...state,
                [name]: files[0]
            });
        },
        [state]
    );

    return (
        <form
            className={styles['sign-up-form']}
            onSubmit={handleSubmit}
        >
            <h2 className={styles['form__title']}>
                Sign Up
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
                id='name'
                label='Name'
                type='text'
                name='name'
                value={fields.name.value}
                onChange={handleChange}
                onBlur={() => validateInput('name')}
                required
                className={styles['form__input']}
                error={fields.name.errors.length}
            />
            <FormInput
                id='surname'
                label='Surname'
                type='text'
                name='surname'
                value={fields.surname.value}
                onChange={handleChange}
                onBlur={() => validateInput('surname')}
                required
                className={styles['form__input']}
                error={fields.surname.errors.length}
            />
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
            <FormInput
                id='confirmPassword'
                label='Retype password'
                type='password'
                name='confirmPassword'
                value={fields.confirmPassword.value}
                onChange={handleChange}
                onBlur={() => validateInput('confirmPassword')}
                required
                className={styles['form__input']}
                error={fields.confirmPassword.errors.length}
            />
            <FileUploadInput
                file={state.icon ? state.icon.name : ''}
                id='icon'
                name='icon'
                label='Upload jpg icon'
                onChange={handleFileSelect}
                className={styles['form__input']}
            />
            <div className={styles['form__buttons']}>
                <Button
                    tag='button'
                    type='submit'
                    loading={loading}
                >
                    Sign Up
                </Button>
                <Button href='/auth/signin'>
                    Sign In
                </Button>
            </div>
        </form>
    );
};

export default SignUpForm;
