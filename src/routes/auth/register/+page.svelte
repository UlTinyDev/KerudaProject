<script>
  import FormInput from "$lib/components/FormInput.svelte";
  import UserActionForm from "$lib/components/UserActionForm.svelte";
</script>

<UserActionForm title="Regisztrálás">
  <FormInput
    cornerPlaceholder="Felhasználó név"
    icon="person"
    placeholder="xX_darkslayer_Xx"
  />
  <FormInput
    cornerPlaceholder="Email"
    icon="email"
    type="email"
    placeholder="amongus@yahoo.com"
  />
  <FormInput
    cornerPlaceholder="Jelszó"
    icon="key"
    placeholder="123456"
    type="password"
  />

  <svelte:fragment slot="after">
    <a href="/auth/login">
      <button
        class="btn btn-sm btn-ghost mt-2 text-sm text-secondary opacity-80"
        >Bejelentkezés</button
      >
    </a>
  </svelte:fragment>
</UserActionForm>
