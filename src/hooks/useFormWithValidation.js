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
                const { errors } = field.validation(fields, name);

                return [
                    ...acc,
                    ...errors
                ];
            },
            []
        ),
        [fields]
    );

    return {
        fields,
        handleChange,
        validateForm,
        validateInput
    }
};

export default useFormWithValidation;