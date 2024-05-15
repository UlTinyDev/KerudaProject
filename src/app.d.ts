// See https://kit.svelte.dev/docs/types#app

import type Client from 'pocketbase';
import type { AuthModel } from 'pocketbase';

type User = AuthModel | undefined;

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface LayoutData {
			user: User;
		}
		// interface PageState {}
		// interface Platform {}
		interface Locals {
			pb: Client;
			user: User;
		}
	}
}

export {};
