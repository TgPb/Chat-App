import React from 'react';
import classNames from "classnames";

import styles from './UserIconWithStatus.module.scss';
import UserIcon from "../UserIcon/UserIcon.component";

const UserIconWithStatus = ({ size, src, online, className }) => {
    const iconStyles = classNames(
        styles['user-icon-with-status'],
        {
            [className]: className
        }
    );

    return (
        <div className={iconStyles}>
            <UserIcon
                src={src}
                size={size}
            />
            {
                online && <div className={styles['icon__status']} />
            }
        </div>
    );
};

export default UserIconWithStatus;
