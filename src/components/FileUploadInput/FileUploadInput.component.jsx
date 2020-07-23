import React from 'react';
import classNames from 'classnames';

import styles from './FileUploadInput.module.scss';

const FileUploadInput = ({ className, file, label, id, ...otherProps }) => {
    const uploadStyles = classNames(
        styles['file-upload'],
        {
            [className]: className
        }
    );

    return (
        <div
            className={uploadStyles}
        >
            <input
                id={id}
                type='file'
                className={styles['file-upload__input']}
                {...otherProps}
            />
            <label
                className={styles['file-upload__label']}
                htmlFor={id}
            >
                {
                    label || 'Choose a file...'
                }
            </label>
            <p className={styles['file-upload__file-name']}>
                { file }
            </p>
        </div>
    );
};

export default FileUploadInput;
