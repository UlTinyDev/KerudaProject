<script>
	import FormInput from '$lib/components/FormInput.svelte';
	import UserActionForm from '$lib/components/UserActionForm.svelte';

	export let form;
</script>

<UserActionForm title="Bejelentkezés" action="?/login">
	<FormInput
		cornerPlaceholder="Email"
		icon="email"
		type="email"
		placeholder="amongus@yahoo.com"
		name="email"
	/>
	<FormInput
		cornerPlaceholder="Jelszó"
		icon="key"
		placeholder="123456"
		type="password"
		name="password"
	/>

	<svelte:fragment slot="after">
		<a href="/auth/register">
			<button class="btn btn-sm btn-ghost my-2 text-sm text-secondary opacity-80"
				>Regisztrálás</button
			>
		</a>
		{#if form?.notVerified}
			<div role="alert" class="alert alert-warning">
				<span class="material-symbols-rounded">warning</span>
				<span>Ez a fiók még nincs ellenőrizve!</span>
			</div>
		{/if}
	</svelte:fragment>
</UserActionForm>
