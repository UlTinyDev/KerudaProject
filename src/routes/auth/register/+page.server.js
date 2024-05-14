/** @type {import('./$types').Actions} */
export const actions = {
    register: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData());
    },
};
