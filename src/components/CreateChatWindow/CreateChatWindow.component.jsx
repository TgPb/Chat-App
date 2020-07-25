import React, {useCallback, useState} from 'react';
import { useHistory } from 'react-router-dom';

import styles from './CreateChatWindow.module.scss';

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
                .required('Chat name')
        ),
        errors: []
    },
    description: {
        value: '',
        errors: []
    }
};

const CreateChatWindow = ({ loading, createChat }) => {
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

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();

            if (!loading) {
                const errors = validateForm();
                !errors.length && createChat({
                    name: fields.name.value,
                    description: fields.description.value,
                    icon: state.icon,
                    history
                });
            }
        },
        [validateForm, fields, loading, createChat, state, history]
    );

    return (
        <div
            className={styles['create-chat-window']}
        >
            <form
                className={styles['create-chat-form']}
                onSubmit={handleSubmit}
            >
                <h2 className={styles['form__title']}>
                    Create chat
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
                    name='name'
                    value={fields.name.value}
                    onChange={handleChange}
                    onBlur={() => validateInput('name')}
                    required
                    className={styles['form__input']}
                    error={fields.name.errors.length}
                />
                <FormInput
                    id='description'
                    label='Description'
                    name='description'
                    value={fields.description.value}
                    onChange={handleChange}
                    className={styles['form__input']}
                    error={fields.description.errors.length}
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
                        Create
                    </Button>
                    <Button href='/chats'>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default CreateChatWindow;
