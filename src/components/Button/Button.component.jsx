import React, {useCallback} from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';

import {Link} from "react-router-dom";

const Button = ({ onCLick = ()=>{}, className, loading, tag: Tag = 'div', href, children, ...otherProps }) => {
    const buttonStyles = classNames(
        styles['button'],
        {
            [styles['button_loading']]: loading
        },
        {
            [className]: className
        }
    );

    const handleClick = useCallback(
        () => {
            !loading && onCLick();
        },
        [loading, onCLick]
    );

    return (
        href ? (
            <Link
                className={styles['button_link']}
                to={href}
            >
                { children }
            </Link>
        ) : (
            <Tag
                className={buttonStyles}
                onClick={handleClick}
                {...otherProps}
            >
                {
                    loading && (
                        <div className={styles['button__loader']} />
                    )
                }
                { children }
            </Tag>
        )
    );
};

export default Button;
