import React from 'react';
import classNames from "classnames";

import styles from './UserIconWithStatus.module.scss';
import UserIcon from "../UserIcon/UserIcon.component";

const UserIconWithStatus = ({ isOnline, className, ...otherProps }) => {
    const iconStyles = classNames(
        styles['user-icon-with-status'],
        {
            [className]: className
        }
    );

    return (
        <div className={iconStyles}>
            <UserIcon
                {...otherProps}
            />
            {
                isOnline && <div className={styles['icon__status']} />
            }
        </div>
    );
};

export default UserIconWithStatus;
