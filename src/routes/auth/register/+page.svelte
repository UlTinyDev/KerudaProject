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
    placeholder="amongus@yahoo.com"
  />
  <FormInput
    cornerPlaceholder="Jelszó"
    icon="key"
    placeholder="123456"
    type="password"
  />
</UserActionForm>
