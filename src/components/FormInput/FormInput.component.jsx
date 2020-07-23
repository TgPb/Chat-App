import React from 'react';
import classNames from 'classnames';

import styles from './FormInput.module.scss';

const FormInput = ({ required, error, className, label, id, type = 'text', ...otherProps }) => {
    const formInputStyles = classNames(
        styles['form-input'],
        {
            [className]: className
        }
    );

    const inputStyles = classNames(
        styles['form-input__input'],
        {
            [styles['form-input__input_error']]: error
        }
    );

    const labelStyles = classNames(
        styles['form-input__label'],
        {
            [styles['form-input__label_required']]: required
        }
    );

    return (
        <div className={formInputStyles}>
            <input
                id={id}
                type={type}
                className={inputStyles}
                placeholder='a'
                {...otherProps}
            />
            {
                label && (
                    <label
                        htmlFor={id}
                        className={labelStyles}
                    >
                        { label }
                    </label>
                )
            }
        </div>
    );
};

export default FormInput;
