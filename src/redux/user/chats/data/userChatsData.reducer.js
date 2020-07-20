const DEFAULT_STATE = [];

export const userChatsDataReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        default: return state;
    }
};