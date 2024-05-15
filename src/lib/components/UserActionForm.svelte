<script>
	export let title = '';
	export let method = 'POST';
	export let action = '';
</script>

<img
	class="absolute w-full -z-10 bg-cover bg-center fix object-cover"
	src="/background.webp"
	alt=""
/>

<div
	class="h-full w-full grid place-items-center sm:fix-login sm:bg-base-300/45 pt-36 sm:pt-0 sm:w-96 sm:backdrop-blur-md"
>
	<form
		{method}
		{action}
		class="text-center bg-base-300/45 sm:bg-base-100/100 pb-6 p-6 rounded-lg backdrop-blur-md border-[1px] sm:border-none border-white/10 sm:backdrop-blur-0 shadow-xl text-base-content"
	>
		<p class="text-xl mb-4">{title}</p>
		<slot />
		<button type="submit" class="btn btn-primary w-full">{title}</button>
		<slot name="after" />
	</form>
</div>

<style>
	.fix {
		height: calc(100svh - 4em);
	}
</style>
