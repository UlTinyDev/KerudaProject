<script>
  import FormInput from "$lib/components/FormInput.svelte";
  export let title = "";
  export let method = "post";
  export let action = "";
  export let background = "https://w.wallha.com/ws/14/GiOkX9mS.png";
</script>

<div
  class="absolute w-full bg-[url('{background}')] -z-10 bg-cover bg-center fix"
></div>

<div
  class="h-full w-full grid place-items-center sm:fix-login sm:bg-base-300/45 pt-36 sm:pt-0 sm:w-96 sm:backdrop-blur-md"
>
  <form
    {method}
    {action}
    class="text-center bg-base-300/45 sm:bg-base-100/100 pb-6 p-6 rounded-lg backdrop-blur-md border-[1px] sm:border-none border-white/10 sm:backdrop-blur-0 shadow-xl"
  >
    <p class="text-xl mb-4">{title}</p>
    <slot />
    <button class="btn btn-primary w-full">{title}</button>
  </form>
</div>

<style>
  .fix {
    height: calc(100svh - 5em);
  }
</style>
