type unknownObject = {
	[key: string]: unknown;
} | null;

export const serializeNonPOJO = (obj: unknownObject) => {
	return structuredClone(obj);
};
