import React from 'react';
import classNames from 'classnames';

import styles from './Button.module.scss';
import {Link} from "react-router-dom";

const Button = ({ className, loading, tag: Tag = 'div', href, children, ...otherProps }) => {
    const buttonStyles = classNames(
        styles['button'],
        {
            [styles['button_loading']]: loading
        },
        {
            [className]: className
        }
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
                {...otherProps}
            >
                { children }
            </Tag>
        )
    );
};

export default Button;
