<script lang="ts">
	import { page } from '$app/stores';
	import MenuItem from '$lib/components/MenuItem.svelte';
	import type { LayoutData } from './$types';
	export let data: LayoutData;

	type AccountPageMenuData = {
		href: string;
		title: string;
		icon: string;
	};

	let accountPageMenuDatas: AccountPageMenuData[] = [
		{
			title: 'Fiók',
			href: '/account',
			icon: 'person'
		}
	];
</script>

<div class="flex flex-row">
	<div class="p-4">
		<ul class="menu bg-base-200 w-56 rounded-box">
			{#each { length: 15 } as item}
				<MenuItem title="Test" />
			{/each}
		</ul>
	</div>
	<div class="m-3">
		<div class=" w-full">
			<p>Settings</p>
			<div class="divider my-0" />
			<slot />
		</div>
	</div>
</div>
