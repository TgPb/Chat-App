export const normalizeData = data => data.reduce(
    (acc, item) => ({
        ...acc,
        [item._id]: {
            ...item
        }
    }),
    {}
);

export const denormalizeData = data => Object.values(data);