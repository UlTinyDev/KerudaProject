<script lang="ts">
	import FormInput from '$lib/components/FormInput.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="w-full h-fit flex justify-center">
	<div class="bg-base-200 w-[34rem] rounded-md m-6 p-4 border-white/10 border-[1px] shadow-2xl">
		<h1 class="text-xl"><strong>Fiók beállítások</strong></h1>
		<div class="divider mt-0"></div>
		<div class="flex flex-col items-center">
			<div class="flex flex-row">
				<div class="indicator items-center w-fit">
					<div class="avatar">
						<span
							class="indicator-item indicator-bottom indicator-start badge badge-secondary material-symbols-rounded"
							>edit</span
						>
						<div class="w-32 h-32 rounded-lg">
							<!-- svelte-ignore a11y-missing-attribute -->
							<img
								class="object-contain"
								src="https://cdn.discordapp.com/avatars/627801505654636564/e7a25efcb05b3efbfd8868c9ed555149.webp?size=1024&format=webp&width=0&height=256"
							/>
						</div>
					</div>
				</div>

				<div class="p-4 flex items-center">
					<form action="">
						<FormInput cornerPlaceholder="Felhasználó név" icon="person" value={data.user?.name} />
						<FormInput
							cornerPlaceholder="Megjelenítendő név"
							icon="tag"
							value={data.user?.username}
						/>
						<button class="btn btn-primary w-full">Változások mentése</button>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
