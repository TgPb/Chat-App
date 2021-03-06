import {useCallback, useState} from "react";

const useFormWithValidation = defaultState => {
    const [fields, setFields] = useState(defaultState);

    const handleChange = useCallback(
        e => {
            const { name, value } = e.target;

            setFields({
                ...fields,
                [name]: {
                    ...fields[name],
                    value,
                    errors: []
                }
            });
        },
        [fields]
    );

    const handleReset = useCallback(
        () => {
            setFields(defaultState);
        },
        [defaultState]
    );

    const validateInput = useCallback(
        fieldName => {
            const { errors } = fields[fieldName].validation(fields, fieldName);

            errors.length && setFields({
                ...fields,
                [fieldName]: {
                    ...fields[fieldName],
                    errors
                }
            });
        },
        [fields]
    );

    const validateForm = useCallback(
        () => Object.entries(fields).reduce(
            (acc, [name, field]) => {
                if (field.validation) {
                    const { errors } = field.validation(fields, name);

                    return [
                        ...acc,
                        ...errors
                    ];
                }
                return acc;
            },
            []
        ),
        [fields]
    );

    return {
        fields,
        handleChange,
        validateForm,
        validateInput,
        handleReset
    }
};

export default useFormWithValidation;