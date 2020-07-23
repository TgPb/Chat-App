export const validate = (values, fieldName) => {
    const { value } = values[fieldName];

    return {
        value,
        errors: [],
        isEmail(message) {
            const result = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.value);
            !result && this.errors.push(message || 'Invalid email');
            return this;
        },
        required(fieldName, message) {
            !this.value.length && this.errors.push(message || `${fieldName} is required`);
            return this;
        },
        trim() {
            this.value = this.value.trim();
            return this;
        },
        isAlphaNumeric(fieldName, message) {
            const result = /\W/.test(this.value);
            result && this.errors.push(message || `${fieldName} must be alphanumeric`)
            return this;
        },
        isEqualTo(equalTo, message) {
            this.value !== values[equalTo].value && this.errors.push(message);
            return this;
        },
        minLength(length, fieldName, message) {
            this.value.length < length && this.errors.push(message || `${fieldName}'s min length is ${length}`);
            return this;
        },
        maxLength(length, fieldName, message) {
            this.value.length > length && this.errors.push(message || `${fieldName}'s max length is ${length}`);
            return this;
        }
    }
}