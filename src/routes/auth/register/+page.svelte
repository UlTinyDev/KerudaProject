<script>
	import FormInput from '$lib/components/FormInput.svelte';
	import UserActionForm from '$lib/components/UserActionForm.svelte';
</script>

<UserActionForm title="Regisztrálás" action="?/register">
	<FormInput
		cornerPlaceholder="Felhasználó név"
		icon="person"
		placeholder="xX_darkslayer_Xx"
		name="username"
	/>
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
	<FormInput
		cornerPlaceholder="Jelszó megerősítése"
		icon="lock"
		placeholder="123456"
		type="password"
		name="passwordConfirm"
	/>

	<svelte:fragment slot="after">
		<a href="/auth/login">
			<button class="btn btn-sm btn-ghost mt-2 text-sm text-secondary opacity-80"
				>Bejelentkezés</button
			>
		</a>
	</svelte:fragment>
</UserActionForm>
