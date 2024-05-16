<script>
	export let type = 'text';
	export let placeholder = '';
	export let cornerPlaceholder = '';
	export let icon = '';
	export let name = '';
	export let value = '';
</script>

<label class="mb-3 block">
	<label class="w-full max-w-xs">
		<div class="label">
			<span class="label-text">{cornerPlaceholder}</span>
		</div>

		<label class="input input-bordered flex items-center gap-2 shadow-2xl">
			<p class="material-symbols-rounded text-md">{icon}</p>
			<input {name} {type} class="grow" {placeholder} {value} />
		</label>
	</label>
</label>
