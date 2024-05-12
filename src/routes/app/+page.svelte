<script>
  import FormInput from "$lib/components/FormInput.svelte";
</script>

<div class="w-96 bg-base-300 flex items-center login">
  <form class="w-full flex flex-col items-center">
    <p class="text-2xl mb-6">Login</p>

    <FormInput
      placeholder="mari néni"
      cornerPlaceholder="Felhasználó név"
      icon="person"
    />
    <!-- <FormInput
      placeholder="xx_amongus_slayer@yahoo.com"
      cornerPlaceholder="Email"
      icon="email"
    /> -->
    <FormInput placeholder="1234" cornerPlaceholder="Jelszó" icon="key" />
  </form>
</div>

<style>
  .login {
    height: calc(100svh - 5em);
  }
</style>
