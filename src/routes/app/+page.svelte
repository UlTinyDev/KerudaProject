<script>
  import FormInput from "$lib/components/FormInput.svelte";
</script>

<div
  class="h-full w-full grid place-items-center sm:fix-login sm:bg-base-300 pt-36 sm:pt-0 sm:w-96"
>
  <form class="text-center">
    <p class="text-xl mb-4">Login</p>
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
  </form>
</div>
