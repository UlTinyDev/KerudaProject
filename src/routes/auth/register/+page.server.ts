import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	register: async ({ locals, request }) => {
		const body = Object.fromEntries(await request.formData());
	}
};
