<script>
  import FormInput from '$lib/components/FormInput.svelte';

    /** @type {import('./$types').PageData} */
    export let data;
</script>


<div class="h-lvh w-96 bg-base-300 flex items-center">
    <form class="w-full flex flex-col items-center">
        <p class="text-2xl m-6">Login</p>

        
        <FormInput placeholder="mari néni" cornerPlaceholder="Felhasználó név" />
        <FormInput placeholder="mari néni" cornerPlaceholder="Felhasználó név" />
    </form>
</div>