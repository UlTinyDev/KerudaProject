import { error, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());
		try {
			//TODO: WARNING! password must be longer than 8 characters
			await locals.pb.collection('users').create({ ...body, name: body.username });
			//TODO: Uncommed this line to enable email verification!
			// await locals.pb.collection('users').requestVerification(body.email as string);
		} catch (err) {
			console.log(`Error: ${err}`);
			throw error(500, 'An error occured while registering!');
		}
		throw redirect(303, '/auth/login');
	}
};
