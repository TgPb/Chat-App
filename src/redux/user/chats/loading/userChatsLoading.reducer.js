const DEFAULT_STATE = false;

export const userChatsLoadingReducer = (state = DEFAULT_STATE, action) => {
    const { type } = action;

    switch (type) {
        default: return state;
    }
};