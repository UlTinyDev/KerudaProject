export const serializeNonPOJO = (/** @type {Object} */ obj) => {
    return structuredClone(obj);
};
