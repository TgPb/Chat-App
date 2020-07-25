import React, {useCallback, useState} from 'react';

import styles from './ParticipantsList.module.scss';

const ParticipantsList = ({ participants }) => {
    const [hidden, setHidden] = useState(true);

    const toggleHidden = useCallback(
        () => {
            setHidden(!hidden);
        },
        [hidden]
    );

    return (
        <div className={styles['participants']}>
            <span
                onClick={toggleHidden}
                className={styles['participants__label']}
            >
                { participants.length } participant{ participants.length > 1 ? 's': '' }
            </span>
            {
                !hidden && (
                    <div className={styles['participants__list']}>
                        {
                            participants.map(participant => {
                                const { name, surname, isOnline } = participant;

                                return (
                                    <div className={styles['list__item']}>
                                        <span className={styles['item__full-name']}>
                                            { name } { surname }
                                        </span>
                                        {
                                            isOnline && (
                                                <div
                                                    className={styles['item__status']}
                                                />
                                            )
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                )
            }
        </div>
    );
};

export default ParticipantsList;
