import React from 'react';

import styles from './UserCard.module.scss';
import UserIconWithStatus from "../UserIconWithStatus/UserIconWithStatus.component";
import Button from "../Button/Button.component";

const UserCard = ({ user = {}, startSignOut }) => {
    const { name, surname, isOnline, icon } = user;

    return (
        <div className={styles['user-card']}>
            <UserIconWithStatus
                src={icon}
                isOnline={isOnline}
                size='50px'
                className={styles['user-card__icon']}
            />
            <span className={styles['user-card__full-name']}>
                { name } { surname }
            </span>
            <Button
                className={styles['user-card__exit-btn']}
                color='white'
                onCLick={startSignOut}
            >
                Sign Out
            </Button>
        </div>
    );
};

export default UserCard;
